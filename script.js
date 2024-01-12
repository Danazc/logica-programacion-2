function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById('celsiusInput').value);
  
    if (!isNaN(temperaturaCelsius)) {
      let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius).toFixed(2);
      let temperaturaKelvin = celsiusToKelvin(temperaturaCelsius).toFixed(2);
  
      let resultadosDiv = document.getElementById('resultados');
      resultadosDiv.innerHTML = "<p>" + temperaturaCelsius + "°C son " + temperaturaFahrenheit + "°F.</p>";
      resultadosDiv.innerHTML += "<p>" + temperaturaCelsius + "°C son " + temperaturaKelvin + "K.</p>";
    } else {
      alert("Por favor, ingrese una temperatura válida.");
    }
  }
  