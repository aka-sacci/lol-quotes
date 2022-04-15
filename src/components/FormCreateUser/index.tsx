import { iEvent } from '@app/@types/myTypes'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ArrowRight } from "react-bootstrap-icons"

function FormCreateUser() {
    const isMounted = useRef(false);
    const [inputName, setInputName] = useState<string>("")
    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("")
    const [differentPasswordsBool, setDifferentPasswordsBool] = useState<boolean>(false)

    useEffect(() => {
        if (isMounted.current) {
            if (inputConfirmPassword === inputPassword) return setDifferentPasswordsBool(false)
            else setDifferentPasswordsBool(true)
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

    return (
        <MainDiv>
            <Title>Create User</Title>
            <InputMain>
                <form>
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
                    <ButtonSubmit type='submit'><ArrowRight /></ButtonSubmit>

                </form>
            </InputMain>
        </MainDiv>
    )
}
export default FormCreateUser

const InputMain = styled.div`
    position: absolute;
    padding-top: 40rem;
    `

const MainDiv = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
  width: 22rem;
  height: 4rem;
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
  margin-bottom: 1rem;

  &:focus {
        border: 2px solid black;
    }
  `

const Title = styled.h3`
    font-weight: 900;
    margin-top: 7.5em;
    position: absolute;
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
    width: 5rem;
    height: 5rem;
    border: 2px solid #5c5c5c;
    position: absolute;
    margin-left: calc(80%/2);
    margin-top: 3rem;
    

`