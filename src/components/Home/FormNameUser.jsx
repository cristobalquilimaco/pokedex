import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.Slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormNameUser = () => {

    const {trainerName} = useSelector(state => state)

    const inputName = useRef()


    const dispatch = useDispatch()

    const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  
}

  return (
    <form className='form_Trainer' onSubmit={handleSubmit}>
        <input className='form_input' ref={inputName} type="text" />
        <button className='btn_trainer'>Star</button>
    </form>
  )
}

export default FormNameUser