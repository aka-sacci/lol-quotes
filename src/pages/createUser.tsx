import styled from 'styled-components'
import MainWrapper from '../components/MainWrapper'

const background = require("../images/riot-wallpaper2.jpg")
const riotLogo = require("../images/riot-logo.png")

function CreateUser() {
    return (
        <MainWrapper background={background}>
                <LogoDiv>
                    <img src={riotLogo} height='50' alt='Logo'/>
                </LogoDiv>
                <CreateUserDiv></CreateUserDiv>
        </MainWrapper>
    )
}

export default CreateUser

const LogoDiv = styled.div`
    position: absolute;
    top: 1rem;
`
const CreateUserDiv = styled.div`
    background-color: #f9f9f9;
    height: 75vh;
    width: 50vh;
`
