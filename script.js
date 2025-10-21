// responsividade da nav bar
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.navbar-links');

    toggler.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Adiciona/remove a classe 'active' nos links
        toggler.classList.toggle('active'); // Adiciona/remove a classe 'active' no toggler para a animação
        const expanded = toggler.getAttribute('aria-expanded') === 'true' || false;
        toggler.setAttribute('aria-expanded', !expanded); // Atualiza o atributo ARIA
    });
});

//imagens automaticas

document.addEventListener('DOMContentLoaded', function() {
    const images = [
    'imagens/divisoria 2.jpg',
    'imagens/divisoria 3.jpg',

       
        // Adicione todos os caminhos das suas imagens
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('background-image-slider');
    const intervalTime = 4500; // Tempo em milissegundos (4 segundos para dar tempo de ler)

    function changeImage() {
        // Incrementa o índice e volta ao início se chegar ao final
        currentIndex = (currentIndex + 1) % images.length;
        
        // Aplica a nova imagem
        imageElement.src = images[currentIndex];
    }

    // Inicia a troca de imagens em um intervalo regular
    setInterval(changeImage, intervalTime);
});