import React from 'react'
import charmanderLoading from"/public/charmander-poke.gif"
import "../components/Pokedex/styles/loadingPage.css"

const LoadinPage = () => {
  return (
    <div>
        <img className='img_loading' src={charmanderLoading} alt="" />
    </div>
  )
}

export default LoadinPage