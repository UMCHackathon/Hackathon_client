import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const sampleData = [
  {
    title: '카카오',
    coords: new kakao.maps.LatLng(37.505241, 127.0215592)
  },
  {
    title: '생태연못',
    coords: new kakao.maps.LatLng(37.504242, 127.0236595)
  },
  {
    title: '텃밭',
    coords: new kakao.maps.LatLng(37.5072425, 127.022159)
  },
  {
    title: '근린공원',
    coords: new kakao.maps.LatLng(37.5062422, 127.021158)
  }
];

// TODO: 이미지 경로를 프로퍼티로 담아서 반복문 돌릴 때 넘기면 될 듯?
const imageSrc =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

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

  const getCurrentPosition = async () => {
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
    getCurrentPosition();
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

      const map = new window.kakao.maps.Map(container, options);
      setMaps(maps);
      //   setMarkers(new window.kakao.maps.Marker());
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      sampleData.forEach((data) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: data.coords,
          title: data.title,
          image: markerImage
        });
        marker.setMap(map);
      });
      const marker = new kakao.maps.Marker({
        position: options.center
      });
      marker.setMap(map);
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
