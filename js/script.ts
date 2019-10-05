const pElm = document.getElementById("counter");
const btnElm = document.getElementById("push");
let count: number = 0;

window.onload = function() {
    pElm.innerText = count.toString();

    btnElm.addEventListener("click", function() {
        count += 1;
        pElm.innerText = count.toString();
    }, false);
}
