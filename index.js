//DOM
const boxes = document.querySelectorAll(".box"),
    image = document.querySelector(".image");


// loop

boxes.forEach(box => {
    box.addEventListener("dragover", e =>{
        e.preventDefault();
        box.classList.add("hovered");
    });

    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });
    box.addEventListener("drop",() => {
        box.appendChild(image);
        box.addEventListener.remove("hovered");
    })
});

