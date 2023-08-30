const glasses = document.querySelectorAll(".glass");
let glassesOrder = 0;

glasses.forEach((glass) => {
    let order = glassesOrder;
    glass.addEventListener("click", () => {
        let orderToFollow = order
        glasses.forEach((glass) => glass.classList.remove("filled"));
        while(orderToFollow >= 0){
            glasses[orderToFollow].classList.add("filled");
            orderToFollow--
        }
    })
    glassesOrder++;
})