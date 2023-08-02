import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import pokedexImg from '/public/pokedexImg.png'
import './pageStyles/pokedex.css'
import Pagination from '../components/Pokedex/Pagination'
import useFetch from '../hooks/UseFetch'




const Pokedex = () => {

  const [pokePerPage, setPokePerPage] = useState(10);
  const [currentPoke, setCurrentPoke] = useState(1)
  


  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10.'
  const [formUrl, setFormUrl] = useState(urlBase)
  const { trainerName } = useSelector(state => state)
  const [pokemons, getAllPokemons] = useFetch(formUrl, urlBase)
  const [poke, setPoke] = useState(urlBase)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl, urlBase])

  const totalPokemons = poke?.length;
console.log(totalPokemons)
  

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
         
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          </div>
          </article>


          
        </section>
      </div>
      <p className='user__trainer__name'>Welcome <span className='trainer'>{trainerName}</span></p>
        <div className='search__poke'>
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}/>
       
        </div>
        <PokeContainer formUrl={formUrl}
        pokePerPage={pokePerPage}
        currentPoke={currentPoke}
        totalPokemons={totalPokemons}
        />
        <Pagination
        urlBase={urlBase}
        pokePerPage={pokePerPage}
        currentPoke={currentPoke}
        setCurrentPoke={setCurrentPoke}
        totalPokemons={totalPokemons}
       
        />
    </div>
  )
}

export default Pokedex