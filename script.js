const buttons = document.querySelectorAll("[data-btn-id=btn]");

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

function handleClick(e) {
    const btnClicked = e.target;
    const img = btnClicked.querySelector("img");

    if(img.getAttribute("src") == "images/icon-plus.svg"){
        img.setAttribute("src","images/icon-minus.svg")
    } else {
        img.setAttribute("src","images/icon-plus.svg")
    }

    const btnParent = btnClicked.parentNode;
    const reply = btnParent.querySelector("[data-reply]")

    reply.classList.toggle("hide");
}