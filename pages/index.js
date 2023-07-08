// first we select the elements by their IDs

const menu_icon = document.querySelector('#menu-icon-container');

const menu = document.querySelector('#menu-list');


// this is the declaration of a menu_opening function 
// that adds and removes the class hidden, based on it being there already

const open_menu = ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}


// this is al

/*menu_icon.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
);
*/


menu_icon.addEventListener('click', open_menu);