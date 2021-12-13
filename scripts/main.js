function resetcart() {
    document.getElementById("image1").src= "images/banff.jpeg"
    document.getElementById("image2").src= "images/blue_icebergs.jpeg"
    document.getElementById("image3").src= "images/rainbow.jpg"
    document.getElementById("image4").src= "images/milky_way.jpeg"
    document.getElementById("image5").src= "images/grazing_sheep.jpeg"
    document.getElementById("image6").src= "images/emerald_lake.jpeg"
    console.log(">>><<<");
    console.log("Resetting cart!");
    console.log(">>><<<");
    console.log(price);
    price = 0;
}



function submitcart() {
    document.getElementById("image1").src= "images/banff.jpeg"
    document.getElementById("image2").src= "images/blue_icebergs.jpeg"
    document.getElementById("image3").src= "images/rainbow.jpg"
    document.getElementById("image4").src= "images/milky_way.jpeg"
    document.getElementById("image5").src= "images/grazing_sheep.jpeg"
    document.getElementById("image6").src= "images/emerald_lake.jpeg"
    console.log("^^^ Order above is complete ^^^");
    console.log(">>><<<");
    console.log("$" + price);
    price = 0;
}

function changeimage1()
{
    document.getElementById("image1").src= "images/cart.jpg"
    console.log("Lake Mountains in Cart!");
    price++;
    price++;
}

function changeimage2()
{
document.getElementById("image2").src= "images/cart.jpg"
console.log("Fresh Icebergs in cart!");
price++;
}

function changeimage3()
{
document.getElementById("image3").src= "images/cart.jpg"
console.log("Colorful Hills in cart!");
price++;
}

function changeimage4()
{
document.getElementById("image4").src= "images/cart.jpg"
console.log("Aurora Borealis in cart!");
price++;
}

function changeimage5()
{
document.getElementById("image5").src= "images/cart.jpg"
console.log("Grazing Sheep in cart!");
price++;
}

function changeimage6()
{
document.getElementById("image6").src= "images/cart.jpg"
console.log("Forest Mountains in cart!");
price++;
}



let canvas = document.getElementById("priced");
let ctx = canvas.getContext("2d");

let price = 0;

function addPrice() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "Black";
    ctx.fillText("Your Total: $" + price, 5, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    addPrice();
}

setInterval(draw, 10);