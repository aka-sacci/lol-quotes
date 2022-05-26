import styled from "styled-components"
import { useEffect, useRef, useState } from 'react'
import { iQuote } from "../../../@types/myTypes"
import { PlayFill, StopFill } from "react-bootstrap-icons"

function ChampionQuotesDiv(quotes: any) {

    const [isPlaying, setIsPlaying] = useState<Array<boolean>>([]);
    const audioRef = useRef<Array<any>>([document.createElement('audio')]);

    //Para cada fala cadastrada, cria um novo elemento no isPlaying (padrão false, pois começa tudo mutado)
    useEffect(() => {
        let auxIsPlaying: Array<boolean> = []
        quotes.quotes.forEach(() => {
            auxIsPlaying.push(false)
        })
        setIsPlaying(auxIsPlaying)
    }, [quotes.quotes])

    //Retorna a imagem do champion
    const returnChampionImg = () => {
        return <ChampionImg
            src={`/images/icons/ChampionIcons/${quotes.quotes[0].champion}.jpg`}
            alt={quotes.quotes[0].champion}

        />
    }

    //Retorna o nome do campeão
    const returnChampionName = () => {
        return <ChampionName>
            {quotes.quotes[0].champion}
        </ChampionName>
    }

    //Retorna a quantidade de falas
    const countQtdQuotes = () => {
        let qtdQuotes = quotes.quotes.length;
        return <ChampionQuotesQtd>{qtdQuotes} falas registradas</ChampionQuotesQtd>
    }

    //Retorna todos os elementos de audio, botão de play & fala
    const returnAllAudiosElements = () => {
        const allElements = quotes.quotes.map((quote: iQuote, index: number) => {
            const element = returnAudioElement(quote, index)
            return element
        })
        const allAudioElementsConcated = allElements.concat()
        return (<ChampionQuotesBodyDiv>{allAudioElementsConcated}</ChampionQuotesBodyDiv>)
    }

    //Retorna cada elemento de audio, botão de play & fala -> Para cada elemento no array quotes, retorna apenas um elemento
    const returnAudioElement = (quote: iQuote, index: number) => {
        const audio = "/audios/" + quote._id + ".ogg"
        return <p key={`p${quote._id}`}>
            <audio
                src={audio}
                preload="metadata"
                ref={el => audioRef.current[index] = el}
                key={`audio${quote._id}`}
                onEnded={() => resetIsPlaying(index)} />
            <TogglePlayPauseBtn onClick={() => togglePlayPause(index)} key={`button${quote._id}`}>
                {!isPlaying[index] ? <PlayFill/> : <StopFill/>}
            </TogglePlayPauseBtn>
            <ItalicQuote>"{quote.quote}"</ItalicQuote>
        </p>
    }

    //play - pause
    const togglePlayPause = (index: number) => {
        const prevValue = isPlaying[index];
        let auxIsPlaying = isPlaying.map((value: boolean, thisIndex: number) => {
            return thisIndex === index ? !value : value
        })
        setIsPlaying(auxIsPlaying)
        if (prevValue === false) {
            audioRef.current[index].play()

        } else {
            audioRef.current[index].pause()
            audioRef.current[index].currentTime = 0
        }
    }

    //Reseta o isPlaying quando o audio acabar de tocar
    const resetIsPlaying = (index: number) => {
        let auxIsPlaying = isPlaying.map((value: boolean, thisIndex: number) => {
            return thisIndex === index ? false : value
        })
        setIsPlaying(auxIsPlaying)
    }

    return (
        <>
            <ChampionQuotesMainDiv>
                <ChampionQuotesTitleDiv>
                    {returnChampionImg()}
                    {returnChampionName()}
                    {countQtdQuotes()}
                </ChampionQuotesTitleDiv>
                {returnAllAudiosElements()}
            </ChampionQuotesMainDiv>
        </>
    )
}

export default ChampionQuotesDiv

const ChampionQuotesMainDiv = styled.div`
    margin-top: 3rem;
    display: block;
`

const ChampionQuotesTitleDiv = styled.div`

`

const ChampionImg = styled.img`
    max-width: 20vw;
    width: 10rem; 
    height: 10rem;
    border-radius: 50%;
    margin-top: 2rem;
    float: left;
    margin-right: 1rem;
  `

const ChampionName = styled.p`
    display: flex;
    margin-top: 5.5rem;
    font-size: 2.5rem;
    font-weight: bolder;
    
`

const ChampionQuotesQtd = styled.p`
    display: flex;
    margin-left: 1rem;
`

const ChampionQuotesBodyDiv = styled.div`
    margin-top: 7em;
    margin-left: 1em;
    margin-right: 1em;
`

const TogglePlayPauseBtn = styled.button`
    border-radius: 0.5rem;
    color: #ffffff;
    background-color: #006cb0;
    width: 2em;
    height: 2em;
    align-items: center;

    :hover {
        background-color: #b30000;
    }
`

const ItalicQuote = styled.i`
    margin-left: 0.5rem;
`