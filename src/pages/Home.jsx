import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import './pageStyles/home.css'
import pokedexImg from '/public/pokedexImg.png'


const Home = () => {
  return (
    <div className='home__page'>
      <img className='pokedex__img' src={pokedexImg} alt="poke api" />
        <h2 className='greetings'>Hi Trainer</h2>
        <p className='welcome'>Please give us your Trainer name to start</p>
        <FormNameUser/>
        <footer className='poke__footer'>
          <div className='footer__red'></div>
          <div className='circles_home'>
          <div className="circle1_home"></div>
          <div className="circle2_home"></div>
          <div className="circle3_home"></div>
          <div className="circle4_home"></div>
          </div>

          <div className='footer__black'></div>
        </footer>
    </div>
  )
}

export default Home