
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
    quotes?: [iQuote],
    token?: string,
    error?: Error 
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

interface iEvent {
    target: {
        value: string,
        name: string
    }
}

interface iCreateUser {
    async execute: (props: iCreateUserProps) => Promise<string>,
    token: string
}

interface iCreateUserProps {
    name: string,
    email: string,
    password: string
}

interface iLoginUser {
    async execute: (props: iLoginUserProps) => Promise<string>
    token: string
}

interface iLoginUserProps {
    email: string,
    password: string
    
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
    iLoginWrapperProps,
    iEvent,
    iCreateUser,
    iCreateUserProps,
    iLoginUser,
    iLoginUserProps
}
