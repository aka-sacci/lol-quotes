import MainWrapper from '../components/MainWrapper'
import { useParams } from 'react-router-dom';

const background = require("../images/quotes-bg.webp")

function AddQuote() {
    const { champion } = useParams();

    return (
        <MainWrapper background={background}>
            <h1>{champion}</h1>
        </MainWrapper>
    )
}

export default AddQuote