import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className="ui container">
      <LanguageSelector onLanguageChange={setLanguage} />
      <ColorContext.Provider value="primary">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
