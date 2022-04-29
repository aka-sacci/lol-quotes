import LoginWrapper from '../components/LoginWrapper'
import MainWrapper from '../components/MainWrapper'

function Login() {

    const background = require("../images/riot-wallpaper2.jpg")
    return (
        <MainWrapper background={background}>
            <LoginWrapper type='auth'></LoginWrapper>
        </MainWrapper>
    )
}

export default Login
