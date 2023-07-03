import styled, { keyframes } from 'styled-components';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';

interface RecommendProps {
  title?: string;
  subtitle?: string;
  src?: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  onClick?: () => void;
}
const Recommend = ({
  title,
  subtitle,
  src,
  tag1,
  tag2,
  tag3,
  tag4,
  onClick = () => {
    console.log('clicked');
  }
}: RecommendProps) => {
  return (
    <RecommendBox style={FONT.SUBTITLE2} onClick={onClick}>
      <RecommendLeft>
        <RecommendImage src={src} />
      </RecommendLeft>

      <RecommendRight>
        <Title style={FONT.SUBTITLE2}>{title}</Title>
        <SubTitle style={FONT.SUBTITLE3}>{subtitle}</SubTitle>
        <TagBox style={FONT.SUBTITLE4}>
          {tag1 && <Tag>{tag1}</Tag>}
          {tag2 && <Tag>{tag2}</Tag>}
          {tag3 && <Tag>{tag3}</Tag>}
          {tag4 && <Tag>{tag4}</Tag>}
        </TagBox>
      </RecommendRight>
    </RecommendBox>
  );
};

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const RecommendBox = styled.button`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.BLACK};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 8rem;
  border: 1px solid ${COLOR.GRAY};
  padding: 1.2rem 1rem;
  margin-bottom: 1rem;
  background: ${COLOR.WHITE};

  &:hover {
    animation: ${moveUp} 0.5s forwards;
  }
`;

const RecommendLeft = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 1rem;
`;

const RecommendRight = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const RecommendImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const Title = styled.div`
  color: ${COLOR.BLACK};
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
  color: #6a6a6a;
  margin-bottom: 0.5rem;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.div`
  background: ${COLOR.GRAY};
  color: #6a6a6a;
  margin-right: 0.5rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
`;

export default Recommend;
