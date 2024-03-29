import { iCreateUser, iEvent } from '@app/@types/myTypes'
import { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ArrowRight } from "react-bootstrap-icons"
import createUser from '../../services/CreateUser'
import ErrorWrapper from '../ErrorWrapper'
import { useNavigate } from 'react-router-dom'


function FormCreateUser() {
    const isMounted = useRef(false);
    const [inputName, setInputName] = useState<string>("")
    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("")
    const [differentPasswordsBool, setDifferentPasswordsBool] = useState<boolean>(false)
    const [error, setError] = useState<Error>(Error)
    const [errorBool, setErrorBool] = useState<boolean>(false)
    const CreateUser: iCreateUser = new createUser()
    const [isOpened, setIsOpened] = useState(false)
    const nav = useNavigate()


    useEffect(() => {
        setIsOpened(true)
    }, [])

    useEffect(() => {
        if (isMounted.current) {
            if (inputConfirmPassword === inputPassword) return setDifferentPasswordsBool(false)
            else return setDifferentPasswordsBool(true)
        } else {
            isMounted.current = true
        }
    }, [inputPassword, inputConfirmPassword])

    const inputsHandler = (e: iEvent) => {
        switch (e.target.name) {
            case "name":
                setInputName(e.target.value)
                break
            case "email":
                setInputEmail(e.target.value)
                break
            case "password":
                setInputPassword(e.target.value)
                break
            case "confirmPassword":
                setInputConfirmPassword(e.target.value)
                break
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        setErrorBool(false)
        try {
            await CreateUser.execute({ email: inputEmail, password: inputPassword, name: inputName })
            nav('/createuser/success')

        } catch (err: any) {
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
                <Title>Create User</Title>
                <InputMain>
                    <form onSubmit={submitHandler}>
                        <Input
                            type="input"
                            placeholder="NAME"
                            name="name"
                            onChange={inputsHandler}
                            value={inputName}
                            required />

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

                        <Input
                            type="password"
                            placeholder="CONFIRM PASSWORD"
                            name="confirmPassword"
                            onChange={inputsHandler}
                            value={inputConfirmPassword}
                            required />
                        <DifferentPasswordsParagraph>{differentPasswordsBool ? "DIFFERENT PASSWORDS!" : ""}</DifferentPasswordsParagraph>
                        <ButtonSubmit type='submit' disabled={differentPasswordsBool}><ArrowRight /></ButtonSubmit>

                    </form>
                </InputMain>
            </ThemeProvider>
        </MainDiv>
    )
}
export default FormCreateUser

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

const DifferentPasswordsParagraph = styled.p`
    font-weight: 900;
    font-size: 0.9rem;
    color: #5c5c5c;
    letter-spacing: 0.01rem;
    position: absolute;
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