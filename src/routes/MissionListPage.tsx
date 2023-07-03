import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import { Container } from '../components/Container';
import styled from 'styled-components';
import one from '../assets/1.png';
import two from '../assets/svg/2.svg';
import three from '../assets/svg/3.svg';
import four1 from '../assets/svg/4-1.svg';
import four2 from '../assets/svg/4-2.svg';
import four3 from '../assets/svg/4-3.svg';

const PlantBox = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const PlantInnerBox = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
`;

const GradientBackground = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #f7ee28 5%, #fdfcde 5%);
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease;
  z-index: 0;
`;

const WaterfallBackground = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  margin-left: 60px;
  height: 100%;
  background: url('https://toyou-bucket.s3.ap-northeast-2.amazonaws.com/waterfall.svg');
  background-repeat: no-repeat;
  background-size: 80%;
  margin-top: 50px;
  opacity: ${({ show }) => (show ? '1' : '0')};
`;

const MissionListPage: React.FC = () => {
  const [showGradient, setShowGradient] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const initialRender = useRef(true);

  const getImagePath = (number: number): string => {
    let imagePath = '';
    switch (number) {
      case 1:
        imagePath = one;
        break;
      case 2:
        imagePath = two;
        break;
      case 3:
        imagePath = three;
        break;
      case 4: {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        const imagePathArray = [four1, four2, four3];
        imagePath = imagePathArray[randomNum - 1];
        break;
      }
      default:
        break;
    }
    return imagePath;
  };

  const [imageNumber, setImageNumber] = useState(1);
  const imagePath: string = getImagePath(imageNumber);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (imageNumber === 2) {
        setShowBackground(false);
        console.log('이미지2');
        setShowGradient(true);
        const timeout = setTimeout(() => {
          setShowGradient(false);
        }, 2000);

        return () => clearTimeout(timeout);
      } else if (imageNumber === 3) {
        console.log('이미지번호3임');
        setShowGradient(false);
        setShowBackground(true);
        const timeout = setTimeout(() => {
          setShowBackground(false);
        }, 2000);

        return () => clearTimeout(timeout);
      } else {
        setShowGradient(false);
        setShowBackground(false);
      }
    }
  }, [imageNumber]);

  useEffect(() => {
    // 서버에서 값을 받아오는 로직 구현
    // 받아온 값을 setImageNumber를 사용하여 imageNumber 상태 업데이트
    const numberFromServer = 3; // 예시로 2로 설정
    setImageNumber(numberFromServer);
  }, []);

  return (
    <Container>
      <Header />
      <PlantBox>
        <ProgressBar
          onClick={() => {
            console.log('clicked');
          }}
          number={imageNumber}
        />
        <PlantInnerBox>
          <Image src={imagePath} />
          {showGradient && <GradientBackground show={showGradient} />}
          {showBackground && <WaterfallBackground show={showBackground} />}
        </PlantInnerBox>
      </PlantBox>
    </Container>
  );
};

export default MissionListPage;
