import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const sampleData = [
  {
    id: 0,
    title: 'sky',
    coords: new kakao.maps.LatLng(37.505241, 127.0215592),
    alt: '지금 하늘 사진 찍기'
  },
  {
    id: 1,
    title: 'flower',
    coords: new kakao.maps.LatLng(37.504242, 127.0236595),
    path: '예쁜 꽃 사진 찍기'
  },
  {
    id: 2,
    title: 'smile',
    coords: new kakao.maps.LatLng(37.5072425, 127.022159),
    path: '지금 함께 있는 사람이랑 활짝 웃고 있는 사진 찍기'
  },
  {
    id: 3,
    title: 'romantic',
    coords: new kakao.maps.LatLng(37.5062422, 127.021158),
    path: '세상에서 가장 로맨틱한 사진 찍기'
  }
];

// TODO: 이미지 경로를 프로퍼티로 담아서 반복문 돌릴 때 넘기면 될 듯?
const markerImageSource =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

const KakaoMap = () => {
  const [maps, setMaps] = useState();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  //   const navigate = useNavigate();

  // 현재 위치(위도, 경도) 가져온다.
  const getPosSuccess = async (pos: GeolocationPosition) => {
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
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(
        markerImageSource,
        imageSize
      );

      sampleData.forEach((data) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: data.coords,
          title: data.title,
          image: markerImage,
          clickable: true
        });
        marker.setMap(map);
        kakao.maps.event.addListener(marker, 'click', () => {
          console.log(marker.Gb);
          //   navigate(`/${marker.Gb}`);
        });
      });
      const currentMarker = new kakao.maps.Marker({
        position: options.center
      });
      currentMarker.setMap(map);
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
