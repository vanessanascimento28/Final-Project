import { useState, useEffect } from "react";
import "../../blocks/Main.css";
import Card from "../Card/Card.jsx";
import Preloader from "../Main/Preloader.jsx";
import { fetchCountriesByName } from "../../utils/api.js";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [extraCountries, setExtraCountries] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function getRandomCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,currencies,flags"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("Resposta inesperada da API:", data);
          return;
        }

        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        const extras = shuffled.slice(3, 9);

        setSuggestedCountries(selected);
        setExtraCountries(extras);
      } catch (err) {
        console.error("Erro ao buscar países:", err);
      }
    }

    getRandomCountries();
  }, []);

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  async function handleSearch() {
    setError("");
    setIsLoading(true);
    setCountries([]);

    setTimeout(async () => {
      try {
        const result = await fetchCountriesByName(searchTerm);
        setCountries(result);
      } catch (err) {
        setError("País não encontrado ou erro na busca.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  return (
    <main className="main">
      <h2 className="main__title">Enter country name here:</h2>

      <div className="main__search-container">
        <input
          type="text"
          className="main__input"
          placeholder="Ex: Brazil"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="main__button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <hr className="main__divider" />

      {error && <p className="main__error">{error}</p>}
      {isLoading && <Preloader />}

      {!isLoading && countries.length > 0 && (
        <div
          className={`main__grid ${
            countries.length === 1 ? "main__grid--center" : ""
          }`}
        >
          {countries.map((country) => {
            const currency = country.currencies
              ? Object.values(country.currencies)[0].name
              : "N/A";
            return (
              <Card
                key={country.name.common}
                name={country.name.common}
                capital={country.capital ? country.capital[0] : "N/A"}
                region={country.region}
                currency={currency}
                flag={country.flags?.png}
              />
            );
          })}
        </div>
      )}

      {!isLoading && countries.length === 0 && (
        <>
          <div className="main__grid">
            {suggestedCountries.map((country) => {
              const currency = country.currencies
                ? Object.values(country.currencies)[0].name
                : "N/A";
              return (
                <Card
                  key={country.name.common}
                  name={country.name.common}
                  capital={country.capital ? country.capital[0] : "N/A"}
                  region={country.region}
                  currency={currency}
                  flag={country.flags?.png}
                />
              );
            })}

            {showMore &&
              extraCountries.map((country) => {
                const currency = country.currencies
                  ? Object.values(country.currencies)[0].name
                  : "N/A";
                return (
                  <Card
                    key={country.name.common}
                    name={country.name.common}
                    capital={country.capital ? country.capital[0] : "N/A"}
                    region={country.region}
                    currency={currency}
                    flag={country.flags?.png}
                  />
                );
              })}
          </div>

          <div className="main__show-more-container">
            <button
              className="main__show-more-button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Main;
