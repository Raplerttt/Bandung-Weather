// src/components/QGISMap.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import '../Style/leaflet.css';

const QGISMap = () => {
  useEffect(() => {
    // Load QGIS GeoJSON data dynamically
    const fetchData = async () => {
      try {
        const response = await fetch('../../../map.geojson');
        const data = await response.json();
        setQGISGeoJSON(data);
      } catch (error) {
        console.error('Error loading QGIS GeoJSON:', error);
      }
    };

    fetchData();
  }, []);

  const [qgisGeoJSON, setQGISGeoJSON] = React.useState(null);

  return (
    <div>
      {qgisGeoJSON && (
        <MapContainer
          center={[0, 0]}
          zoom={2}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© OpenStreetMap contributors'
          />
          <GeoJSON data={qgisGeoJSON} />
        </MapContainer>
      )}
    </div>
  );
};

export default QGISMap;
