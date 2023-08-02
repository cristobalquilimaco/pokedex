import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import './styles/formpoke.css'





const FormPoke = ({setFormUrl, urlBase}) => {

    const inputPoke = useRef()

    const navigate = useNavigate()
    const url = `https://pokeapi.co/api/v2/type/`
    const [types, getAllTypes] = useFetch(url)

useEffect(() => {
getAllTypes()
}, [])



        const handleSubmit = e => {
e.preventDefault()

const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
navigate(path)
}

const handleChange = e =>{
    setFormUrl(e.target.value);
}

  return (
    <div className='form__input__poke'>
        <form className='form__search__poke' onSubmit={handleSubmit}>
            <input className='input__poke' ref={inputPoke} type="text" />
            <button>Search</button>
        </form>
        <select className='select__type' onChange={handleChange}>
            <option className='option__type_pokemon' value={urlBase}>All Pokemons</option>
            {
                types?.results.map(type => (
                    <option className='select_poke_search' 
                    key={type.url}
                    value={type.url}
                    >{type.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default FormPoke