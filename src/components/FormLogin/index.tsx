import { iEvent } from '@app/@types/myTypes'
import { useContext, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ArrowRight } from "react-bootstrap-icons"
import ErrorWrapper from '../ErrorWrapper'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'

function FormLogin() {
    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [error, setError] = useState<Error>(Error)
    const [errorBool, setErrorBool] = useState<boolean>(false)
    const [isOpened, setIsOpened] = useState(false)
    const nav = useNavigate()
    const { onLogin } = useContext(AuthContext)


    useEffect(() => {
        setIsOpened(true)
    }, [])

    const inputsHandler = (e: iEvent) => {
        switch (e.target.name) {
            case "email":
                setInputEmail(e.target.value)
                break
            case "password":
                setInputPassword(e.target.value)
                break
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        setErrorBool(false)
        try {
            await onLogin({ email: inputEmail, password: inputPassword })
            nav('/admpanel')

        } catch (err: any) {
            setInputPassword("")
            setError(err)
            setErrorBool(true)
        }
    }

    return (
        <MainDiv>
            {errorBool ? <ErrorWrapper error={error} /> : <></>}
            <ThemeProvider theme={
                { open: isOpened }
            }>
                <Title>Login</Title>
                <InputMain>
                    <form onSubmit={submitHandler}>

                        <Input
                            type="email"
                            placeholder="EMAIL"
                            name="email"
                            onChange={inputsHandler}
                            value={inputEmail}
                            required />

                        <Input
                            type="password"
                            placeholder="PASSWORD"
                            name="password"
                            onChange={inputsHandler}
                            value={inputPassword}
                            required />

                        <ButtonSubmit type='submit'><ArrowRight /></ButtonSubmit>

                    </form>
                </InputMain>
            </ThemeProvider>
        </MainDiv>
    )

}

export default FormLogin

const InputMain = styled.div`
    position: absolute;
    padding-top: calc(100vh - 40vh);
    `

const MainDiv = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: calc(100vw - 80vw);
    height: calc(100vh - 94vh);
    border: 0;
    background: #ededed;
    display: flex;
    border-radius: 0.25rem;
    padding: 10px;
    outline: 1px;
    
    font-size: 0.8rem;
    color: #5c5c5c;
    font-weight: 900;
    letter-spacing: 0.040rem;

    outline-offset: -1rem;
    margin-bottom: 1em;

    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;

  &:focus {
        border: 2px solid black;
    }
  `

const Title = styled.h3`
    font-weight: 900;
    margin-top: calc(100vh - 80vh);
    position: absolute;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
`

const ButtonSubmit = styled.button`
    border-radius: 1.5rem;
    width: 5em;
    height: 5em;
    border: 2px solid #5c5c5c;
    position: absolute;
    margin-top: calc(100vh - 95vh);

    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;

    :disabled {
        border: 2px solid #bbbdbf;
    }
    

`