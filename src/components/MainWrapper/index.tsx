import { iMainWrapperProps } from '@app/@types/myTypes';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';


function MainWrapper(props: iMainWrapperProps) {
    const { background } = props
    return (
        <ThemeProvider theme={{ background: background }}>
            <DivMainWrapper>
                <Content className="container">
                    {props.children}
                </Content>
            </DivMainWrapper>
        </ThemeProvider>
    )
}

export default MainWrapper

const DivMainWrapper = styled.div`
    background: url(${props => props.theme.background});
    background-attachment: fixed;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Content = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`