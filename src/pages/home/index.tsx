import React from 'react';
import keeper from '../../assets/images/home/keeper.svg';
import heart from '../../assets/images/home/heart.svg';
import keeperLogo from '../../assets/images/keeper_logo.svg';
import '../style.css';


function Home() {
  return (
    <div id="page-home">
        <div id="page-home-content" className="container">
          <div className="top-nav">
            <a href="" className="start">Início</a>
            <a href="" className="guardian">Seja um guardião</a>
            <a href="" className="">Sobre</a>
          </div>
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
              Total de 200 pessoas já conectadas <img src={heart} alt="coração"/>
            </span>

        </div>
    </div>

  );
}

export default Home;
