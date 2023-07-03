import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const KakaoMap = () => {
  const [maps, setMaps] = useState();
  const [markers, setMarkers] = useState();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const getPosSuccess = async (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    setLocation({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    });
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
    getCurrentPosBtn();
  }, []);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
        ),
        level: 3
      };
      setMaps(new window.kakao.maps.Map(container, options));
      setMarkers(new window.kakao.maps.Marker());
      //   if (markers && maps) {
      //     markers.setPosition(options.center);
      //     markers.setMap(maps);
      //   }
    });
  }, [location]);

  return (
    <div className='App'>
      <div>카카오맵 API</div>
      <div id='map' style={{ width: '500px', height: '500px' }}></div>
    </div>
  );
};

export default KakaoMap;
