const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json'
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

let App = window.App;
let Truck = App.Truck;
let DataStore = App.DataStore;
let FormHandler = App.FormHandler;
let CheckList = App.CheckList;
let Validation = App.Validation;

/*
function setDetails(imageUrl, titleText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict'; 
    return thumbnail.getAttribute('data-image-url');
}

function sendDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault(); // stop browser from following href
        setDetailsFromThumb(thumb);
    }); 
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails); // convert Nodelist to array
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}
*/
let canvas = document.getElementById("priced");
let ctx = canvas.getContext("2d");
let price = 0;
(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-getty-order="form"]';
    const CHECKLIST_SELECTOR = '[data-getty-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json'
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList= App.CheckList
    let Validation = App.Validation;

    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', remoteDS);
    //find checklist that is being updated and create a checklist object
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    //when checkbox is clicked, call deliverorder on mytruck
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    
    console.log(formHandler);

})(window);


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