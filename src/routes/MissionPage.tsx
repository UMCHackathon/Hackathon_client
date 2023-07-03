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
import { ReactComponent as DeleteButton } from '../assets/svg/DeleteButton.svg';
const dummy: MissionProps = {
  id: 0,
  title: '지금 하늘 사진 찍기',
  content: `지금 고개를 들어 하늘을 보세요!
  당신의 하늘은 어떤지 공유해주세요 :)`,
  type: 'soil'
};

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
  const [image, setImage] = useState<string | null>(null);
  const [list, setList] = useRecoilState(commentState);
  const newList = useRecoilValue(addCommentItem);
  const nickName = useRecoilValue(nickNameState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        const image = reader.result as string;
        setImage(image);
      };
  
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleImageCancel = () => {
    setImage(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: CommentProps = {
      id: 0, // 임의의 id 설정
      nickName: nickName,
      content: text,
      createdAt: getFormattedDate(new Date()),
      imageUrl: image || undefined,
    };
    setList([...list, newComment]);
    setText('');
    setImage('');
  };
  return (
    <Container>
      <Header />
      <MissionContainer>
        <div style={FONT.HEADING}>MISSION</div>
        <Mission data={dummy} />
      </MissionContainer>

      <InputContainer>
        <Input
          type='text'
          placeholder='추억을 남겨주세요.'
          value={text}
          onChange={handleInputChange}
        />
        <UploadButton>
          <Upload />
          <UploadInput
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
          />
        </UploadButton>
        <button onClick={handleSubmit}>
          <Send />
        </button>
      </InputContainer>
      {image && (
        <Sort><ImgBox>
          <img src={image} alt="Uploaded Image" width={200} height={200} />
        </ImgBox><CancelButton onClick={handleImageCancel}><DeleteButton width={30} height={30} /></CancelButton></Sort>
      )}
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
const UploadInput = styled.input`
  display: none;
`;
const UploadButton = styled.label`
  cursor: pointer;
`;
const MemoryContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const MemoryTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLOR.GREEN1};
`;
const ImgBox = styled.div`
  width: fit-content;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
  border: 1px solid ${COLOR.GREEN1};
  border-radius: 12px;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${COLOR.GREEN1};
  font-weight: bold;
  margin-top: -210px;
  margin-left: 10px;
`;
const Sort = styled.div`
  display: flex;
`;