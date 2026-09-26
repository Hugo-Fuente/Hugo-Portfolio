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

  // Abre o popup ao clicar em "ASSISTIR DEMONSTRAÇÃO"
  btnAbrir.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'flex';
  });

  // Função para fechar o popup e PARAR o vídeo do YouTube
  function fecharModal() {
    modal.style.display = 'none';
    
    // O truque: encontra o iframe e reinicia a sua fonte para cortar o som
    const iframe = modal.querySelector('iframe');
    if (iframe) {
      const urlAtual = iframe.src;
      iframe.src = urlAtual; 
    }
  }

  // Fecha ao clicar nos botões do terminal (— □ ×)
  btnFechar.addEventListener('click', fecharModal);

  // Fecha ao clicar na zona escura fora do vídeo
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  });
}