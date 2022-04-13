
interface iButtonTheme {
    alignSelf: string,
    position: string,
    right: string | null,
    left: string | null,
    bottom: string,

    backgroundImage: string,
    width: string,
    height: string,

    enabledHoverBackground: string | null
}

interface iResponse {
    status: number,
    data: iResponseGetApiData
}

interface iResponseGetApiData {
    qtd?: number,
    quote?: iQuote,
    quotes?: [iQuote]
}

interface iChampionImageProps {
    champion: string | null
}

interface iErrorWrapperProps {
    error: Error
}

interface iQuoteProps {
    quote: string,
    champion: string | null
}

interface iGetApiData {
    getQtdQuotes: () => Promise<number | object>,
    getQuote: (index: number) => Promise<object>,
    getAllQuotes: () => Promise<object>,
    qtdQuotes: number,
    specificQuote: iQuote,
    allQuotes: iQuotes
}

interface iQuote {
    _id: string,
    champion: string,
    quote: string,
    length: number,
    index: number
}

interface iQuotes {
    quotes: [iQuote],
}


interface iMainWrapperProps {
    background: string,
    children: object
}

interface iLoginWrapperProps {
    type: "auth" | "create",

}

export { 
    iButtonTheme,
    iResponse,
    iResponseGetApiData,
    iChampionImageProps,
    iErrorWrapperProps,
    iQuoteProps,
    iGetApiData,
    iQuote,
    iQuotes,
    iMainWrapperProps,
    iLoginWrapperProps
}
