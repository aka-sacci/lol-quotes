import styled from 'styled-components'
import { iLoginWrapperProps } from "../../@types/myTypes";
import FormCreateUser from '../FormCreateUser';

const riotLogo = require("../../images/riot-logo.png")
function LoginWrapper(props: iLoginWrapperProps) {
    const { type } = props
    return (
        <>
            <LogoDiv>
                <img src={riotLogo} height='50' alt='Logo' />
            </LogoDiv>
            <CreateUserDiv>
            <FormCreateUser/>
            </CreateUserDiv>
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
    height: 70vh;
    width: 50vh;
`