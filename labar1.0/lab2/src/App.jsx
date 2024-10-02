import './App.css'
import React, {useState} from 'react'; // Importing React library
import {CountrySort} from './CountryInfo';  // Importing CountrySort component from CountryInfo.jsx
import {countries} from './CountryInfo';

function App() {
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
      const filtered = countries.filter(country => country.name.common.toLowerCase().startsWith(lowerCaseWord)).slice(0, 4);  // Limit the results to 4 when filtering
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
