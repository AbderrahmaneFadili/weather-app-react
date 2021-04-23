import React from "react";
import { WeatherMapWrapper } from "./WeatherMap.styles";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";

const WeatherMap = () => {
  //marker icon
  const icon = L.icon({
    iconUrl: require("../../../assets/images/pin.png").default,
    iconSize: [50, 50], // size of the icon
  });

  // //selector for selecting data from reducers
  const { loading, currentWeather, error } = useSelector(
    (state) => state.currentWeatherReducer,
  );

  console.log(loading, currentWeather, error);
  return (
    <WeatherMapWrapper>
      {loading && <Loader />}
      {currentWeather !== null && currentWeather.message === undefined && (
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={[currentWeather.coord.lat, currentWeather.coord.lon]}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={icon}
            position={[currentWeather.coord.lat, currentWeather.coord.lon]}
          >
            <Popup>Popop</Popup>
          </Marker>
        </MapContainer>
      )}
    </WeatherMapWrapper>
  );
};

export default WeatherMap;
