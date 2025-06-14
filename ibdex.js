// Display Functions
function displayTemperature(temp) {
  document.getElementById("temp").textContent = `Temperature: ${temp}°C`;
}

function displayHumidity(humidity) {
  document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
}

function displayCondition(condition) {
  document.getElementById("condition").textContent = `Condition: ${condition}`;
}

// Error Handling + Simulation
function simulateWeather() {
  // Simulated data (could be undefined for testing)
  const weatherData = {
    temperature: 28,
    humidity: 60,
    condition: "Sunny"
    // Uncomment next line to simulate error: temperature: undefined
  };

  try {
    // Validation
    if (
      weatherData.temperature === undefined ||
      weatherData.humidity === undefined ||
      weatherData.condition === undefined
    ) {
      throw new Error("Weather data is incomplete!");
    }

    // Display
    displayTemperature(weatherData.temperature);
    displayHumidity(weatherData.humidity);
    displayCondition(weatherData.condition);

  } catch (error) {
    document.getElementById("weatherDisplay").textContent =
      "Error: " + error.message;
  }
}