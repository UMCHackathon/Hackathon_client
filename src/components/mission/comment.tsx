import React from 'react';
import styled from 'styled-components';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';
import { CommentProps } from '../../types/comment';
import { ReactComponent as DeleteButton } from '../../assets/svg/DeleteButton.svg';

const Comment = (data: CommentProps) => {
  return (
    <CommentBox>
      <Top>
        <Content style={FONT.SUBTITLE4}>{data.content}</Content>
        <DeleteBtnBox>
          <DeleteButton />
        </DeleteBtnBox>
      </Top>
      {data.imageUrl && <CommentImage src={data.imageUrl} alt="Comment Image" />}
      <div style={FONT.SUBTITLE5}>
        {data.nickName} | {data.createdAt}
      </div>
    </CommentBox>
  );
};

const CommentList: React.FC<{ data: CommentProps[] }> = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;

const CommentBox = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-bottom: 0.4px solid ${COLOR.GREEN1};
`;

const Content = styled.div`
  margin-bottom: 5px;
  width: 90%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteBtnBox = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const CommentImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid ${COLOR.GREEN1};
  
`;
