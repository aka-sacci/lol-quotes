import styled, { ThemeProvider } from 'styled-components'
import { iErrorWrapperProps } from "@app/@types/myTypes";
import { useState, useEffect } from 'react'

function ErrorWrapper(props: iErrorWrapperProps): JSX.Element {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setIsOpened(true)
    }, [])

    const { error } = props

    const message = error.message
    const name = error.name
    return (
        <ThemeProvider theme={
            { open: isOpened }
        }>
            <DivErrorWrapper className='alert alert-warning' role='alert'><b>Houve o seguinte erro: {name}: {message}</b></DivErrorWrapper>
        </ThemeProvider>
    )
}

export default ErrorWrapper

const DivErrorWrapper = styled.div`
    align-self: center;
    position: absolute;
    border-bottom: 20px;
    top: 1rem;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 2s;
    
`