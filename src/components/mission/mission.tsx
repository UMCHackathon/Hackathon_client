import { MissionProps } from '../../types/mission';
import styled from 'styled-components';
import FONT from '../../constants/fonts';
import COLOR from '../../constants/colors';
const Mission = ({ data }: { data: MissionProps }) => {
    return (
      <MissionBox>
        <MissionTitle style={FONT.SUBTITLE4}>{data.title}</MissionTitle>
        <div style={FONT.SUBTITLE5}>{data.content}</div>
      </MissionBox>
    );
  };

  const MissionBox = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px;
    border: 1px solid ${COLOR.GREEN1};
    border-radius: 12px;
    background-color: ${COLOR.GREEN4};
    margin-top: 20px;
`
const MissionTitle = styled.div`
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${COLOR.GREEN1};
`

export default Mission;