import {React,  useState } from 'react';
import phrares from '../phrases.json';

/*Funcion para llamado random de las Frases*/

const getRandom = () => Math.floor(Math.random() * phrares.length);

/*arreglo de colores para fondo, letras y botón*/
const colors = ['#845EC2', '#D65DB1', '##008F7A', '#FF9671', '#FFC75F', '#0081CF', '#C34A36']

/*componente funcional */
const QuoteBox = () => {

    const [ phrare, setPhrare ] = useState( phrares[getRandom()]);
    console.log(phrare)

    const changePhrase = () => { 
        setPhrare(phrares[getRandom()]);
    }
    /*Constante para guardar llamado random de las los colores*/
    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style = `background:${color}`;

/* cuerpo JSX */
    return (
                                /*Estilo en linea de los colores */
        <div className='shadow' style={{ color : color }}>
        <div className='conteiner'>
        <div className='contentPhrase'>
        <i className="fa-solid fa-quote-left quote"></i>
              <p>{phrare.quote}</p>
         </div>
         <div>
         <p>{phrare.author}</p>
        <button onClick={changePhrase} style={{ color : color }} >
        <i className="fa-solid fa-angle-right" ></i>
        </button>
        </div>
        </div>
      </div>
    );
};

export default QuoteBox;