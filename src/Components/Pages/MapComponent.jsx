import React, { useEffect } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    // Inisialisasi peta
    const map = L.map('map').setView([0, 0], 2); // Ganti koordinat dan tingkat zoom sesuai kebutuhan

    // Tambahkan layer peta dari Leaflet
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return () => map.remove(); // Membersihkan peta saat komponen di-unmount
  }, []);

  return <div id="map" style={{ width: '50%', height: '400px' }} />;
};

export default MapComponent;
