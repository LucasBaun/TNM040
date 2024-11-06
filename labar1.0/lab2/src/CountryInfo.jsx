import countries from 'world-countries';
import './CountryInfo.css';
import { Link } from 'react-router-dom';

// CountryInfo component that displays information for the country at the specified index
function CountryInfo({ country, maxArea, detail }) {
    const areaRatio = (country.area / maxArea) * 100; // Calculate the ratio of the country's area to the largest country's area
    if (!country) {
        return <div>No country data available</div>; // Handle case where the country is undefined
    }
    return (
        <div>
            <Link to={`/country/${country.cca3}`}>
                <h2>{country.name.common}</h2>
            </Link>
            {detail ? (
                <>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Subregion: {country.subregion}</p>
                </>
            ) : null}
            <p>Area: {country.area} km<sup>2</sup></p>
            <div className="progress" style={{transform: `scaleX(${areaRatio / 100})`, width: '100%' }}> <p>{Number(areaRatio.toFixed(0))}%</p></div>
        </div>

    );
}

// CountrySort component that sorts the countries by area and displays them
function CountrySort({countries}) {
    // Sort countries by area in ascending order
    const countriesSorted = countries.sort((a, b) => b.area - a.area);
    const filteredCountries = countriesSorted.filter(country => country.name.common !== 'Antarctica'); // Filter out Antarctica
    const topArea = filteredCountries.slice(0, 15); // Get the top 15 countries by area
    console.log(countries);
    const maxArea = topArea[0].area; // Get the area of the largest country
    return (
        <div>
            <h1>Countries Sorted by Area</h1>
            {/* Loop through the sorted countries and display each using CountryInfo */}
        {topArea.map((country,index) => (
            <CountryInfo key={country.cca3} country={country} maxArea={maxArea} detail={index <= 4}/> // Pass the index to CountryInfo
         ))}
        </div>  
        
    );
}

export { CountryInfo, CountrySort, countries};

export default CountryInfo;