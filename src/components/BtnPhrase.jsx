import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/BtnPhrase.css'
import './styles/PhraseCard.css'


//import arrImages from '../utils/arrImages.json'
//import './styles/BtnPhrase.css'
//import './styles/Phrasecard.css0'



const BtnPhrase = ({ setPhraseRandom, setImageSelected }) => {
  
   const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom (phrase)

        const background = getRandomFromArray (arrImages) 
        setImageSelected (background)
    }     
    

    return (
    <button className="card__btn" onClick={handleClick}> Probar mi suerte </button>
  )
}

export default BtnPhrase