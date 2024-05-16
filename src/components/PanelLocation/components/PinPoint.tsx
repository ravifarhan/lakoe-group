import { Box } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeoLocation from "./useGeoLocation";
const PinPoint = () => {
  const location = useGeoLocation();
  return (
    <>
      <Box sx={{ height: "200px", width: "100%" }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error && location.coordinates && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </Box>
    </>
  );
};

export default PinPoint;
