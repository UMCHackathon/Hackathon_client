import Header from '../components/Header';
import { Container } from '../styles/Container';
import styled from 'styled-components';
import FONT from '../constants/fonts';
import COLOR from '../constants/colors';
import { MissionProps } from '../types/mission';
import { ReactComponent as Send } from '../assets/svg/Send.svg';
import { ReactComponent as Upload } from '../assets/svg/Upload.svg';
import { useState } from 'react';
import Mission from '../components/mission/mission';
import CommentList from '../components/mission/comment';
import { CommentProps } from '../types/comment';
import { commentState } from '../states/commentState';
import { addCommentItem } from '../hooks/selector';
import { useRecoilValue, useRecoilState } from 'recoil';
import { nickNameState } from '../states/nicknameState';
import { useLocation } from 'react-router-dom';

const { kakao } = window;

const sampleData = [
  {
    id: 1,
    coords: new kakao.maps.LatLng(37.499241, 127.0215592),
    title: '지금 하늘 사진 찍기',
    content:
      '지금 고개를 들어 하늘을 보세요! 당신의 하늘은 어떤지 공유해주세요 :)',
    type: 'soil'
  },
  {
    id: 2,
    coords: new kakao.maps.LatLng(37.499242, 127.0256595),
    title: '예쁜 꽃 사진 찍기',
    content: '주변에 예쁜 꽃을 찍어주세요! 셀카 금지 ~',
    type: 'water'
  },
  {
    id: 3,
    coords: new kakao.maps.LatLng(37.5072425, 127.012159),
    title: '지금 함께 있는 사람이랑 활짝 웃고 있는 사진 찍기',
    content: '옆에 있는 사람과 행복한 시간 보내세요 :)',
    type: 'seed'
  },
  {
    id: 4,
    coords: new kakao.maps.LatLng(37.5032422, 127.021158),
    title: '세상에서 가장 로맨틱한 사진 찍기',
    content: '당신이 나의 운명?',
    type: 'light'
  }
];

const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const MissionPage = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useRecoilState(commentState);
  const newList = useRecoilValue(addCommentItem);
  const nickName = useRecoilValue(nickNameState);
  const location = useLocation();
  const id = location.state.id;
  const missionData = sampleData[id - 1];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: CommentProps = {
      id: 0, // 임의의 id 설정
      nickName: nickName,
      content: text,
      createdAt: getFormattedDate(new Date())
    };
    setList([...list, newComment]);
    console.log('?', list);
    setText('');
  };

  return (
    <Container>
      <Header />
      <MissionContainer>
        <div style={FONT.HEADING}>MISSION</div>
        <Mission data={missionData} />
      </MissionContainer>

      <InputContainer>
        <Input
          type='text'
          placeholder='추억을 남겨주세요.'
          value={text}
          onChange={handleInputChange}
        />
        <Upload />
        <button onClick={handleSubmit}>
          <Send />
        </button>
      </InputContainer>

      <MemoryContainer>
        <MemoryTitle style={FONT.HEADING}>모두의 추억</MemoryTitle>
        <CommentList data={list} />
      </MemoryContainer>
    </Container>
  );
};

export default MissionPage;

const MissionContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 80%;
  height: 31px;
  border: 1px solid ${COLOR.GREEN1};
  border-radius: 12px;
  padding: 20px;
`;
const MemoryContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const MemoryTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLOR.GREEN1};
`;
