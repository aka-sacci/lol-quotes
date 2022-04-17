import { iLoginUser, iLoginUserProps, iResponse } from "@app/@types/myTypes";
import axios from "axios";
axios.defaults.withCredentials = true

class LoginUser implements iLoginUser {
    token = ""
    async execute(props: iLoginUserProps): Promise<string> {
        const { email, password } = props
        this.token = await axios.post('http://localhost:3333/authuser',
            {
                password,
                email
            }, { withCredentials: true })
            .then((response: iResponse) => {
                switch (response.status) {
                    case 200:
                        return String(response.data.token)
                    default:
                        const defaultErrorToBeThrown = new Error()
                        defaultErrorToBeThrown.message = "Unknown error! http requisition status should be 200, not " + response.status + "."
                        defaultErrorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                        throw defaultErrorToBeThrown
                }

            })
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                const errorMessage = err.message
                if (errorMessage.substring(errorMessage.length - 3) === "404") {
                    const conflictErrorToBeThrown = new Error()
                    conflictErrorToBeThrown.message = "Email/password invalid!"
                    conflictErrorToBeThrown.name = "ERR_WRONG_CREDENTIALS"
                    throw conflictErrorToBeThrown
                }
                defaultErrorToBeThrown.message = errorMessage
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })
        return this.token

    }
}

export default LoginUser