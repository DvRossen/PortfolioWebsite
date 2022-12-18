window.addEventListener("load", init)


function init(){
 addEventListener('click',checkBoxClickHandler);
}

// yes I wrote this entire script for a singular joke
function checkBoxClickHandler(e){
let clickedItem = e.target;
if(clickedItem.classList.contains('funkyLilCheckbox')){
    window.alert("There is however JavaScript code :)");
}
}
