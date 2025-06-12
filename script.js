function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = '13a54692ca52489bae5193006251206'; // ⬅️ Replace this with your actual key

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const icon = data.current.condition.icon;

      document.getElementById("result").innerHTML = `
        <h2>${data.location.name}</h2>
        <p><strong>${condition}</strong></p>
        <p>${temp}°C</p>
        <img src="${icon}" alt="Weather icon">
      `;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      document.getElementById("result").innerHTML = `<p>Could not load weather info.</p>`;
    });
}
