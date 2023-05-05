import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import pokedexImg from '/public/pokedexImg.png'
import './pageStyles/pokedex.css'




const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.'

  const [formUrl, setFormUrl] = useState(urlBase)

  const { trainerName } = useSelector(state => state)
  
    return (
    <div className='page__selectpokemon'>
      <div className='pokedex__header'>
      
      <section className='poke__header'>
        <div className='line__header'>
        <div className='footer__red'></div>
          <div className='footer__black'></div>
        </div>

          <article className='header_in_pokedex'>
          <img className='logo_poke_img' src={pokedexImg} alt="" />
          <div className='circles_pokedex'>
         
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          </div>
          </article>


          
        </section>
      </div>
      <p className='user__trainer__name'>Welcome <span className='trainer'>{trainerName}</span></p>
        <div className='search__poke'>
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/>
       
        </div>
        <PokeContainer formUrl={formUrl}/>
    </div>
  )
}

export default Pokedex