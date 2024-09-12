const buttons = document.querySelectorAll("#btn");
let isFirstImage = true;

function handleClick(e) {
    const btnClicked = e.target;
    const btnIconPlus = btnClicked.querySelectorAll("#icon")[0];
    const btnIconMinus = btnClicked.querySelectorAll("#icon")[1];
    const btnParent = btnClicked.closest("div");
    const reply = btnParent.querySelector("#reply");

    btnIconPlus.classList.toggle("hide");
    btnIconMinus.classList.toggle("hide");

    reply.classList.toggle("hide");
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});