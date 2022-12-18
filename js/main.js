window.addEventListener("load", init)


function init(){
 addEventListener('click',buttonClickHandler);
}


function buttonClickHandler(e){
let clickedItem = e.target;
if(clickedItem.classList.contains('funkyLilCheckbox')){
    window.alert("There is however JavaScript code :)");
}
}
