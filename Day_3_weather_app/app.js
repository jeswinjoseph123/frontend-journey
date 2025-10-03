const inputcity = document.getElementById("inputcity");
const btn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("resultDiv");
const API_KEY = "9b4e7baf1a7922f7323d8a8ee549eab0";

async function getWeather(city) {
  try {
    resultDiv.innerHTML = `<p>Loading weather for ${city}...</p>`;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (!response.ok) {
      resultDiv.innerHTML = `<p style="color:red;">Error: ${data.message}</p>`;
      return;
    }

    const {
      main: { temp },
      weather: [{ description, icon }],
      name,
    } = data;

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p>${temp}°C</p>
      <p>${description}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon"/>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Network error. Please try again.</p>`;
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  const input = inputcity.value.trim();
  if (input === "") {
    window.alert("Please enter a city");
  } else {
    getWeather(input);
    inputcity.value = "";
  }
});
