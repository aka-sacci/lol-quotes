interface iResponse {
    status: number,
    data: iResponseGetApiData
}

interface iResponseGetApiData {
    quote?: string,
    message?: string,
    qtd?: number
}

export default iResponse
