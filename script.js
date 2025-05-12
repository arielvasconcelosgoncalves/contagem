// Defina a data e hora do evento para o qual você está fazendo a contagem regressiva
const countDownDate = new Date("May 23, 2025 19:30:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calcula o tempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com o id "countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se a contagem regressiva terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Ela Chegou!";
    }
}, 1000);

// Lista de imagens para o fundo
const images = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    './image4.jpg',
    './image5.jpg' // Adicione mais imagens se necessário
];

// Inicializa o índice da imagem
let currentImageIndex = 0;

// Função para mudar a imagem de fundo
function changeBackgroundImage() {
    // Seleciona o elemento que terá a imagem de fundo alterada
    const container = document.querySelector('.container');
    
    // Define a nova imagem de fundo
    container.style.backgroundImage = `url(${images[currentImageIndex]})`;

    // Atualiza o índice para a próxima imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Chama a função pela primeira vez
changeBackgroundImage();

// Altera a imagem a cada 3 segundos (3000 milissegundos)
setInterval(changeBackgroundImage, 3000);
