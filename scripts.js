const glasses = document.querySelectorAll(".glass");

glasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
        let orderToFollow = index
        glasses.forEach((glass) => glass.classList.remove("filled"));
        while(orderToFollow >= 0){
            glasses[orderToFollow].classList.add("filled");
            orderToFollow--
        }
    })
})