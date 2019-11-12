let mainMenu = document.querySelector('.sidebar');
let mainMenu2 = document.querySelector('.sidebar');
let btnMenu = document.querySelector('#btnMenu');

let i = 0;

btnMenu.onclick = () => {
    i++;
    if(i%2 == 0) {
        mainMenu.parentNode.appendChild(mainMenu2);
    }
    if(i%2 != 0) {
        mainMenu.parentNode.removeChild(mainMenu);
    }
}

console.log(i);