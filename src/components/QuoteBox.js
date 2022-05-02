import {React,  useState } from 'react';
import quotes from '../quotes.json';
import colors from './add-on';

/*Funcion para llamado random de las Frases*/

const getRandom = () => Math.floor(Math.random() * quotes.length);


/*componente funcional */
const QuoteBox = () => {

    const [ phrare, setPhrare ] = useState( quotes[getRandom()]);
    console.log(phrare)

    const changePhrase = () => { 
        setPhrare(quotes[getRandom()]);
    }
    /*Constante para guardar llamado random de los colores*/
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