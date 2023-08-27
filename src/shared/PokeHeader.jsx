import React from 'react'
import pokedexImg from '/public/pokedexImg.png'

const PokeHeader = () => {
  return (
        <div className='pokedex__header'>
      
      <section className='poke__header'>
        <div className='line__header'>
        <div className='footer__red'></div>
          <div className='footer__black'></div>
        </div>

          <article className='header_in_pokedex'>
          <img className='logo_poke_img' src={pokedexImg} alt="" />
          <div className='circles_pokedex'>
         
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          </div>
          </article>


          
        </section>
    </div>
  )
}

export default PokeHeader