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
    <div id="page-landing">
        <div id="page-landing-content" className="container">
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

          <div className="activities-container">
            <div className="image-container1">
                <Link to="" className="saude">
                <img src={saude} alt="Sua saúde" className="image-saude"/>
                <h3>Sua saúde</h3>
                </Link>

                <Link to="" className="mente">
                <img src={mente} alt="Sua saúde" className="image-mente"/>
                <h3>Sua mente</h3>
                </Link>
          </div>


            <div className="image-container2">
              <Link to="" className="corpo">
              <img src={corpo} alt="Seu corpo" className="image-corpo"/>
              <h3>Seu corpo</h3>
              </Link>

              <Link to="" className="bemestar">
              <img src={bemestar} alt="Seu bem-estar" className="image-bemestar"/>
              <h3>Seu bem estar</h3>
              </Link>
            </div>
          </div>

            <div className="buttons-container">
              <Link to="/Home" className="login">Login</Link>
              <Link to="" className="register">Registre-se</Link>            
            </div>

            <span className="total-connections">
              Total de 200 pessoas já conectadas <img src={heart} alt="coração azul"/>
            </span>

        </div>
    </div>

  );
}

export default Landing;