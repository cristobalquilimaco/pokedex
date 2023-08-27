import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch'
import './pageStyles/pokeinfo.css'
import PokeHeader from '../shared/PokeHeader'
import { Link} from 'react-router-dom';


const PokeInfo = () => {
    const {name} =useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonByName, hasError] = useFetch(url)
  

    useEffect(() => {
        getPokemonByName()
    }, [name])


  return (
    <>
    <PokeHeader/>
    <article className='goback'>
    <Link to="/pokedex"><i className='bx bx-arrow-back' ></i></Link>
    <p>Go Back</p>
    </article>

        <div className='poke_render'>

        {
            hasError
            ? <h1> this pokemon not exist</h1>
            :<>
            <div className='poke__card__individual'>
            <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
            <img className="pokemon__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
         <div className='namepokemon'>
         <h2 className={` color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          </div>          
        <div className='context__poke'>
        <ul className='poke_list'>
        <li className='poke__weight'>
          <span>Weight </span>{pokemon?.weight}
          </li>
          <li className='poke__height'>
          <span>Height </span>{pokemon?.height}
          </li>
      </ul>
        </div>
          <div className='titles__pokemons'>
            <p>Type</p>
            <p>Abilities</p>
          </div>
          <div className='principal__types'>
          <ul className='principal__types1'>
          {
            pokemon?.types.map(objType => (
              <li className={`pokemon__type-specifics1 color__background-${pokemon?.types[0].type.name}`}>{objType.type.name}</li>
            ))
          }
        </ul>

        <ul className='principal__types1'>{
            pokemon?.abilities.map(objAbility => (
                <li className='pokemon__type-specifics1' key={objAbility.ability.url}>{objAbility.ability.name}</li>
            ))
            }
        </ul>
          </div>

      
       <div className='all__stats2'>
       <ul className="all__stats">
          {
            pokemon?.stats.map(objStat => (
              <li className="pokemon__stats-specific2" key={objStat.stat.url}>
                <span className="pokemon__stats-label1">{objStat.stat.name}</span>
          
                <progress className="progress_bar" min="1" max="150" value={objStat.base_stat}></progress>
            
                
      
                <span className={`pokemon__stats-value1 color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>

              </li>
            ))
          }
        </ul>
       </div>

            </div>

        <ul className='poke__moves'>
        {
          pokemon?.moves.map(objMoves => (
            <li className='list__moves-poke' key={objMoves.move.url}> {objMoves.move.name}</li>
            ))
        }
      </ul>
            </>
        }

        </div>
    </>

  )
}

export default PokeInfo