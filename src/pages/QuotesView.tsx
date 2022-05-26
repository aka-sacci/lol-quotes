import QuotesViewWrapper from '../components/QuotesViewWrapper'
import MainWrapper from '../components/MainWrapper'
import getApiData from '../services/GetApiData/index'
import { iQuotes, iQuote } from "../@types/myTypes";
import { useEffect, useState } from 'react';


const GetApiData = new getApiData()
const background = require("../images/quotes-bg.webp")

function QuotesView() {
    const [quotes, setQuotes] = useState<any>()

    useEffect(() => {
        const fetchAllQuotes = async () => {
            const data = await GetApiData.getAllQuotes()
            return data
        }

        fetchAllQuotes()
            .then
            ((data: iQuotes) => {
                setQuotes(data)
            })
            .catch((err: any) => {
                //setError(err)
                //setErrorBool(true)
            })

    }, [])

    return (
        <MainWrapper background={background} isInfinite={true}>
            <QuotesViewWrapper quotes={quotes}></QuotesViewWrapper>
        </MainWrapper>
    )
}

export default QuotesView