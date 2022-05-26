import { useState, useEffect } from "react"
import styled from "styled-components"
import { iQuote, iQuotes } from "../../@types/myTypes"
import ChampionQuotesDiv from "./ChampionQuotesDiv"

function QuotesViewWrapper(quotes: iQuotes) {
    const [champions, setChampions] = useState<any>()

    useEffect(() => {
        if (quotes.quotes === undefined) {

        } else {
            returnChampions(quotes.quotes)
        }
    }, [quotes.quotes])

    const returnChampions = (thisQuotes: Array<iQuote>) => {
        const championsRep = thisQuotes.map((Quote: iQuote) => {
            return Quote.champion
        })
        const returnedChampions = [...new Set(championsRep)]
        setChampions(returnedChampions)
    }

    const returnChampionElements = (allChampions: Array<string>) => {
        const allChampionsElements = allChampions.map((thisChampion) => {
            const element = returnQuotesElementsFromChampion(thisChampion)
            return element
        })
        const allChampionsElementsConcated = allChampionsElements.concat()
        return (<>{allChampionsElementsConcated}</>)
    }

    const returnQuotesElementsFromChampion = (champion: string) => {
        
        const thisChampionQuotes: any = quotes.quotes.filter((Quote: iQuote) => {
           return Quote.champion === champion ? true : false
        });
        return (<ChampionQuotesDiv key={champion} quotes={thisChampionQuotes} />)
    }

    return (
        <QuotesViewDiv className="container">
            {champions === undefined ? <></> : returnChampionElements(champions)}
        </QuotesViewDiv>
    )
}

export default QuotesViewWrapper

const QuotesViewDiv = styled.div`
    background-color: #060e1f;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: calc(100vw - 20vw);
    min-height: calc(100vh - 10vh);
    transition: max-height 0.8s;
    color: #e6e6e6;
    font-family: Poppins, sans-serif;
    display: block;
`
