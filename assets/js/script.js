// transformando o checkbox em uma constante
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//constante que vai armazenar o thema pré salvo
const currentTheme = localStorage.getItem('theme');

//constante para o nome do tema
const themeName = document.getElementById('theme-text');

// checagem se já tem algum tema preferencial para o usuário
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeName.innerText = "Enable Light Mode!";
    }
}

// função para mudar o tema e salvar as preferencias para proximos acessos
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeName.innerText = "Enable Light Mode!";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); 
        themeName.innerText = "Enable Dark Mode!";
    }    
}

// evento do botão para trocar o tema
toggleSwitch.addEventListener('change', switchTheme, false);