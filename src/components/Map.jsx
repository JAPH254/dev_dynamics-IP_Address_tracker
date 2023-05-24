import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    // console.log(`Your ip address is ${ipAddress}`);
    return ipAddress;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fta2FtZGV2IiwiYSI6ImNsZm1paW9zZDBieTc0NG5yYjVhYzAyZHkifQ.gv46TvI9vfHo32I6Dd4ZFg";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3.3792);
  const [lat, setLat] = useState(6.5244);
  const [zoom, setZoom] = useState(7);

  const getAddress = async () => {
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_DJVqRwMX5PHlqbV4esekfm0F9gPbg&ipAddress=41.89.246.254`
    );
    const data = await resp.json();
    setLng(data.location.lng);
    setLng(data.location.lat);
    // console.log(lng, lat);
  };

  useEffect(() => {
    getAddress();
    console.log(lng, lat);
  }, []);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="map__wrapper">
      <div className="map__bar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
