async function getApiData() {
    const result = await fetch("http://localhost:3333/quotes")
    .then(response => {
        return response.json()
    })

    return result
}

export default getApiData