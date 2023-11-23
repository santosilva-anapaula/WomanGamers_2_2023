function confirmacao() {
    alert("Formulário enviado");
}

document.querySelector(".btn-menu").addEventListener('click', function(){
    document.querySelector("#menu-dropdown").classList.toggle("expanded");
});

// function abrirMenu() {
//     document.querySelector("#menu-dropdown").style.display = "block";
// }

// function fecharMenu() {
//     document.querySelector("#menu-dropdown").style.display = "none";
// }

let currentMargin = 0;
const marginStep = 100;

function updateMargin() {
    document.querySelector(".container-carrossel").style.marginLeft = `-${currentMargin}%`;
}

function proximoSlide() {
    currentMargin += marginStep;
    if (currentMargin > 200) {
        currentMargin = 0;
    }
    updateMargin();
}

function anteriorSlide() {
    currentMargin -= marginStep;
    if (currentMargin < 0) {
        currentMargin = 200;
    }
    updateMargin();
}

document.querySelector(".btn-proximo").addEventListener('click', proximoSlide);
document.querySelector(".btn-anterior").addEventListener('click', anteriorSlide);