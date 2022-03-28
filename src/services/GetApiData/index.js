const axios = require('axios');

class getApiData {
    async getQtdQuotes() {
        const result = await axios.get('http://localhost:3333/getqtdquotes')
            .then(response => {
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
            .catch((err) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })



        return result
    }

    async getQuote(index) {
        const result = await axios.get('http://localhost:3333/getquotes/' + index)
            .then(response => {
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
            .catch((err) => {
                const defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })

        return result
    }
}

module.exports = getApiData