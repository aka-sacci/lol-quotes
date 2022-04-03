import styled from 'styled-components'
import { iQuoteProps } from "@app/@types/myTypes";

function Quote (props: iQuoteProps) {
    const {quote, champion} = props

    return(
        <>
        {
            typeof champion === 'string' ? 
            <QuoteParagraph>'{quote}' - <BoldChampion>{champion}</BoldChampion></QuoteParagraph> : 
            <QuoteParagraph>{quote} - Press 'SAY' to display a word!</QuoteParagraph>
        }
        </>
    )
}

export default Quote

const QuoteParagraph = styled.p`
    font-size: 1.98em;
    text-align: center;
    font-weight: 800;
`

const BoldChampion = styled.b`
    font-size: 1.3em;
    font-weight: 900;
`


