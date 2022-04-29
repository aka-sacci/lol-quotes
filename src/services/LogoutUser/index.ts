import axios from 'axios'
axios.defaults.withCredentials = true

async function LogoutUser(): Promise<void> {
    await axios.get('http://localhost:3333/logout')
    .then()
    .catch((err: Error) => {
        const defaultErrorToBeThrown = new Error()
        defaultErrorToBeThrown.message = err.message
        defaultErrorToBeThrown.name = err.name
        throw defaultErrorToBeThrown
    })
}

export default LogoutUser