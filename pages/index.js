// first we select the elements by their IDs

const menu_icon = document.querySelector('#menu-icon-container');

const menu = document.querySelector('#menu-list');



// this is the declaration of a menu_opening function 
// that adds and removes the class hidden, based on it being there already

const open_menu = ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        console.log('menu_opened');
    } else {
        menu.classList.add('hidden');
        console.log('menu_closed');
    }
}

// now we call the open_menu function when the menu icon is clicked
menu_icon.addEventListener('click', open_menu);


// this is also another way to implement it
// by directly creating an arrow function in the event listener method for the click event 

/*menu_icon.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
);
*/
