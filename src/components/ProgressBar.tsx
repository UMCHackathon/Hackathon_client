import React from 'react';
import styled from 'styled-components';
import notCircleImg from '../assets/circle.png';
import circleImg from '../assets/completeCircle.png';

type BarProps = {
    onClick: () => void;
    number: number;
};

const BarBox = styled.div`
  width: 20px;
  margin: 20px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.img`
  width: 20px;
  height: 20px;
`;

type LineProps = {
    isGreen: boolean;
};

const Line = styled.div<LineProps>`
  width: 4px;
  height: 22vh;
  margin: 0 auto;
  background-color: ${({ isGreen }) => (isGreen ? 'green' : '#D9D9D9')};
`;

const ProgressBar: React.FC<BarProps> = ({ onClick, number }) => {
    return (
        <BarBox>
            {Array.from({ length: 4 }, (_, index) => (
                <React.Fragment key={index}>
                    <Circle src={4 - index <= number ? circleImg : notCircleImg} />
                    {index < 3 && <Line isGreen={3 - index <= number - 1} />}
                </React.Fragment>
            ))}
        </BarBox>
    );
};

export default ProgressBar;
