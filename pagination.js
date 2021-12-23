const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");
const p7 = document.querySelector(".p7");

console.log("Pagination controller connected");

p1.addEventListener("click", (event) => {
  // console.log("p1 clicked");
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.one").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p1.classList.add("active");
} )

p2.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.two").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p2.classList.add("active");

} )

p3.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.three").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p3.classList.add("active");
} )

p4.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.four").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p4.classList.add("active");
} )

p5.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.five").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p5.classList.add("active");
} )

p6.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.six").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p6.classList.add("active");
} )

p7.addEventListener("click", (event) => {
  console.log(document.querySelector("ol.komo > li.active"));
  document.querySelector("ol.komo > li.active").classList.remove("active");
  document.querySelector("ol.komo > li.seven").classList.add("active");
  document.querySelector("ul > li.active").classList.remove("active");
  p7.classList.add("active");
} )
