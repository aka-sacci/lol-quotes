import styled from 'styled-components'
import { iErrorWrapperProps } from "@app/@types/myTypes";

function ErrorWrapper(props: iErrorWrapperProps): JSX.Element {
    const { error } = props
        
        const message = error.message
        const name = error.name
        return (
            <DivErrorWrapper className='alert alert-warning' role='alert'><b>Houve o seguinte erro: {name}: {message}. Tente recarregar a página novamente</b></DivErrorWrapper>
        )
}

export default ErrorWrapper

const DivErrorWrapper = styled.div`
    align-self: center;
    position: absolute;
    border-bottom: 20px;
    top: 1rem;
    
`