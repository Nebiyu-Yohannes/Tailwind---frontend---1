// first we select the elements by their IDs

const menu_icon = document.querySelector('#menu-icon-container');

const menu = document.querySelector('#menu-list');

const open_menu = ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}


menu_icon.addEventListener('click', )