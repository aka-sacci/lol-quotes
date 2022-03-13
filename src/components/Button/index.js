import styled from 'styled-components'

function Button(props) {
    const { text, onClick, disabled } = props
    
    return (
      <StyledBtn onClick={onClick} disabled={disabled}>{text}</StyledBtn>
    );
  }
  
  export default Button;

const StyledBtn = styled.button`
    align-self: flex-end;
    position: absolute;
    right: 10vh;
    bottom: 5vh;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px; 
    background: #1e2328;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
        :enabled:hover {
            text-shadow: 0 0 5px #ffffff80;
            box-shadow: 0 0 8px 0 #ffffff50;
            background: linear-gradient(to bottom, #1e2328, #433d2b);
            cursor: pointer;
            transition: 0.1s;
        }
        :disabled {
          cursor: not-allowed;
        }
`