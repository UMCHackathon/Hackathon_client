import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/Container';
import Button from '../components/Button';
import Header from '../components/Header';
import { ReactComponent as Profile } from '../assets/svg/Profile.svg';
import styled from 'styled-components';

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <UserContainer>
        <Profile />
        <UserBox>
          <UserName>홍길동</UserName>
          <UserHr />
          <UserText>여행지</UserText>
          <UserText>여행 날짜</UserText>
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
`;

const UserBox = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: 90%;
  height: 25rem;
  padding: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 1.7rem;
  margin: 1rem 0;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const UserHr = styled.hr`
  border: 2px solid #e5e5e5;
  margin: 1rem 0 1.2rem 0;
`;

const UserText = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default UserPage;
