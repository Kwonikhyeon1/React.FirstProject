
import React from "react";
import { GoogleMap, useJsApiLoader , MarkerF } from "@react-google-maps/api"; // 라이브러리 추가


const containerStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid #a3a3a3",
  borderRadius: "10px"
}; // 지도 크기를 설정해준다.



function MyComponent(props : any) {

  const center = {
    lat: Number(props.lat),
    lng: Number(props.lng),
  }; // 센터 좌표를 추가해준다. 

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCiexwwtmPQBCJLNF4cx3Vat0etDYXCdeY", // 이곳에 아까 발급받은 API KEY를 입력해준다.
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // 전달된 경계 내에 가능한 한 많은 영역을 표시하기 위해 자동으로 줌 레벨을 설정한다.
    // 만약 zoom 설정을 건드려도 지도가 초기 생성될 때 매우 확대되고 있는 상태라면 삭제 처리하는 것이 좋다.

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];
  

  return isLoaded ? (
    // GoogleMap을 이용하여 지도 생성
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // 지도 가운데를 보여줄 좌표를 설정
      zoom={15} // 초기 생성 시 줌 레벨을 설정
      onLoad={onLoad} // onLoad 됐을 시의 로직을 설정
      onUnmount={onUnmount} // onUnmount 됐을 시의 로직을 설정
      options={{ disableDefaultUI:  true, styles: myStyles, gestureHandling: 'greedy' }} // 추가적인 옵션을 설정, 여기선 기본 UI를 숨김 처리함
      
    
    >
     <MarkerF onLoad={onLoad} position={center} />
      <></>
    </GoogleMap>
    
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);