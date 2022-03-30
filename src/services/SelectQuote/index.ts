function selectQuoteIndex (qtdQuotes: number): number {
    const quoteIndex = Math.floor(Math.random() * qtdQuotes)
    return quoteIndex
}

export default selectQuoteIndex