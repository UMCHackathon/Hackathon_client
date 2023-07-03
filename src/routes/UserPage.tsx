import { useNavigate } from 'react-router-dom';
import { Container } from '../components/Container';
import Button from '../components/Button';
import Header from '../components/Header';
import { ReactComponent as Profile } from '../assets/svg/Profile.svg';
import styled from 'styled-components';
import COLOR from '../constants/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { nickNameState } from '../states/nicknameState';

const UserPage = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [nickName, setNickName] = useRecoilState(nickNameState);

  return (
    <Container>
      <Header />
      <UserContainer>
        <Profile />
        <UserBox>
          <TagBox>
            <Tag>#25</Tag>
            <Tag>#식물</Tag>
            <Tag>#자유</Tag>
            <Tag>#플레이</Tag>
          </TagBox>
          <UserHr />
          <UserText>닉네임</UserText>
          <NameInput
            placeholder='닉네임을 입력해주세요'
            onChange={(e: any) => {
              setNickName(e.target.value);
            }}
          />
          <UserText>여행지</UserText>
          <SelectBox name='여행지'>
            <Option value='서울'>서울</Option>
            <Option value='대전'>대전</Option>
            <Option value='대구'>대구</Option>
            <Option value='부산'>부산</Option>
            <Option value='제주도'>제주도</Option>
          </SelectBox>
          <UserText>여행 날짜</UserText>
          <CustomDatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            dateFormat='yyyy-MM-dd'
          />
        </UserBox>
      </UserContainer>
      <ButtonContainer>
        <Button text='완료하기' onClick={() => navigate('/main')} />
      </ButtonContainer>
    </Container>
  );
};

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const UserBox = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: 90%;
  height: 25rem;
  padding: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 1.7rem;
  margin: 1rem 0 2rem 0;
`;

const UserHr = styled.hr`
  border: 2px solid #e5e5e5;
  margin: 1rem 0 1.2rem 0;
`;

const UserText = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
  width: 100%;
`;

const Tag = styled.div`
  background-color: ${COLOR.GREEN2};
  padding: 0.3rem 1.2rem;
  color: ${COLOR.WHITE};
  border-radius: 1.2rem;
`;

const SelectBox = styled.select`
  width: 50%;
  height: 2.2rem;
  border-radius: 0.7rem;
  border: 2px solid #e5e5e5;
  padding: 0 0.7rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const CustomDatePicker = styled(DatePicker)`
  width: 10rem;
  height: 2.2rem;
  border-radius: 0.7rem;
  border: 2px solid #e5e5e5;
  padding: 0 0.7rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const NameInput = styled.input`
  width: 50%;
  height: 2.2rem;
  border-radius: 0.7rem;
  border: 2px solid #e5e5e5;
  padding: 0 0.7rem;
`;

export default UserPage;
