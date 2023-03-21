let count = document.querySelector(".count");
console.log(count);
let n = +count.textContent;
console.log(n);

let active1 = document.querySelector(".active1");
console.log(active1);
let active2 = document.querySelector(".active2");
console.log(active2);
let active3 = document.querySelector(".active3");
console.log(active3);
let all = document.querySelector(".all");
console.log(all);
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");

active1.addEventListener("click", function () {
  active1.style.cssText = "background-color: var(--White);";
  count.textContent = `${--n}`;
  active1 = document.querySelector(".active1").disabled;
  dot1.style.cssText = "opacity: 0;";
});

active2.addEventListener("click", function () {
  active2.style.cssText = "background-color: var(--White);";
  count.textContent = `${--n}`;
  active2 = document.querySelector(".active2").disabled;
  dot2.style.cssText = "opacity: 0;";
});

active3.addEventListener("click", function () {
  active3.style.cssText = "background-color: var(--White);";
  count.textContent = `${--n}`;
  active3 = document.querySelector(".active3").disabled;
  dot3.style.cssText = "opacity: 0;";
});

all.addEventListener("click", function () {
  active1.style.cssText = "background-color: var(--White);";
  active1 = document.querySelector(".active1").disabled;
  active2.style.cssText = "background-color: var(--White);";
  active2 = document.querySelector(".active2").disabled;
  active3.style.cssText = "background-color: var(--White);";
  active3 = document.querySelector(".active3").disabled;
  dot1.style.cssText = "opacity: 0;";
  dot2.style.cssText = "opacity: 0;";
  dot3.style.cssText = "opacity: 0;";
  n = 0;
  count.textContent = `${n}`;
});
