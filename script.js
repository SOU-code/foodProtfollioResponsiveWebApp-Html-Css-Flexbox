let navbar = document.querySelectorAll(".menu-items>li>a");
let cell = document.getElementsByTagName("section");
let n = navbar.length;
const srclink = window.location.href;
let l1 = srclink.length;
for (let i = 0; i < n; i++) {
  navbar[i].addEventListener("click", function () {
    let cellCor = cell[i].getBoundingClientRect();
    let target = cellCor.top;
    let curr = 0;
    if (target < 0) {
      let scroll = setInterval(function () {
        if (curr <= target) {
          clearInterval(scroll);
          return;
        }
        curr -= 20;
        window.scrollBy(0, -20);
      }, 20);
    } else {
      let scroll = setInterval(function () {
        if (curr >= target) {
          clearInterval(scroll);
          return;
        }
        curr += 20;
        window.scrollBy(0, 20);
      }, 20);
    }
  });
}
