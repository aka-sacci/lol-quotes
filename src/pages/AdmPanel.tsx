import { useEffect } from 'react'
import MainWrapper from '../components/MainWrapper'
import JWTAuth from 'services/JWTAuth'
import { useNavigate } from 'react-router-dom'



function AdmPanel() {
    const nav = useNavigate()
    const background = require("../images/riot-wallpaper2.jpg")

    useEffect(() => {
        const fetchAuth = async () => {
            const booleanIsAuthed = await JWTAuth()
            return booleanIsAuthed
        }

        fetchAuth()
            .then((booleanIsAuthed: boolean) => {
                if (booleanIsAuthed === false) nav("/login")
            })
            .catch()
    }, [nav])

    return (
        <MainWrapper background={background}>
            <h1>Logado</h1>
        </MainWrapper>
    )
}

export default AdmPanel