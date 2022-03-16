
import styled from 'styled-components'
function ChampionImage(props) {
    const { champion } = props
    return (
        <Img src={`images/${champion}.png`} alt="Champion" />
    );
  }
  
  export default ChampionImage;

  const Img = styled.img`
    max-width: 80vw;
    align-self: flex-end;
    width: 900px; 
    height: 506px
  `