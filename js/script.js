var pElm = document.getElementById("counter");
var btnElm = document.getElementById("push");
var count = 0;
window.onload = function () {
    pElm.innerText = count.toString();
    btnElm.addEventListener("click", function () {
        count += 1;
        pElm.innerText = count.toString();
    }, false);
};
