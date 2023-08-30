let globalOutput;

const fetchCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json()
    console.log(jsonData);

    return jsonData;
}



async function SetUp() {
    globalOutput = await fetchCountriesData();
    populateCountryList(globalOutput);
}

window.onload = SetUp;
console.log(globalOutput);


function populateCountryList() {
    const ul = document.querySelector("ul");
    ul.innerHTML= "";

    globalOutput.forEach(country => {
        const li = document.createElement("li");
        li.textContent = `${country.name.common} - Population ${country.population}`;
        ul.appendChild(li);
    });


}


function handleFormSubmission(event) {
    event.preventDefault(); 
    const inputElement = document.getElementById('input-text');
    const inputValue = inputElement.value;
    filterAndUpdateList(inputValue);
}


function filterAndUpdateList(query) {
    const filteredCountries = globalOutput.filter(country => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(query.toLowerCase());
    });

    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    filteredCountries.forEach(country => {
        const li = document.createElement("li");
        li.textContent = `${country.name.common} - Population: ${country.population}`;
        ul.appendChild(li);
    });
}


const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmission);






    



