import ProperTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState( value );

   const handleAdd = () => {
        setCounter(counter +1)
   }

   const handleDecrement = () => {
        setCounter(counter -1)
   }

   const handleReset = () => {
        setCounter(value)
   }

    return (
        <>
        <h1> Counter App By Janeth Perez </h1> 
        <h2> {counter} </h2>

        <button onClick={ handleAdd }>
            +1
        </button>

        <button onClick={ handleDecrement }>
            -1
        </button>
        
        <button onClick={ handleReset }>
            reset
        </button>
        </>
    )
}

CounterApp.propTypes = {
    value: ProperTypes.number.isRequired
}