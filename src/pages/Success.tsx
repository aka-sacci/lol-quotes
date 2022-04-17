import MainWrapper from '../components/MainWrapper'
import styled, { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { ArrowRight } from "react-bootstrap-icons"
import { useNavigate } from 'react-router-dom'


const riotLogo = require("../images/riot-logo.png")
const background = require("../images/riot-wallpaper2.jpg")

function Success() {
    const [isOpened, setIsOpened] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        setIsOpened(true)
    }, [])

    const handleButtonContinue = (e: any) => {
        e.preventDefault()
        nav("/admpanel")
    }

    return (
        <MainWrapper background={background}>
            <LogoDiv>
                <img src={riotLogo} height='50' alt='Logo' />
            </LogoDiv>
            <ThemeProvider theme={
                { open: isOpened }
            }>
                <SuccessMessageDiv>
                    <Title>Usuário criado com sucesso!</Title>
                </SuccessMessageDiv>
               <ButtonContinue onClick={handleButtonContinue}><ArrowRight/></ButtonContinue>
            </ThemeProvider>
        </MainWrapper>
    )
}

export default Success

const LogoDiv = styled.div`
    position: absolute;
    top: 1rem;
`

const SuccessMessageDiv = styled.div`
    background-color: #f9f9f9;
    height: calc(100vh - 70vh);
    width: calc(100vw - 60vw);
    font-family: 'Poppins', sans-serif;
    align-content: center;
    justify-content: center;
    display: flex;
    justify-content: center;
    max-height: ${props => (props.theme.open ? "100%" : "0")};
    transition: max-height 1s;
    
    
`

const Title = styled.h4`
    font-weight: 900;
    position: absolute;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    margin-top: calc(100vw - 99vw);
    transition: opacity 1s;
    transition-delay: 0.5s;
`

const ButtonContinue = styled.button`
    border-radius: 1.5rem;
    width: 4em;
    height: 4em;
    border: 2px solid #5c5c5c;
    position: absolute;
    margin-top: calc(100vw - 95vw);
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
`