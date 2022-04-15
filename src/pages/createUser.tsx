import LoginWrapper from '../components/LoginWrapper'
import MainWrapper from '../components/MainWrapper'
const background = require("../images/riot-wallpaper2.jpg")

function CreateUser() {
    return (
        <MainWrapper background={background}>
                <LoginWrapper type='create'></LoginWrapper>
        </MainWrapper>
    )
}

export default CreateUser


