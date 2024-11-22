function filterButton(){
    // Seleciona o botão de filtro e o menu de filtros
const filterButton = document.querySelector('.filter-btn');
const filterMenu = document.querySelector('.filter-menu');
const arrowIcon = document.getElementById('arrow-icon');

    if (filterMenu.style.display === 'block') {
        // Se estiver visível, esconde
        filterMenu.style.display = 'none';
        // Alterna a seta para cima
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        // Se não estiver visível, mostra
        filterMenu.style.display = 'block';
        // Alterna a seta para baixo
        arrowIcon.style.transform = 'rotate(180deg)';
    }
}