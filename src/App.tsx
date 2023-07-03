import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Recommend from './components/Recommend';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 컴포넌트 예시 
      <Recommend
        title={'여수여행 좋아요요'}
        subtitle={'여수 여행 추천합니다!! 완전 강추추'}
        tag1={'#여수'}
        tag2={'#바다'}
        src={require('./assets/여수.jpg')}
      /> */}
    </>
  );
}

export default App;
