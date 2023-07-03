import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './routes/SplashPage';
import UserPage from './routes/UserPage';
import MainPage from './routes/MainPage';
import MapPage from './routes/MapPage';
import MissionPage from './routes/MissionPage';
import MissionAddPage from './routes/MissionAddPage';
import MyPage from './routes/MyPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SplashPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/mission' element={<MissionPage />}>
            <Route path='add' element={<MissionAddPage />} />
          </Route>
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
