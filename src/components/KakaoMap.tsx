import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const KakaoMap = () => {
  const [maps, setMaps] = useState<any>();
  const [markers, setMarkers] = useState<any>();
  // const [location, setLocation] = useLocation();

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = async (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    const currentPos = new kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );
    // currentPos.La, currentPos.Ma
    console.log('currentPos:', currentPos);
    // // 지도를 이동 시킨다.
    maps.panTo(currentPos);

    // // 기존 마커를 제거하고 새로운 마커를 넣는다.
    markers.setMap(null);
    markers.setPosition(currentPos);
    markers.setMap(maps);
  };

  const getCurrentPosBtn = async () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert('위치 정보를 가져오는데 실패했습니다.'),
      {
        enableHighAccuracy: false,
        maximumAge: 30000,
        timeout: 27000
      }
    );
  };

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
      setMaps(new window.kakao.maps.Map(container, options));
      setMarkers(new window.kakao.maps.Marker());
    });
  }, []);

  return (
    <div className='App'>
      <div>카카오맵 API</div>
      <div id='map' style={{ width: '500px', height: '500px' }}></div>
      <button onClick={getCurrentPosBtn}>현재위치</button>
    </div>
  );
};

export default KakaoMap;
