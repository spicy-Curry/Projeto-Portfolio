let lampada = document.getElementById("lampada");
let p;

function ligar() {
    lampada.setAttribute("src", "imagens/luzLigada.gif.png");
    lampada.style.background = "wheat";
    lampada.style.border = "5px solid wheat";
    lampada.style.borderRadius = "50px";
}

function apagar() {
    lampada.setAttribute("src", "imagens/luzDesligada.gif.png");
    lampada.style.border = "none";
    lampada.style.background = "none";
}

function sumir() {
    lampada.hidden = true;
}

function aparecer() {
    lampada.hidden = false;
}

function piscar() {
    if (lampada.getAttribute("src") == "imagens/luzDesligada.gif.png")
        ligar();
    else if (lampada.getAttribute("src") == "imagens/luzLigada.gif.png")
        apagar();
}

function piscarAuto() {
    p = setInterval(piscar, 500);
}

function parar() {
    clearInterval(p);
}

function moverD() {
    if (lampada.style.transform == "none")
        lampada.style.transform = "translate(100px, 0px)";
    else if (lampada.style.transform != "none")
        lampada.style.transform = "none";
}

function moverE() {
    if (lampada.style.transform == "none")
        lampada.style.transform = "translate(-100px, 0px)";
    else if (lampada.style.transform != "none")
        lampada.style.transform = "none";
}
