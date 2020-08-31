import React from 'react';
import keeper from '../../assets/images/home/keeper.svg';



function Home() {
  return (
    <div id="page-home">
        <div id="page-home-content" className="container">
          <div className="logo-container">
            <h1>Bem vindo(a) ao Keeper</h1>
            <h2>Imagine uma nova história para sua vida e acredite nela!</h2>

            <img src={keeper} alt="Keeper" className="hero-image"/>

            <div className="buttons-container">
              <a href="" className="Login">Login</a>

            </div>
          </div>
        </div>
    </div>

  );
}

export default Home;
