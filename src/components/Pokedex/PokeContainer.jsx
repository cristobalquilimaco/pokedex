import React, { useEffect } from 'react'
import useFetch from '../../hooks/UseFetch'
import PokeCard from './PokeCard'
import './styles/pokeContainer.css'




const PokeContainer = ({formUrl}) => {


  const [pokemons, getAllPokemons] = useFetch(formUrl)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])

  console.log(pokemons);
 
  

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
              ))
            )
           
           
           }
    </div>
  )
}

export default PokeContainer