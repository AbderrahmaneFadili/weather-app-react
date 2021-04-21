import React from "react";
import { WeatherMapWrapper } from "./WeatherMap.styles";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const WeatherMap = () => {
  const icon = L.icon({
    iconUrl: require("../../../assets/images/pin.png").default,
    iconSize: [50, 50], // size of the icon
  });
  return (
    <WeatherMapWrapper>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[33.505, -6.09]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[33.505, -6.09]}>
          <Popup>Popop</Popup>
        </Marker>
      </MapContainer>
    </WeatherMapWrapper>
  );
};

export default WeatherMap;
