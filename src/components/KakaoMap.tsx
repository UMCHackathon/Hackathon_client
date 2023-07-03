import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    coords: new kakao.maps.LatLng(37.499241, 127.0215592),
    alt: '지금 하늘 사진 찍기',
    content:
      '지금 고개를 들어 하늘을 보세요! 당신의 하늘은 어떤지 공유해주세요 :)'
  },
  {
    id: 1,
    title: 'flower',
    coords: new kakao.maps.LatLng(37.499242, 127.0256595),
    alt: '예쁜 꽃 사진 찍기',
    content: '주변에 예쁜 꽃을 찍어주세요! 셀카 금지 ~'
  },
  {
    id: 2,
    title: 'smile',
    coords: new kakao.maps.LatLng(37.5072425, 127.012159),
    alt: '지금 함께 있는 사람이랑 활짝 웃고 있는 사진 찍기',
    content: '옆에 있는 사람과 행복한 시간 보내세요 :)'
  },
  {
    id: 3,
    title: 'romantic',
    coords: new kakao.maps.LatLng(37.5032422, 127.021158),
    alt: '세상에서 가장 로맨틱한 사진 찍기',
    content: '당신이 나의 운명?'
  }
];

// TODO: 이미지 경로를 프로퍼티로 담아서 반복문 돌릴 때 넘기면 될 듯?
const markerImageSource =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

const KakaoMap = () => {
  const [maps, setMaps] = useState();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const navigate = useNavigate();

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
        level: 6
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
          console.log(marker);
          navigate('/mission', {
            state: { title: marker.Gb }
          });
        });
      });
      const currentMarker = new kakao.maps.Marker({
        position: options.center
      });
      currentMarker.setMap(map);

      const drawingCircle = new kakao.maps.Circle({
        strokeWeight: 2, // 선의 두께입니다
        strokeColor: '#36A400', // 선의 색깔입니다
        strokeOpacity: 1,
        strokeStyle: 'dashed',
        fillColor: '#36A400', // 채우기 색
        fillOpacity: 0.2,
        radius: 1000 // 1km
      });
      const circleOptions = {
        center: options.center,
        radius: length
      };

      // 그려지고 있는 원의 옵션을 설정합니다
      drawingCircle.setOptions(circleOptions);
      drawingCircle.setMap(map);
    });
  }, [location]);

  return (
    <>
      <MapContainer id='map'></MapContainer>
    </>
  );
};

const MapContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 60vh;
`;

export default KakaoMap;
