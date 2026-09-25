window.addEventListener('scroll', function() {
  const indicador = document.getElementById('indicadorScroll');
  
  // Só executa a animação se a seta existir na página
  if (indicador) { 
    if (window.scrollY > 50) {
      indicador.classList.add('escondido');
    } else {
      indicador.classList.remove('escondido');
    }
  }
});