import React from 'react';
import keeper from '../../assets/images/home/keeper.svg';
import keeperLogo from '../../assets/images/keeper_logo.svg';
import '../style.css';


function Home() {
  return (
    <div id="page-home">
        <div id="page-home-content" className="container">
          <div className="logo-container">
            <img src={keeperLogo} alt="logo"/>
            <h2>Imagine uma nova história para sua vida e acredite nela!</h2>
          </div>

            <img src={keeper} alt="Keeper" className="hero-image"/>

            <div className="buttons-container">
              <a href="" className="login">Login</a>
              <a href="" className="register">Registre-se</a>            
            </div>

            <span className="total-connections">
              Total de 200 pessoas já conectadas <img src="" alt=""/>
            </span>

        </div>
    </div>

  );
}

export default Home;
