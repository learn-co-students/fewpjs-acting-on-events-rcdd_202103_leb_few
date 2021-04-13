// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}



document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});




// document.addEventListener("keydown", function (e) {
//   let leftNumbers = dodger.style.left.replace("px","");
//   let left = parseInt(leftNumbers,10);
//   if (e.key === "ArrowLeft"){
//     if (left>0){
//       dodger.style.left = `${left - 1}px`;
//     }
//   }
// })





// document.addEventListener("keydown", function (f) {
//   let rightNumbers = dodger.style.left.replace("px","");
//   let right = parseInt(rightNumbers,10);
//   if (f.key === "ArrowRight"){
//     if (left<360){
//       dodger.style.left = `${left + 1}px`;
//     }
//   }
// })