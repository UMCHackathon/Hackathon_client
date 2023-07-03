import styled from 'styled-components';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';

interface RecommendProps {
  title?: string;
  subtitle?: string;
  src?: string;
  tag1?: string;
  tag2?: string;
  onClick?: () => void;
}
const Recommend = ({
  title,
  subtitle,
  src,
  tag1,
  tag2,
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
          <Tag>{tag1}</Tag>
          <Tag>{tag2}</Tag>
        </TagBox>
      </RecommendRight>
    </RecommendBox>
  );
};

const RecommendBox = styled.button`
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${COLOR.BLACK};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  border: 1px solid ${COLOR.GRAY};
  padding: 1.2rem 1rem;
`;

const RecommendLeft = styled.div`
  width: 25%;
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
