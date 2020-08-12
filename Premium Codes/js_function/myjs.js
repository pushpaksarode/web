// Basic Function

let year=1960;

let calculatedYear;

function ChampionSince(){
    return year-2;
}

calculatedYear=ChampionSince();

console.log(`Calculated Year Is : ${calculatedYear}`);


// Function Expression (Storing function into Varible)

const funVar=function(a,b){
    return a*b;
};

let A=45;
let B=2;

// calling function expression

console.log(funVar); // displying fuction as it is

console.log(funVar(A,B)); // invoking function i.e. function call throught variable 

// window.print();  use to take print (pdf) of document



//---------------------------assiging function name into variable--------------(In PHP function name comes in double quotes !)

function addTwoValues(){
    console.log(2+3);
}

let funVar2=addTwoValues;
funVar2();