document.querySelector('.menu-abrir').onclick = function () {
    document.documentElement.classList.add('menu-ativo');
}

document.querySelector('.menu-fechar').onclick = function () {
    document.documentElement.classList.remove('menu-ativo');
}

//essa função e caso o usuario click na parte cinza da tela então ele remove o menu.
document.documentElement.onclick = function (event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};