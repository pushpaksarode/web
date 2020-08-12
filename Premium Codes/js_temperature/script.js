let celcius;
let fahrenheit;


// const fahrenheitCalculator = () => document.getElementById("fahrenheit").value = ((degreeCelcius*9/5)+32);  // formula : (c*9/5)*32 = f
 
// const celciusCalculator = () => document.getElementById("celcius").value = ((fahrenheit-32)*5/9); // formula : (f-32)*5/9 = c


function fCalculator(){
    celcius = document.getElementById("celcius").value;
    document.getElementById("fahrenheit").value = ((celcius*9/5)+32);
}

function cCalculator(){
    fahrenheit = document.getElementById("fahrenheit").value;
    document.getElementById("celcius").value = ((fahrenheit-32)*5/9);
}