'use strict';

const myShoppingList = document.getElementById('myList');
const inputItems = document.querySelectorAll('input');
const myList = document.createElement('ul');
myList.innerHTML = "My Shopping List:";
myShoppingList.appendChild(myList); 

function addItemsToList(inputItems, myList) {
    inputItems.forEach(function (item) {
        const itemName = item.value;
        const itemList = document.createElement('li');
        itemList.innerHTML = itemName;
        myList.appendChild(itemList);
    });
};

generateList.addEventListener('click', function (event) {
    event.preventDefault();

    addItemsToList(inputItems, myList);
});

