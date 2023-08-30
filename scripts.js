const glasses = document.querySelectorAll(".glass");
const remainContainer = document.querySelector(".remained-container");
const percentageContainer = document.querySelector(".percentage-container");
let litersRemaining = document.querySelector("#liters");
let percentageFilled = document.querySelector("#percentage");

glasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
        let orderToFollow = index
        let percentage = ((index + 1)/glasses.length) * 100;
        
        glasses.forEach((glass) => glass.classList.remove("filled"));
        
        while(orderToFollow >= 0){
            glasses[orderToFollow].classList.add("filled");
            orderToFollow--;
        }

        percentageContainer.style.visibility = "visible";
        remainContainer.style.height = `${100 - percentage}%`;
        percentageContainer.style.height = `${percentage}%`;
        litersRemaining.textContent = 2 - (0.250 * (index + 1));
        percentageFilled.textContent = percentage;
    })
})