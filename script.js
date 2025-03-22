// meu amigo Henzo me ajudou com o codigo java.
window.onload = function () {
    // Defina as imagens que você quer alternar
    let imagens = [
        './img/kendrick.jpg', // imagem 1
        './img/kendrick2.jpg', // imagem 2
        './img/kendrick3.png'  // imagem 3
    ];

    // Gera um índice aleatório para escolher uma das imagens
    let randomIndex = Math.floor(Math.random() * imagens.length);

    // Aplica a imagem de fundo ao título
    let titulo = document.getElementById('titulo');
    titulo.style.backgroundImage = 'url("' + imagens[randomIndex] + '")';
};
// aprendi no alura (não está tão bom assim mas pelo menos tem uma animação)
ScrollReveal().reveal('.animacao', { delay: 300 });