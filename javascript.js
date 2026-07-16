const toggler = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-links");

console.log(toggler);
console.log(menu);

if (toggler && menu) {
    toggler.addEventListener("click", () => {
        console.log("Clique!");
        toggler.classList.toggle("active");
        menu.classList.toggle("active");
    });
}