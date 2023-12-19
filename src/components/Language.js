

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Navigate to the selected language's folder
    navigate(`/${language.toLowerCase()}`);
  };

  return (
    <div  className="language-container">
      <h2>Select a Language</h2>
      <select className="language-select" onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="">Select</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Marathi">Marathi</option>
      </select>
      {selectedLanguage && (
        <p>You selected: {selectedLanguage}</p>
      )}
    </div>
  );
};

export default Language;
