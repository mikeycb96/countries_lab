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






    



