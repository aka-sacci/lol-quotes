import { iResponse, iGetApiData, iQuote, iQuotes } from "@app/@types/myTypes";
const axios = require('axios');

class getApiData implements iGetApiData {
    
    qtdQuotes: number = 0
    specificQuote: iQuote = {
        _id: "",
        champion: "",
        quote: "",
        length: 0,
    }

    allQuotes: iQuotes = {
        quotes: [this.specificQuote]
    }

    async getQtdQuotes(): Promise<number> {
        this.qtdQuotes = await axios.get('http://localhost:3333/getqtdquotes')
            .then((response: iResponse) => {
                switch (response.status) {
                    case 200:
                        return response.data.qtd
                    default:
                        const defaultErrorToBeThrown = new Error()
                        defaultErrorToBeThrown.message = "Unknown error! http requisition status should be 200, not " + response.status + "."
                        defaultErrorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                        throw defaultErrorToBeThrown
                }

            })
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })

        return this.qtdQuotes
    }

    async getQuote(index: number): Promise<iQuote> {
        this.specificQuote = await axios.get('http://localhost:3333/getquotes/' + index)
            .then((response: iResponse) => {
                switch (response.status) {
                    case 200:
                        return response.data.quote
                    default:
                        const defaultErrorToBeThrown = new Error()
                        defaultErrorToBeThrown.message = "Unknown error! http requisition status should be 200, not " + response.status + "."
                        defaultErrorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                        throw defaultErrorToBeThrown
                }
            })
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })
        return this.specificQuote
    }

    async getAllQuotes(): Promise<iQuotes> {
        this.allQuotes = await axios.get('http://localhost:3333/getallquotes/')
            .then((response: iResponse) => {
                switch (response.status) {
                    case 200:
                        return response.data.quotes
                    default:
                        const defaultErrorToBeThrown = new Error()
                        defaultErrorToBeThrown.message = "Unknown error! http requisition status should be 200, not " + response.status + "."
                        defaultErrorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                        throw defaultErrorToBeThrown
                }
            })
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })
        
        return this.allQuotes
    }
}

export default getApiData