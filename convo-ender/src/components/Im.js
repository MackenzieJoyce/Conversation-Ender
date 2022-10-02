import React, { useState } from 'react';

import POA from '../utils/pAO.json';

function Im() {
  // console.log(POA);
  // const [currentPrompt, setCurrentPrompt] = useState(POA[0].text);

  const [index, setIndex] = useState(0);
  const prompt = POA[index].text;
  const options = POA[index].options

  return (
    <section id="IMWindow">
      <section id="titleBar"></section>
      <section id="conversation">{prompt}</section>
      {/* {currentPrompt} */}
      {/* {console.log(currentPrompt)} */}
      <section id="userInteractionBox">
        {options && options.map((option, i) => {
          return (
            <>
              <button key={i}>{option.text}</button>
            </>
          )
        })}
        {/* {currentPrompt.options &&
          currentPrompt.options.map(({ text }) => (
            <button key={currentPrompt.options.id}>{text}</button>
          ))} */}
        {/* {console.log(currentPrompt.options)} */}
      </section>
    </section>
  );
}

export default Im;
