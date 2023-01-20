window.addEventListener("load", init)
window.addEventListener( "load", checkTimeHours);

// console.log("main")
function init(){
 addEventListener('click',checkBoxClickHandler);

// console.log("init")
}

// yes I wrote this entire script for a singular joke/ checkbox pop-up
let boxClicked = false;
function checkBoxClickHandler(e) {
        let clickedItem = e.target;
        if (clickedItem.id.includes("funkyLilCheckbox")) {
            boxClicked = !boxClicked;
          if(boxClicked){  window.alert("data stolen :p");}
        }
    console.log(boxClicked);
}

function checkTimeHours(){
    let date = new Date();
    let ToD = date.getHours();
    console.log(ToD);
}
