import Navbar from '../Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Style/HomePage.css'
import MapComponent from './MapComponent';

function HomePage() {
  return (
    <div className='section'>
      <div>
        <Navbar />
      </div>
      <div className="container mt-2 text-center">
        <h1>Bandung</h1>
        <MapComponent/>
      </div>
    </div>
  );
}

export default HomePage;
