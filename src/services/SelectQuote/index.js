function selectQuoteIndex (qtdQuotes) {
    const quoteIndex = Math.floor(Math.random() * qtdQuotes)
    return quoteIndex
}

export default selectQuoteIndex