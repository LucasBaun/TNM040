import countries from 'world-countries';
import './CountryInfo.css';

// CountryInfo component that displays information for the country at the specified index
function CountryInfo({ country }) {

    if (!country) {
        return <div>No country data available</div>; // Handle case where the country is undefined
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Area: {country.area} km<sup>2</sup></p>
        </div>
    );
}

// CountrySort component that sorts the countries by area and displays them
function CountrySort() {
    // Sort countries by area in ascending order
    const countriesSorted = countries.sort((a, b) => b.area - a.area);
    const filteredCountries = countriesSorted.filter(country => country.name.common !== 'Antarctica'); // Filter out Antarctica
    const topFifteenArea = filteredCountries.slice(0, 15); // Get the top 15 countries by area
    console.log(topFifteenArea);
    return (
        <div>
            <h1>Countries Sorted by Area</h1>
            {/* Loop through the sorted countries and display each using CountryInfo */}
            {topFifteenArea.map((country) => (
            <CountryInfo key={country.cca3} country={country} /> // Pass the index to CountryInfo
        ))}
        </div>  
        
    );
}

export { CountryInfo, CountrySort };

export default CountrySort;