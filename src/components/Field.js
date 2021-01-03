import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
//import ColorContext from '../contexts/ColorContext';

const Field = () => {
  const language = useContext(LanguageContext);
  //const color = useContext(ColorContext);
  //console.log(color);
  //console.log(language);

  const text = language === 'english' ? 'Name' : 'Naam';

  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
};

export default Field;
