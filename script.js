document.getElementById('open-card-btn').addEventListener('click', function() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.remove('hidden');

    setTimeout(() => {
        document.querySelector('.card').style.transform = 'rotateX(-180deg)';
    }, 100); // Pequeño retraso para asegurar que la carta aparezca antes de girar
});
