let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'TV STAND',
        image: '1.jpg',
        price: 5999,
    },
    {
        id: 2,
        name: 'TELEVISION',
        image: '2.jpg',
        price: 3500,
    },
    {
        id: 3,
        name: 'MONITOR',
        image: '3.jpg',
        price: 2600,
    },
    {
        id: 4,
        name: 'SOUND SPEACKERS',
        image: '4.jpg',
        price: 900,
    },
    {
        id: 5,
        name: 'STAND',
        image: '5.jpg',
        price: 8000,
    },
    {
        id: 6,
        name: 'SPECIAL CHAIR',
        image: '6.jpg',
        price: 700,
    }
];

let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

// function addToCard(key) {
//     if(listCards[key] == null) {
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
function addToCart(key) { // Corrected function name
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1; // Increment quantity for existing product
    }
    reloadCard();
}


function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"></div>
                <div>${value.name}></div>
                <div>${value.price.toLocaleString()}></div>               
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if(quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



