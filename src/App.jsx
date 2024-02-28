import React, { useState } from 'react';
import './App.css';
import phrases from './utils/phrases.json';
import getRandomFromArray from './utils/getRandomFromArray';
import PhraseCard from './components/PhraseCard';
import BtnPhrase from './components/BtnPhrase'; 


function App() {
  const initialValue = getRandomFromArray(phrases);
  const [phraseRandom, setPhraseRandom] = useState(initialValue);

  const [imageSelected, setImageSelected] = useState(1); 

  const objStyle = {
    backgroundImage: `url("../fondo${imageSelected}.png")` 
  };

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la Fortuna</h1>
      <article className='app__card'>
        <PhraseCard phrase={phraseRandom} />
        <BtnPhrase 
          setPhraseRandom={setPhraseRandom}
          setImageSelected={setImageSelected} 
        />
      </article>ñ
    </div>
  );
}

export default App;
