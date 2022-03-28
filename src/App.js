//Dependencies
import { useState, useEffect } from "react";
import styled from 'styled-components'

//Components
import ChampionImage from "./components/ChampionImage"
import Quote from "./components/Quote";
import Button from "./components/Button";
import ErrorWrapper from "./components/ErrorWrapper";

//ButtonStyles
import QuoteButtonStyle from './components/Button/styles/QuoteButon'
import MuteButtonStyle from './components/Button/styles/MuteButton'

//Services
import PlayAudio from "./services/PlayAudio";
import SelectQuoteIndex from "./services/SelectQuote";
const getApiData = require('./services/GetApiData')
const GetApiData = new getApiData()

function App() {
  const [champion, setChampion] = useState("Mordekaiser")
  const [quote, setQuote] = useState("Lol Quotes")
  const [quoteLength, setQuoteLength] = useState()
  const [quoteIndex, setQuoteIndex] = useState()
  const [isQuoteButtonDisabled, setIsQuoteButtonDisabled] = useState(false)
  const [isMuteButtonDisabled, setIsMuteButtonDisabled] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [initialRender, setInitialRender] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
    } else {
      if (!isMuted) handleAudio(quoteIndex)
    }
  }, [quoteIndex]);

  useEffect(() => {
    if(!error) {
      return
    }
    else {
      setTimeout(() => {
        setError(false)
      }, 60000)
    }
  }, [error])


  const handleQuoteClick = async () => {

    try {
      const quotesQtd = await GetApiData.getQtdQuotes()
      const quoteIndex = SelectQuoteIndex(quotesQtd)
      const { champion, quote, length } = await GetApiData.getQuote(quoteIndex)
      setChampion(champion)
      setQuote(quote)
      setQuoteLength(length)
      setQuoteIndex(quoteIndex)
    } catch (err) {
      setError(err)
    }
  }

  const handleMuteClick = () => {
    setIsMuted(!isMuted)

  }

  const handleAudio = (quoteToPlay) => {
    setIsQuoteButtonDisabled(true)
    setIsMuteButtonDisabled(true)
    PlayAudio(quoteToPlay)

    setTimeout(() => {
      setIsQuoteButtonDisabled(false)
      setIsMuteButtonDisabled(false)
    }, quoteLength)

  }

  return (
    <>
      <Content className="container">
      {!error ? null : <ErrorWrapper error={error}></ErrorWrapper>}
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
