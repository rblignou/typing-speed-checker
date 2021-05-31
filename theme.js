const toggleSwitch = document.querySelector('input[type=checkbox]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');

function changeImageMode(color){
    image1.src = `./img/${color}.svg`;
}

function darkMode(){
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    changeImageMode('dark');
}

function lightMode(){
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    changeImageMode('light');
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark')
    {
        toggleSwitch.checked = true;
        darkMode();
    }
}