// Your code here
// function moveDodgerLeft() {
//   let dodger = document.getElementById("dodger");
//   document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft" ) {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     left > 0;
//     dodger.style.left = `${left - 1}px`;
//
//   } else if (e.key === "ArrowRight") {
//     dodger.style.left = `${left + 1}px`;
//   }
// })
// }
function moveDodgerLeft() {
  let dodger = document.getElementById("dodger");
  let leftNumbers = dodger.style.left.replace("px", "");
 let left = parseInt(leftNumbers, 10);

 if (left > 0) {
   dodger.style.left = `${left - 1}px`;
 }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  let dodger = document.getElementById("dodger");
  let leftNumbers = dodger.style.left.replace("px", "");
 let left = parseInt(leftNumbers, 10);

 if (left > 180 ) {
   dodger.style.left = `${left + 1}px`;
 }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
