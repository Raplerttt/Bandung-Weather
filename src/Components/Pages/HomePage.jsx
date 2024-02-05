import Navbar from '../Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QGis from '../MapComponents'
import 'react-leaflet';
import '../../Style/HomePage.css'

function HomePage() {
  return (
    <div className='section'>
      <div>
        <Navbar />
      </div>
      <div className="container mt-2 text-center">
        <h1>Kabupaten Cimahi</h1>
        <QGis/>
      </div>
    </div>
  );
}

export default HomePage;
