import styled from 'styled-components'

export default styled.button`
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 1px;
    padding: 5px 15px; 
    background: #1e2328;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
    background-repeat: no-repeat;
    background-position: center; 

    align-self: ${props => props.theme.alignSelf};
    position: ${props => props.theme.position};
    right: ${props => props.theme.right};
    left: ${props => props.theme.left};
    bottom: ${props => props.theme.bottom};
    
    background-image: ${props => props.theme.backgroundImage};
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    
        :enabled:hover {
            text-shadow: 0 0 5px #ffffff80;
            box-shadow: 0 0 8px 0 #ffffff50;
            background: ${props => props.theme.enabledHoverBackground};
            cursor: pointer;
            transition: 0.1s;
        }
`;
