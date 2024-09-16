import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryInfo from './CountryInfo';
import { CountrySort } from './CountryInfo';  // Importing CountrySort component from CountryInfo.jsx

function App() {
  console.log('App');
  return (
    <div>
      <CountrySort />
    </div>
  );
}

export default App
