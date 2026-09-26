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

// =========================================================================
// MODAL DO VÍDEO (Página do Drone)
// =========================================================================
const btnAbrir = document.getElementById('btnAbrirVideo');

// Só adiciona os eventos se o botão do vídeo existir nesta página
if (btnAbrir) {
  const modal = document.getElementById('modalVideo');
  const btnFechar = document.getElementById('btnFecharVideo');
  const video = document.getElementById('videoDrone');

  // Abre o popup ao clicar em "ASSISTIR DEMONSTRAÇÃO"
  btnAbrir.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
  });

  // Função para fechar o popup e pausar o vídeo
  function fecharModal() {
    modal.style.display = 'none';
    video.pause(); 
  }

  // Fecha ao clicar no 'X'
  btnFechar.addEventListener('click', fecharModal);

  // Fecha ao clicar no fundo escuro fora do vídeo
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  });
}