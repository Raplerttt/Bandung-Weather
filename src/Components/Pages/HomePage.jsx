import Navbar from '../Navbar';
import React from 'react';
import '../../Style/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="landingpage">
        <img src="../src/assets/ew.jpeg" alt="" className='img-fluid' />
      </div>
    </div>
  );
}

export default HomePage;
