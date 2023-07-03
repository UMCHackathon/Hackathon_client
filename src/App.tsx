import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './routes/SplashPage';
import UserPage from './routes/UserPage';
import MainPage from './routes/MainPage';
import MapPage from './routes/MapPage';
import MissionPage from './routes/MissionPage';
import MissionAddPage from './routes/MissionAddPage';
import MissionListPage from './routes/MissionListPage';
import { RecoilRoot } from 'recoil';
import MyMission from './routes/MyMission';

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
          <Route path='/missionlist' element={<MissionListPage />} />
          <Route path='/mymission' element={<MyMission />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
