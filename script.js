const prev = document.getElementById("prev");
const next = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".number");
const list = document.querySelector(".list");

let active = 0;
const total = items.length;
let time;


function update(direction){
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");


    if (direction >0){
        active = active + 1;

        if (active === total){
            active = 0;
        }


    } else if (direction <0){
        active = active - 1;
        if (active < 0){
            active = total - 1;
        }

        
    }

    items[active].classList.add("active");
    dots[active].classList.add("active");

    numberIndicator.textContent = String(active + 1).padStart(2,'0')

}
clearInterval(time);
time = setInterval(() => {
    update(1);
}, 10000)


prev.addEventListener("click", () => {
    update(-1);
   
});
next.addEventListener("click", () => {
    update(1);

});
