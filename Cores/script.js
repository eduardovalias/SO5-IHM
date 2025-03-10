document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
  
    // Recupera o tema salvo no localStorage (se existir)
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.body.classList.add('theme-' + savedTheme);
    } else {
      // Define o tema padrão
      document.body.classList.add('theme-inatel');
    }
  
    // Alterna a visibilidade do menu de temas
    themeToggleBtn.addEventListener('click', function() {
      themeMenu.classList.toggle('hidden');
    });
  
    // Altera o tema conforme a opção selecionada
    themeOptions.forEach(option => {
      option.addEventListener('click', function() {
        const selectedTheme = this.getAttribute('data-theme');
        // Remove classes de tema existentes
        document.body.classList.remove('theme-inatel', 'theme-alternativo');
        // Aplica o novo tema
        document.body.classList.add('theme-' + selectedTheme);
        // Salva a escolha no localStorage
        localStorage.setItem('selectedTheme', selectedTheme);
        // Oculta o menu de temas
        themeMenu.classList.add('hidden');
      });
    });
  });
  