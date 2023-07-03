import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <div>
        <PacmanLoader color='#1F5F00' size={50} />
      </div>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export default Loading;
