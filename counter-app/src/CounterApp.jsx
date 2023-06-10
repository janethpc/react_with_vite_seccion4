import ProperTypes from 'prop-types'

export const CounterApp = ({value}) => {
    return (
        <>
        <h1> Counter App By Janeth Perez </h1> 
        <h2> {value} </h2>
        </>
    )
}

CounterApp.propTypes = {
    value: ProperTypes.number.isRequired
}