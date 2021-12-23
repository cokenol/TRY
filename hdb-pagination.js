const p1 = document.querySelectorAll(".page-item");
// const p1 = document.querySelector(".p1");
// const p2 = document.querySelector(".p2");
// const p3 = document.querySelector(".p3");
// const p4 = document.querySelector(".p4");
// const p5 = document.querySelector(".p5");
// const p6 = document.querySelector(".p6");

console.log("Pagination controller connected");

// console.log(p1);

p1.forEach( (list) => {
  list.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    document.querySelector(".active").classList.remove("active");
    event.currentTarget.classList.add("active");
  })
})

// const removeActive = () => {
//   document.querySelector(".active").classList.remove("active");
// }

// p1.addEventListener("click", (event) => {
//   removeActive();
//   p1.classList.add("active");
// })
// p2.addEventListener("click", (event) => {
//   removeActive();
//   p2.classList.add("active");
// })
// p3.addEventListener("click", (event) => {
//   removeActive();
//   p3.classList.add("active");
// })

// p4.addEventListener("click", (event) => {
//   removeActive();
//   p4.classList.add("active");
// })

// p5.addEventListener("click", (event) => {
//   removeActive();
//   p5.classList.add("active");
// })

// p6.addEventListener("click", (event) => {
//   removeActive();
//   p6.classList.add("active");
// })
