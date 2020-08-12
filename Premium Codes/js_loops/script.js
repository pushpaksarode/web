let myArray=["Pasta","Maggi","Biscuits","Blueberry"];

// simple for loop

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
    document.write(myArray[i]);
}

// forEach loop 

myArray.forEach(function(itemFromArray){
    console.log(itemFromArray);
    document.write(itemFromArray);
});


// simplified version of forEach 

myArray.forEach(itemFromArray => document.write(itemFromArray));