import React from 'react';

const LanguageSelector = (props) => {
  return (
    <div>
      Select a language :
      <i
        className="flag us"
        onClick={() => props.onLanguageChange('english')}
      />
      <i className="flag nl" onClick={() => props.onLanguageChange('dutch')} />
      <i
        className="flag tr"
        onClick={() => props.onLanguageChange('turkish')}
      />
    </div>
  );
};

export default LanguageSelector;
