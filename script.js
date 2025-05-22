// Objeto com todas as traduções
const translations = {
  en: {
      navSobre: "About",
      navProjetos: "Projects",
      navCurriculo: "Resume",
      heroTitle: "Applied Mathematics Student & Aspiring Quant",
      heroSubtitle: "Passionate about leveraging data to solve complex financial problems.",
      heroCTA: "View My Projects",
      // Textos para <main id="en"> (seções internas)
      aboutTitle: "About Me",
      aboutP1: "I'm an Applied Mathematics student at Universidade Federal Fluminense, passionate about Finance, Data Analysis, and Quantitative Methods.",
      aboutP2: "I'm currently exploring Python <i class='fab fa-python'></i>, Machine Learning <i class='fas fa-robot'></i>, and Algorithmic Trading. My goal is to [your goal/passion in English].",
      projectsTitle: "Projects",
      project1Title: "📊 Airbnb Data Analysis - Rome",
      project1Desc: "A deep dive into Airbnb listings in Rome, uncovering trends in pricing, availability, and host characteristics using Python, Pandas, and Seaborn.",
      projectLink: "View Project",
      projectCodeLink: "View Code", // Se você adicionar link para o código
      project2Title: "[Project 2 Title]", // Adicione a chave para o título do projeto 2
      project2Desc: "[Brief description of your second project in English.]", // Adicione a chave para a descrição do projeto 2
      curriculumTitle: "Resume",
      curriculumLink: "📄 Download Resume (PDF)",
      footerText: "&copy; 2024 Pedro Pinheiro. All rights reserved."
  },
  pt: {
      navSobre: "Sobre",
      navProjetos: "Projetos",
      navCurriculo: "Currículo",
      heroTitle: "Estudante de Matemática Aplicada & Aspirante a Quant",
      heroSubtitle: "Apaixonado por utilizar dados para resolver problemas financeiros complexos.",
      heroCTA: "Veja Meus Projetos",
      // Textos para <main id="pt"> (seções internas)
      aboutTitle: "Sobre Mim",
      aboutP1: "Sou estudante de Matemática Aplicada na Universidade Federal Fluminense, apaixonado por Finanças, Análise de Dados e Métodos Quantitativos.",
      aboutP2: "Atualmente, estou explorando Python <i class='fab fa-python'></i>, Machine Learning <i class='fas fa-robot'></i> e Trading Algorítmico. Meu objetivo é [seu objetivo/paixão em português].",
      projectsTitle: "Projetos",
      project1Title: "📊 Análise de Dados do Airbnb - Roma",
      project1Desc: "Uma análise aprofundada dos anúncios do Airbnb em Roma, descobrindo tendências em preços, disponibilidade e características dos anfitriões usando Python, Pandas e Seaborn.",
      projectLink: "Ver Projeto",
      projectCodeLink: "Ver Código", // Se você adicionar link para o código
      project2Title: "[Título do Projeto 2]", // Adicione a chave para o título do projeto 2
      project2Desc: "[Breve descrição do seu segundo projeto em português.]", // Adicione a chave para a descrição do projeto 2
      curriculumTitle: "Currículo",
      curriculumLink: "📄 Baixar Currículo (PDF)",
      footerText: "&copy; 2024 Pedro Pinheiro. Todos os direitos reservados."
  }
};

function switchLang(lang) {
  // Define qual <main> estará ativa
  document.querySelectorAll('.lang-section').forEach(section => section.classList.remove('active'));
  const activeMainSection = document.getElementById(lang);
  if (activeMainSection) {
      activeMainSection.classList.add('active');
  }

  // Atualiza todos os elementos com data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
          // Usar innerHTML permite renderizar tags HTML como <i> para ícones
          element.innerHTML = translations[lang][key];
      }
  });

  // Salva a preferência de idioma no localStorage
  localStorage.setItem('preferredLang', lang);

  // Atualiza o atributo lang da tag <html>
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Ao carregar a página, verifica se há um idioma salvo ou usa o padrão (ex: 'pt')
document.addEventListener('DOMContentLoaded', () => {
  const preferredLang = localStorage.getItem('preferredLang') || 'pt'; // Define 'pt' como padrão
  switchLang(preferredLang);

  // Adiciona active class ao botão do idioma correspondente
  updateActiveButton(preferredLang);

  // Faz os links de navegação rolarem suavemente para as seções
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          // Verifica se é um link interno (começa com #)
          if (href.startsWith('#')) {
              e.preventDefault();
              const targetId = href.substring(1); // Remove o '#'
              
              // Encontra o elemento alvo dentro da <main> ativa ou fora dela
              let targetElement = null;
              const activeMain = document.querySelector('main.lang-section.active');

              if (activeMain) {
                  targetElement = activeMain.querySelector(`#${targetId}-${document.documentElement.lang.startsWith('pt') ? 'pt' : 'en'}`);
                  if (!targetElement) { // Fallback para elementos fora da main (como a hero)
                       targetElement = document.getElementById(targetId);
                  }
              } else { // Se nenhuma main estiver ativa, procura globalmente (ex: hero)
                  targetElement = document.getElementById(targetId);
              }
              
              if (targetElement) {
                  targetElement.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
});

// Função para atualizar o botão de idioma ativo (opcional, para feedback visual)
function updateActiveButton(lang) {
  document.querySelectorAll('.language-switch button').forEach(button => {
      if (button.getAttribute('onclick').includes(`'${lang}'`)) {
          button.classList.add('active-lang-button'); // Adicione estilos para .active-lang-button no CSS
      } else {
          button.classList.remove('active-lang-button');
      }
  });
}

// Modifica a função switchLang para chamar updateActiveButton
function switchLang(lang) {
  // Define qual <main> estará ativa
  document.querySelectorAll('.lang-section').forEach(section => section.classList.remove('active'));
  const activeMainSection = document.getElementById(lang);
  if (activeMainSection) {
      activeMainSection.classList.add('active');
  }

  // Atualiza todos os elementos com data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
          element.innerHTML = translations[lang][key];
      }
  });

  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  updateActiveButton(lang); // Atualiza o botão ativo
}