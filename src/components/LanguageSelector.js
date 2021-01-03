import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
  const language = useContext(LanguageContext);
  return (
    <div>
      Select a language :
      <i
        className="flag us"
        onClick={() => language.onLanguageChange('english')}
      />
      <i
        className="flag nl"
        onClick={() => language.onLanguageChange('dutch')}
      />
      <i
        className="flag tr"
        onClick={() => language.onLanguageChange('turkish')}
      />
    </div>
  );
};

export default LanguageSelector;
