import LoginWrapper from '../components/LoginWrapper'
import MainWrapper from '../components/MainWrapper'
import JWTAuth from 'services/JWTAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



function CreateUser() {
    const nav = useNavigate()
    const background = require("../images/riot-wallpaper2.jpg")

    useEffect(() => {
        const fetchAuth = async () => {
            const booleanIsAuthed = await JWTAuth()
            return booleanIsAuthed
        }

        fetchAuth()
            .then((booleanIsAuthed: boolean) => {
                if (booleanIsAuthed === true) nav("/admpanel")
            })
            .catch()
    }, [nav])
    return (
        <MainWrapper background={background}>
            <LoginWrapper type='create'></LoginWrapper>
        </MainWrapper>
    )
}

export default CreateUser


