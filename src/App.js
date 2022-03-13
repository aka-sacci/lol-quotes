//Dependencies
import { useState, useEffect } from "react";
import styled from 'styled-components'

//Components
import ChampionImage from "./components/ChampionImage"
import Quote from "./components/Quote";
import Button from "./components/Button";

//Services
import GetApiData from './services/GetApiData'
import PlayAudio from "./services/PlayAudio";
import SelectQuoteIndex from "./services/SelectQuote";


function App() {
  const [champion, setChampion] = useState("Mordekaiser")
  const [quote, setQuote] = useState("Lol Quotes")
  const [quoteLength, setQuoteLength] = useState()
  const [quoteIndex, setQuoteIndex] = useState()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [initialRender, setInitialRender] = useState(true)
  
  useEffect(() => {
    if(initialRender) {
       setInitialRender(false)
    } else {
    handleAudio(quoteIndex)
    }
  }, [quoteIndex]);


  const handleClick = async () => {
    const quotes = await GetApiData()
    const quoteIndex = SelectQuoteIndex(quotes.length)
    setChampion(quotes[quoteIndex].champion)
    setQuote(quotes[quoteIndex].quote)
    setQuoteLength(quotes[quoteIndex].length)
    setQuoteIndex(quoteIndex)
  }

  const handleAudio = async (quoteToPlay) => {
    setIsButtonDisabled(true)
    PlayAudio(quoteToPlay)
    setTimeout(() => setIsButtonDisabled(false), quoteLength)  
  } 

  return (
    <Content className="container">
      <QuoteDiv className="container">
      <Quote quote={quote} champion={champion} />
      </QuoteDiv>
    <ChampionImage champion={champion}/>
    <Button text="Say" onClick={handleClick} disabled={isButtonDisabled}/>
    </Content>
  );
}

export default App;

const QuoteDiv = styled.div`
  position: absolute;
  top: 40px;
`

const Content = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   
  `





