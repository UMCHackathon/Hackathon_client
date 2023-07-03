import styled from 'styled-components';

export const Container = styled.div<{ noPadding?: boolean }>`
  width: 30rem;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding-top: ${(props) => (props.noPadding ? '0' : '80px')};
  position: relative;
`;
