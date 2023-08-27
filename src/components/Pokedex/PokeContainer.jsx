import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch'
import PokeCard from './PokeCard'
import './styles/pokeContainer.css'



const PokeContainer = ({formUrl, pokePerPage, currentPoke, }) => {


  const lastIndex = currentPoke * pokePerPage
  const firstIndex = lastIndex - pokePerPage


  const [pokemons, getAllPokemons] = useFetch(formUrl)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])


 


  return (
    <div className='poke__container'>
           {
            pokemons?.results
            ?(
              pokemons?.results.map(pokemon => (
                <PokeCard
                key={pokemon.url}
                url={pokemon.url}
                />
                ))
            )
            : (
              pokemons?.pokemon.map(objectPoke =>(
              <PokeCard
              key={objectPoke.pokemon.url}
              url={objectPoke.pokemon.url}
              />  
              )).slice(firstIndex, lastIndex)
            )
           
           
           }
    </div>
         
  )
}

export default PokeContainer