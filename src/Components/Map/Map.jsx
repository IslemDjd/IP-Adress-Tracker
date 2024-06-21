/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mark from "../../assets/icon-location.svg";
import { Icon } from "leaflet";

const Map = ({ latitude, longitude, ipAddress }) => {
  const defaultCenter = [51.505, -0.09];
  const center = ipAddress !== null ? [latitude, longitude] : defaultCenter;

  const customIcon = new Icon({
    iconUrl: mark,
    iconSize: [26, 32],
  });

  const SetViewOnChange = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, 13);
    }, [center, map]);
    return null;
  };

  return (
    <>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "80vh", width: "100%", zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {ipAddress !== null && (
          <Marker position={[latitude, longitude]} icon={customIcon} />
        )}
        <SetViewOnChange center={center} />
      </MapContainer>
    </>
  );
};

export default Map;
