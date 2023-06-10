import PropTypes from 'prop-types';

const name = 'Bertha Janeth Perez'
const newMessage = {
    message: 'Hola Mundo',
    title: 'By Bertha Janeth'
}

const getResult = (a, b) => {
    return a + b; 
}

export const FirstApp = ( { title, subTitle } ) => {


    return (
        <>
            <h1> {name} </h1>  

            <code>{JSON.stringify(newMessage)}</code>

            <p> Soy un subtitulo </p>

            <p> resultado de la tarea leccion 38 es igual = {getResult(1,10)}</p>

            <p>{ title } + {subTitle + 1 }</p>
        </>
      
    )
  }

  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
  }

  FirstApp.defaultProps = {
    title: 'no hay titulo',
    subTitle: 'no hay numeros'
  }