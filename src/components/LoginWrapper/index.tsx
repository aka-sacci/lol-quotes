import styled from 'styled-components'
import { iLoginWrapperProps } from "../../@types/myTypes";

const riotLogo = require("../../images/riot-logo.png")
function LoginWrapper(props: iLoginWrapperProps) {
    const { type } = props
    return (
        <>
            <LogoDiv>
                <img src={riotLogo} height='50' alt='Logo' />
            </LogoDiv>
            <CreateUserDiv>
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
    height: 75vh;
    width: 50vh;
`