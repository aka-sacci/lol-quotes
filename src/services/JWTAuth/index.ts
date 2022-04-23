import axios from "axios";
axios.defaults.withCredentials = true

async function JWTAuth(): Promise<boolean> {
    const result: boolean = await axios.get('http://localhost:3333/isauthed', { withCredentials: true })
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
        return result
}

export default JWTAuth