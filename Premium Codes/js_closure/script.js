function outer(){
    let myFirstName="Pushpak";
     console.log("Outer Called!")
     function inner(){
        console.log("Inner Self Called!");
        let myLastName="Sarode";
        console.log("Full Name : "+myFirstName+" "+myLastName);
     }
     console.log("Inner Called By Outer Funtion!");
     inner();
     return inner;    // returning inner function that will store in variable below
}


// calling to outer function 

let funVar=outer();


// calling inner() throught variable funVar

funVar();
