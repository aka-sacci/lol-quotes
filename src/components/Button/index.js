import { ThemeProvider } from 'styled-components';
import GlobalButton from './styles'


function Button(props) {
    const { text, onClick, disabled, theme } = props

    return (
      <ThemeProvider theme={theme}>
      <GlobalButton 
      onClick={onClick} 
      disabled={disabled}>
      {text}
      </GlobalButton>
      </ThemeProvider>
    );
  }
  
  export default Button;
