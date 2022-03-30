import { ThemeProvider } from 'styled-components';
import GlobalButton from './styles'
import iButtonTheme from '../../interfaces/iButtonTheme'
interface iButtonProps {
  text: string | null,
  onClick: () => void,
  disabled: boolean,
  theme: iButtonTheme
}

function Button(props: iButtonProps): JSX.Element {
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
