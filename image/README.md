# Temperature Converter

This project is a **Temperature Converter** that allows users to convert temperatures from Celsius to Kelvin and Fahrenheit. The user inputs a temperature in Celsius, and the results are displayed in Kelvin and Fahrenheit. 

## Features
- Convert Celsius to Kelvin and Fahrenheit.
- Displays the converted temperature in a user-friendly format.
- Works when the user presses the "Enter" key after inputting the Celsius temperature.




## How to Run

1. Clone or download the project files to your local machine.
2. Open `index.html` in a web browser.
3. Enter a temperature in Celsius and press the "Enter" key to get the temperature converted to Kelvin and Fahrenheit.

## Project Files

- `index.html`: Contains the HTML structure of the page.
- `styles.css`: Provides the styling for the page layout and elements.
- `script.js`: Contains the JavaScript code for the temperature conversion logic.

## Screenshots

### 1. Initial State
![initial (2).png](<initial (2).png>))

### 2. After Conversion
/![conversion(2).png](<conversion (2).png>))

## Code Explanation

### HTML (`index.html`)
The HTML file sets up the basic structure:
- An input field to capture the Celsius temperature.
- Elements to display the converted temperature in Kelvin and Fahrenheit.
  
### CSS (`styles.css`)
- A simple responsive design with styling for the card, input field, and result sections.
- The `main` container is centered on the page, and the design includes shadows and rounded borders for a clean look.

### JavaScript (`script.js`)
- Listens for the `keypress` event on the Celsius input field.
- When the user presses "Enter", the script calculates and displays the temperature in Kelvin and Fahrenheit using the following formulas:
  - Kelvin = Celsius + 273.15
  - Fahrenheit = (Celsius * 9/5) + 32
- The results are updated dynamically in the respective elements.

## How to Use

1. Open the **Temperature Converter** in your browser.
2. Enter a temperature in the input field (in Celsius).
3. Press the "Enter" key.
4. The converted values in Kelvin and Fahrenheit will be displayed below.

## Technologies Used

- HTML
- CSS
- JavaScript

## License
This project is open-source and available under the MIT License.
