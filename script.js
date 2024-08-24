function selectMusic(element) {
    // Remove o destaque da música anteriormente selecionada
    let selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    
    // Adiciona o destaque à música clicada
    element.classList.add('selected');
}
