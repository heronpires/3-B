// tudo isso que vc vai ler abaixo eu pedi pro chatgpt fazer, não pretendo estudar javascript agora, então não leve tão a serio esse codigo
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