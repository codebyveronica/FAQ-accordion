const buttons = document.querySelectorAll("[data-btn-id=btn]");

function handleClick(e) {
    const btnClicked = e.target;
    const img = btnClicked.querySelectorAll("img");

    if(img.getAttribute("src") == "images/icon-plus.svg") {
        img.getAttribute("src", "images/icon-minus.svg");
    } else {
        img.getAttribute("src", "images/icon-plus.svg");
    }

    const btnParent = btnClicked.parentNode;
    const reply = btnParent.querySelector("[data-reply]")

    reply.classList.toggle("hide");
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})