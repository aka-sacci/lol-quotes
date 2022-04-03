import styled from 'styled-components'
import { iChampionImageProps } from "@app/@types/myTypes";

function ChampionImage(props: iChampionImageProps): JSX.Element {
  const { champion } = props
  return (
    <>
      {
        typeof champion === 'string' ?
          <Img src={`images/${champion}.png`} alt="Champion" /> :
          <></>
      }

    </>
  );
}

export default ChampionImage;

const Img = styled.img`
    max-width: 80vw;
    align-self: flex-end;
    width: 900px; 
    height: 506px
  `