document.addEventListener('DOMContentLoaded', function() {
  /* =========================
     Código de Troca de Tema
     ========================= */
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

  /* =========================
     Código do Carrossel (Imagens e Vídeos)
     ========================= */
  const eventos = [
    {
      id: 1,
      title: 'Semana do Software 2025',
      date: '12/05',
      time: '10:00',
      location: 'Salão de Eventos',
      description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 2,
      title: 'Workshop de IoT',
      date: '12/01',
      time: '08:00',
      location: 'Laboratório CS&I',
      description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 3,
      title: 'Festa dos Alunos 2025',
      date: '18/05',
      time: '19:00',
      location: 'Área Esportiva do Inatel',
      description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 4,
      title: 'Feira de Oportunidades',
      date: '04/05',
      time: '10:00',
      location: 'Salão de Eventos',
      description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
  ];

  const carousel = document.querySelector('.carousel');

  // Insere dinamicamente os cards no carrossel
  eventos.forEach(event => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="info">
        <h3>${event.title}</h3>
        <p>${event.date} | ${event.time} - ${event.location}</p>
        <p>${event.description}</p>
      </div>
    `;
    carousel.appendChild(card);
  });

  let index = 0;

  // Atualiza a posição do carrossel
  function updateCarousel() {
    const totalCards = eventos.length;
    if (index < 0) index = totalCards - 1;
    if (index >= totalCards) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  // Eventos dos botões de navegação
  document.getElementById('prevBtn').addEventListener('click', () => {
    index--;
    updateCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    index++;
    updateCarousel();
  });
});
