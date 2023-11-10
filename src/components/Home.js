// src/components/Home.js
import React from 'react';
import image from './Images/abcd';

const Home = () => {
  return (
        <div className="App">
          <header className="App-header">
            <h1>Coffee Shop</h1>
            <abcd />
          </header>
          <main>
            <Menu />
            <Contact />
          </main>
        </div>
  );
}

export default Home;
