document.addEventListener('DOMContentLoaded', function() {


    const celsius_element =document.getElementById('celsius');
    const kelvin_element =document.getElementById('kelvin')
    const fahrenheit_element =document.getElementById('fahrenheit')

    celsius_element.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            converter()
        }
    
    })
    
    function converter() {
        let celsius = parseFloat(celsius_element.value);
        let kelvin = celsius + 273.15;
        let fahrenheit = celsius * 9/5 + 32;

        kelvin_element.innerHTML = `Your Temperature in kelvin is ${kelvin.toFixed(2)} Kelvin`;
        fahrenheit_element.innerHTML = `Your Temperature in fahrenheit is ${fahrenheit.toFixed(2)} Fahrenheit`;
    
    }
    }
)