import { Container } from '../components/Container';
import { ReactComponent as SplashLogo } from '../assets/svg/SplashLogo.svg';
import styled from 'styled-components';
import Button from '../components/Button';
import COLOR from '../constants/colors';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoBox>
        <SplashLogo />
      </LogoBox>
      <ButtonBox>
        <Button text='로그인하기' onClick={() => navigate('user')} />
      </ButtonBox>
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

const ButtonBox = styled.div`
  width: 100%;
  text-align: center;
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
