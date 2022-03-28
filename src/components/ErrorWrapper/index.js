import styled from 'styled-components'

function ErrorWrapper(props) {
    const { error } = props
        const message = error.message
        const name = error.name
        return (
            <DivErrorWrapper className='alert alert-warning' role='alert'><b>Houve um erro ao recuperar as falas: {name}: {message}</b></DivErrorWrapper>
        )
}

export default ErrorWrapper

const DivErrorWrapper = styled.div`
    align-self: center;
    position: absolute;
    border-bottom: 20px;
    top: 1rem;
    
`