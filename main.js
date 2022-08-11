var menuListArray = ["Pizza Vegetariana", "Pizza de frango", "Pizza Portuguêsa", "Pizza Quatro Queijos", "Pizza de calabresa", "Pizza Marguerita"];
function getMenu(){
var htmldata = "";
menuListArray.sort();
for (var contador = 0; contador<menuListArray.length; contador++){
    htmldata = htmldata + menuListArray[contador]+"<br>";
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata = "";
var item=document.getElementById("addItem").value;
var imgTags = '<img src="https://i.postimg.cc/YjPPTVDF/pizzaImg.png" id="im1">';
menuListArray.sort();
for (var contador = 0; contador<menuListArray.length; contador++){
    htmldata = htmldata + imgTags + menuListArray[contador]+"<br>";
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){
var item = document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}