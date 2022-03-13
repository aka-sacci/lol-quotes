import styled from 'styled-components'

function Quote (props) {
    const {quote, champion} = props

    return(
        <>
        <QuoteParagraph>'{quote}' - <BoldChampion>{champion}</BoldChampion></QuoteParagraph>
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


