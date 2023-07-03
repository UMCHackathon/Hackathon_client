import { Container } from '../styles/Container';
import { ReactComponent as Logo } from '../assets/svg/Logo.svg';
import styled from 'styled-components';
import Button from '../components/Button';
import COLOR from '../constants/colors';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoBox>
        <Logo />
      </LogoBox>
      <Button text='로그인하기' onClick={() => navigate('user')} />
      <ButtonText>
        아직 회원이 아니세요?
        <ButtonSpan> 회원가입하기</ButtonSpan>
      </ButtonText>
    </Container>
  );
};

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 74%;
`;

const ButtonText = styled.div`
  margin-top: 1.2rem;
  text-align: center;
  color: #929292;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonSpan = styled.span`
  color: ${COLOR.GREEN2};
`;

export default SplashPage;
