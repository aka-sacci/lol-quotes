import { useEffect } from "react"
import axios from "axios";
axios.defaults.withCredentials = true

function Test() {

    useEffect(() => {
        const fetchTest = async () => {
            const test = await axios.get('http://localhost:3333/test', { withCredentials: true })
            .then((result: any) => {
                console.log(result)
            })
        }

        fetchTest()
        .then(

        )
    }, [])
    return (
        <div>
            test
        </div>
    )
}

export default Test