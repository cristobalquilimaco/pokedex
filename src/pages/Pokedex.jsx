import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './pageStyles/pokedex.css'
import Pagination from '../components/Pokedex/Pagination'

import useFetch from '../hooks/UseFetch'
import PokeHeader from '../shared/PokeHeader'




const Pokedex = () => {
 

  const [pokePerPage, setPokePerPage] = useState(10);
  const [currentPoke, setCurrentPoke] = useState(1)
  const [limitValue, setLimitValue] = useState(pokePerPage)

  const urlBase = `https://pokeapi.co/api/v2/pokemon?limit=${limitValue}&offset=${currentPoke}`
  const [formUrl, setFormUrl] = useState(urlBase)
  const { trainerName } = useSelector(state => state)
  const [pokemons, getAllPokemons] = useFetch(urlBase)
  const [isLoading, setIsLoading] = useState(true)


  // Pagination

  useEffect(() => {
    getAllPokemons(urlBase);
  }, [formUrl, urlBase]);
  
  const totalPokemons = pokemons?.count;
  
    return (
    <div className='page__selectpokemon'>
  <PokeHeader/>
  
      <p className='user__trainer__name'>Welcome <span className='trainer'>{trainerName}</span></p>
        <div className='search__poke'>
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl}
              pokePerPage={pokePerPage}
              currentPoke={currentPoke}
              pokemons={pokemons}
              setLimitValue={setLimitValue}
        />
        </div>
        <PokeContainer formUrl={formUrl}
        pokePerPage={pokePerPage}
        currentPoke={currentPoke}
        totalPokemons={totalPokemons}
        urlBase={urlBase}
        setPokePerPage={setPokePerPage}
        setCurrentPoke={setCurrentPoke}
        />

<Pagination
             pokePerPage={pokePerPage}
             currentPoke={currentPoke}
             setCurrentPoke={setCurrentPoke}
             totalPokemons={totalPokemons}
     />

    </div>
  )
}

export default Pokedex