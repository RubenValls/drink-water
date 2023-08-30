const glasses = document.querySelectorAll(".glass");

glasses.forEach((glass) => {
    glass.addEventListener("click", () => {
        if(glass.classList.contains("filled")){
            glass.classList.remove("filled");
        }else{
            glass.classList.add("filled");
        }
    })
})