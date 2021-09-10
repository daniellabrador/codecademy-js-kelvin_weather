// Today's forecast
const kelvin = 0;

// Today's forecast, in celsius
const celsius = kelvin - 273;

// Today's forecast, in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounded down temperature, in fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);