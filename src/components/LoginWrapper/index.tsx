import styled, { ThemeProvider } from 'styled-components'
import { iLoginWrapperProps } from "../../@types/myTypes";
import FormCreateUser from '../FormCreateUser';
import FormLogin from '../FormLogin';
import { useEffect, useState } from 'react'

const riotLogo = require("../../images/riot-logo.png")
function LoginWrapper(props: iLoginWrapperProps) {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setIsOpened(true)
    }, [])

    const { type } = props
    return (
        <>
            <LogoDiv>
                <img src={riotLogo} height='50' alt='Logo' />
            </LogoDiv>
            <ThemeProvider theme={
                { open: isOpened }
            }>
                <CreateUserDiv>
                    {type === "create" ? <FormCreateUser/> : <FormLogin />}
                </CreateUserDiv>
            </ThemeProvider>
        </>
    )
}

export default LoginWrapper

const LogoDiv = styled.div`
    position: absolute;
    top: 1rem;
`
const CreateUserDiv = styled.div`
    background-color: #f9f9f9;
    height: calc(100vh - 30vh);
    width: calc(100vw - 75vw);
    max-height: ${props => (props.theme.open ? "100%" : "0")};
    transition: max-height 0.8s;
`