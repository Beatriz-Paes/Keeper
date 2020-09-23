import React from 'react';
import { Link } from 'react-router-dom'

import saude from '../../assets/images/home/saude.svg';
import mente from '../../assets/images/home/mente.svg';
import corpo from '../../assets/images/home/corpo.svg';
import bemestar from '../../assets/images/home/bemestar.svg';
import keeper from '../../assets/images/home/keeper.svg';
import heart from '../../assets/images/home/heart.svg';
import keeperLogo from '../../assets/images/keeper_logo.svg';
import '../style.css';


function Landing() {
  return (
    <div id="page-home">
        <div id="page-home-content" className="container">
          <div className="top-nav">
            <Link to="/Home" className="start">Início</Link>
            <Link to="" className="guardian">Seja um guardião</Link>
            <Link to="" className="">Sobre</Link>
          </div>
          <div className="logo-container">
            <img src={keeperLogo} alt="logo"/>
            <h2>Imagine uma nova história para sua vida e acredite nela!</h2>
          </div>
          <img src={keeper} alt="Keeper" className="hero-image"/>
         
          <div className="image-container">
            <img src={saude} alt="Sua saúde" className="image-saude"/>
            <img src={mente} alt="Sua mente" className="image-mente"/>
            <img src={corpo} alt="Seu corpo" className="image-corpo"/>
            <img src={bemestar} alt="Seu bem-estar" className="image-bemestar"/>
          </div>
           

            <div className="buttons-container">
              <Link to="/Home" className="login">Login</Link>
              <Link to="" className="register">Registre-se</Link>            
            </div>

            <span className="total-connections">
              Total de 200 pessoas já conectadas <img src={heart} alt="coração"/>
            </span>

        </div>
    </div>

  );
}

export default Landing;
