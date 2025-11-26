

$(document).ready(function() {
    
    // Armazena todos os cartões e pontos
    const $testimonials = $('.testimonial-card');
    const $dots = $('.dot');
    const totalSlides = $testimonials.length;
    let currentIndex = 0;

    // --- Funções de Lógica do Carrossel ---

    /**
     * Mostra o slide correspondente ao índice.
     * @param {number} index O índice do slide a ser mostrado (0 a N-1).
     */
    function showSlide(index) {
        // Garante que o índice esteja dentro dos limites
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        currentIndex = index;

        // 1. Esconde todos os cartões e mostra apenas o atual
        $testimonials.hide();
        $($testimonials[currentIndex]).fadeIn(500); // Efeito suave de fade

        // 2. Atualiza os pontos de navegação
        $dots.removeClass('active');
        $($dots[currentIndex]).addClass('active');
    }

    /**
     * Avança para o próximo slide.
     */
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // --- Inicialização e Event Listeners ---

    // 1. Inicialmente, exibe apenas o primeiro slide
    if (totalSlides > 0) {
        // Esconde todos exceto o primeiro para garantir que o showSlide funcione corretamente
        $testimonials.slice(1).hide();
        $dots.first().addClass('active');
    }
    
    // 2. Lógica de navegação pelos pontos
    $dots.on('click', function() {
        // Encontra o índice do ponto clicado (usando o índice no conjunto de dots)
        const dotIndex = $dots.index(this);
        
        // Se o slide for diferente do atual, mostre-o
        if (dotIndex !== currentIndex) {
            showSlide(dotIndex);
        }
    });

    // 3. Navegação automática
    const autoSlideInterval = setInterval(nextSlide, 7000); // Troca a cada 7 segundos
    
    // Inicializa o primeiro slide explicitamente para garantir o estado correto
    showSlide(currentIndex);
});