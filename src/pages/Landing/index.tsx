import React from 'react';
import { Link } from 'react-router-dom'

import saude from '../../assets/images/home/saude.svg';
import mente from '../../assets/images/home/mente.svg';
import corpo from '../../assets/images/home/corpo.svg';
import bemestar from '../../assets/images/home/bemestar.svg';
import keeper from '../../assets/images/home/keeper.svg';
import heart from '../../assets/images/home/heart.svg';
import keeperLogo from '../../assets/images/keeper_logo.svg';
import '../../assets/style/page/landing.css';


function Landing() {
  return (
    <div id="page-landing">
      <header className="top-nav">
        <Link to="/Home" className="start">Início</Link>
        <Link to="" className="guardian">Seja um guardião</Link>
        <Link to="" className="">Sobre</Link>
      </header>
      
      <div className="logo-container">
        <img src={keeperLogo} alt="logo"/>
        <h2>Imagine uma nova história para sua vida e acredite nela!</h2>
      </div>

      <img src={keeper} alt="Keeper" className="hero-image"/>

      <div className="activities">
        <div className="activities-item">
          <img src={saude} alt="Sua saúde" className="image-saude"/>
          <Link to="">Sua saúde</Link>
        </div>

        <div className="activities-item">
          <img src={mente} alt="Sua saúde" className="image-mente"/>
          <Link to="">Sua mente</Link>
        </div>

        <div className="activities-item">
          <img src={corpo} alt="Seu corpo" className="image-corpo"/>
          <Link to="">Seu corpo</Link>
        </div>

        <div className="activities-item">
          <img src={bemestar} alt="Seu bem-estar" className="image-bemestar"/>
          <Link to="">Seu bem estar</Link>
        </div>
      </div>

      <div className="buttons-container">
        <Link to="/Home" className="login">Login</Link>
        <Link to="" className="register">Registre-se</Link>            
      </div>

      <div className="total-connections">
        <div className="connections-content">
          <p>Total de 200 pessoas já conectadas</p> <img src={heart} alt="coração azul"/>
        </div>
      </div>

    </div>

  );
}

export default Landing;