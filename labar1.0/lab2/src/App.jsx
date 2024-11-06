import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import React, {useState} from 'react'; // Importing React library
import {CountrySort} from './CountryInfo';  // Importing CountrySort component from CountryInfo.jsx
import {countries} from './CountryInfo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        {/* <Route path="/country" element={<CountryDetails />} /> */}
        <Route path="/country/:countryCode" element={<CountryDetails />} />
        
      </Routes>     
    </BrowserRouter>
    
  )
}
function CountryDetails() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleBackClick = () => {
    navigate('/');
  };
  let {countryCode} = useParams(); // Get the userId from the URL
  const granne = countries.find(c => c.cca3 === countryCode);
  console.log(countryCode);
  console.log(granne);
  const granneList = getCountryByCca3(granne.borders);
  return (
    <div>
      <h1>{granne.name.common}</h1>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

function getCountryByCca3(granar) {
  console.log(granar);
  
}
function CountryList() {
  const [inputValue, setInputValue] = useState(''); // Initialize inputValue state
  const [filteredCountries, setFilteredCountries] = useState([]); // Initialize filteredCountries state

  //----------------handleInputChange function----------------
  const handleInputChange = (event) => {
    const value = event.target.value; // Get the value from the input element
    setInputValue(value); // Update the inputValue state
    console.log(value);
    filterSearch(value);
  };
  //---------------------------------------------------

  //-----------filterSearch function---------------------
  const filterSearch = (value) => {
    
    const lowerCaseWord = value.toLowerCase();
    if (lowerCaseWord === '') {
      setFilteredCountries(countries);  // Show all countries when input is empty
    } else {
      const filtered = countries.filter(country => country.name.common.toLowerCase().startsWith(lowerCaseWord)).slice(0, 5);  // Limit the results to 4 when filtering
      setFilteredCountries(filtered);
    }
  };
  //---------------------------------------------------


  //-----------Input function-------------------------
  return (
    <div>
      <form onInput={(e) => {e.preventDefault();}}> 
        <input type="text" 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a country"
        />
      </form>

      {filteredCountries.length > 0 ? (
        <CountrySort countries={filteredCountries}/>
      ) : ( // If there are no filtered countries, display all countries
        <CountrySort countries={countries}/>
      )}
    </div>
  );
  //-------------------------------------------------


}

export default App
