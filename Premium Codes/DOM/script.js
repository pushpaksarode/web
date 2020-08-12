function addHeading(){
    
    // let eleObj = document.createElement('h1');
    // document.body.appendChild(eleObj);
    // eleObj.textContent="Hello World!"

    var obj1 = document.createElement('h1');
    obj1.innerText="helllooo"; // innerHTML / TextContent
    document.body.appendChild(obj1);

}


function addImage(){
    let imgObj = document.createElement('img');
    imgObj.src="./astro.jpg";
    document.body.appendChild(imgObj);
}