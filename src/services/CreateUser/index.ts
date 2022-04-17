import { iCreateUser, iCreateUserProps, iResponse } from "@app/@types/myTypes";
import axios from "axios";
axios.defaults.withCredentials = true

class CreateUser implements iCreateUser {
    token = ""
    async execute(props: iCreateUserProps): Promise<string> {
        const { name, email, password } = props
        this.token = await axios.post('http://localhost:3333/createuser',
            {
                name,
                password,
                email
            }, { withCredentials: true })
            .then((response: iResponse) => {
                switch (response.status) {
                    case 201:
                        return String(response.data.token)
                    default:
                        const defaultErrorToBeThrown = new Error()
                        defaultErrorToBeThrown.message = "Unknown error! http requisition status should be 201, not " + response.status + "."
                        defaultErrorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                        throw defaultErrorToBeThrown
                }

            })
            .catch((err: Error) => {
                const defaultErrorToBeThrown = new Error()
                const errorMessage = err.message
                if (errorMessage.substring(errorMessage.length - 3) === "409") {
                    const conflictErrorToBeThrown = new Error()
                    conflictErrorToBeThrown.message = "The specified email was already been registered!"
                    conflictErrorToBeThrown.name = "ERR_MAIL_CONFLICT"
                    throw conflictErrorToBeThrown
                }
                defaultErrorToBeThrown.message = errorMessage
                defaultErrorToBeThrown.name = "INTERNAL_ERROR"
                throw defaultErrorToBeThrown
            })
        return this.token

    }
}

export default CreateUser