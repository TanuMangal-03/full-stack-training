
  
// document.getElementById("btn").onclick = function(){
// document.getElementById("title").textContent = "welcome to javascript";  

//};

// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
//  box.oncliclk = function() {
//    box.computedStyleMap.backgroundColor = 'blue';
//  };
// }); 
// console.log(boxes);

// const box = document.querySelector('.box');
// // box.style.height = "100px";
// // box.style.width = " 100px";
// // box.style.backgroundcolor = "red";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function(event) {
//    console.log("hello");
// box.style.height = "400px";
// box.style.width = " 400px";
// box.style.backgroundcolor = "blue";
  
  
// });




// const box = document.querySelector('.box');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//  box.classList.add("big-box");
//  box.classList.remove("box");
// });


let isSmall = true;
const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
 if (isSmall == true ) {
    box.classList.add("big-box");       
    box.classList.remove("box");
    isSmall = false;
 } else {
    box.classList.add("box");       
    box.classList.remove("big-box");
    isSmall = true;
 }
});
   