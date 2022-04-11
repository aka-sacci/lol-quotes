//Dependencies
import { useState, useEffect } from "react";
import styled from 'styled-components'

//Components
import Button from "./components/Button";
import ChampionImage from "./components/ChampionImage"
import ErrorWrapper from "./components/ErrorWrapper";
import Quote from "./components/Quote";

//ButtonStyles
import MuteButtonStyle from './components/Button/styles/MuteButton'
import QuoteButtonStyle from './components/Button/styles/QuoteButton'


//Services
import getApiData from './services/GetApiData/index'
import playAudio from "./services/PlayAudio";
import selectQuoteIndex from "./services/SelectQuote";
import { iQuotes } from "./@types/myTypes";
const GetApiData = new getApiData()

function App() {
  const [quotes, setQuotes] = useState<any>()
  const [champion, setChampion] = useState<string | null>(null)
  const [quote, setQuote] = useState<string>("Lol Quotes")
  const [quoteLength, setQuoteLength] = useState<number>(0)
  const [quoteIndex, setQuoteIndex] = useState<number>(-1)
  const [isQuoteButtonDisabled, setIsQuoteButtonDisabled] = useState<boolean>(false)
  const [isMuteButtonDisabled, setIsMuteButtonDisabled] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [initialRender, setInitialRender] = useState<boolean>(true)
  const [error, setError] = useState<Error>(Error)
  const [errorBool, setErrorBool] = useState<boolean>(false)

  //Audio
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
    } else {
      if (!isMuted) handleAudio(quoteIndex)
    }
  }, [quoteIndex]);

  //Quotes
  useEffect(() => {
    const fetchAllQuotes = async () => {
      const data = await GetApiData.getAllQuotes()
      return data
    }

    fetchAllQuotes()
      .then
      ((data: iQuotes) => {
        setQuotes(data)
      })
      .catch((err: any) => {
        setError(err)
        setErrorBool(true)
      })

  }, [])


  const handleQuoteClick = async () => {
    try {
      const auxQuoteQtd = quotes.length
      const auxQuoteIndex = selectQuoteIndex(auxQuoteQtd)
      const { champion, quote, length } = quotes[auxQuoteIndex]
      setChampion(champion)
      setQuote(quote)
      setQuoteLength(length)
      setErrorBool(false)
      setQuoteIndex(auxQuoteIndex)
    } catch(err: any) {
      setError(err)
      setErrorBool(true)
    }
  
  }

  const handleMuteClick = () => {
    setIsMuted(!isMuted)
  }

  const handleAudio = (quoteToPlay: any) => {

    setIsQuoteButtonDisabled(true)
    setIsMuteButtonDisabled(true)
    playAudio(quoteToPlay)

    setTimeout(() => {
      setIsQuoteButtonDisabled(false)
      setIsMuteButtonDisabled(false)
    }, quoteLength)

  }

  return (
    <>
      <Content className="container">
        {!errorBool ? null : <ErrorWrapper error={error} />}
        <QuoteDiv className="container">
          <Quote
            quote={quote}
            champion={champion}
          />
        </QuoteDiv>

        <ChampionImage
          champion={champion}
        />

        <Button text="Say"
          onClick={handleQuoteClick}
          disabled={isQuoteButtonDisabled}
          theme={QuoteButtonStyle}
        />

        <Button text={null}
          onClick={handleMuteClick}
          disabled={isMuteButtonDisabled}
          theme={MuteButtonStyle(isMuted)}
        />
      </Content>
    </>
  );
}

export default App;

const QuoteDiv = styled.div`
  position: absolute;
  top: 4.3rem;
`

const Content = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   
  `
