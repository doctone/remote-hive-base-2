import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from "leaflet";

const Map = () => {
  const coords = [52.194811, -2.221346] as LatLngExpression;
  return (
    <MapContainer
      center={coords}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords} draggable={true}>
        <Popup>Hey you found me</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
