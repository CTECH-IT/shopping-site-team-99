function resetcart() {
    document.getElementById("image1").src= "images/banff.jpeg"
    document.getElementById("image2").src= "images/blue_icebergs.jpeg"
    document.getElementById("image3").src= "images/rainbow.jpg"
    document.getElementById("image4").src= "images/milky_way.jpeg"
    document.getElementById("image5").src= "images/grazing_sheep.jpeg"
    document.getElementById("image6").src= "images/emerald_lake.jpeg"
}


function changeimage1()
{
    document.getElementById("image1").src= "images/cart.jpg"
}

function changeimage2()
{
document.getElementById("image2").src= "images/cart.jpg"
}

function changeimage3()
{
document.getElementById("image3").src= "images/cart.jpg"
}

function changeimage4()
{
document.getElementById("image4").src= "images/cart.jpg"
}

function changeimage5()
{
document.getElementById("image5").src= "images/cart.jpg"
}

function changeimage6()
{
document.getElementById("image6").src= "images/cart.jpg"
}

window.addEventListener('contextmenu', (event) => {
    console.log(event.button)
  })