import React from 'react';
import './styles/PhraseCard.css';

const PhraseCard = ({ phrase }) => {
    console.log(phrase)
    return (
        <p className="card__phrase">{phrase.phrase}</p>
    );
}

export default PhraseCard;
