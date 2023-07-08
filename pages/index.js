// first we select the elements by their IDs

const menu_icon = document.querySelector('#menu-icon-container');

const menu = document.querySelector('#menu-list');



// this is the declaration of a menu_opening function 
// that adds and removes the class hidden, based on it being there already

const open_menu = ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        print('menu_opened');
    } else {
        menu.classList.add('hidden');
        print('menu_closed');
    }
}

// now we call the open_menu function when the menu icon is clicked
menu_icon.addEventListener('click', open_menu);


