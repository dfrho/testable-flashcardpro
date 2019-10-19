import React, { useState } from 'react';

const Card = ({ card }) => {
  const [ showAnswer, setShowAnswer ] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

    const { prompt, answer } = card;

    return (
      <div className="card">
        <div className={'card-prompt'} onClick={() => handleClick()}>
          <h4>
            {prompt}
          </h4>
        </div>

        <div className={'card-answer'}>
          <h4
            className={showAnswer ? 'text-revealed' : 'text-hidden'}
          >
            {answer}
          </h4>
        </div>
      </div>
    );

}

export default Card;
