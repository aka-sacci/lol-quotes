import LogoutUser from '../services/LogoutUser'
import MainWrapper from '../components/MainWrapper'
import { useState } from 'react'
import ErrorWrapper from '../components/ErrorWrapper'
import { useNavigate } from 'react-router-dom'

function AdmPanel() {
    const background = require("../images/riot-wallpaper2.jpg")
    const [error, setError] = useState<Error>(Error)
    const [errorBool, setErrorBool] = useState<boolean>(false)
    const nav = useNavigate()

    const handleClick = async () => {
        try {
            await LogoutUser()
            nav('/login')
        } catch (err: any) {
            setError(err)
            setErrorBool(true)
        }
    }

    return (
        <MainWrapper background={background}>
            {errorBool ? <ErrorWrapper error={error} /> : <></>}
            <button onClick={handleClick}>Logout</button>
        </MainWrapper>
    )
}

export default AdmPanel