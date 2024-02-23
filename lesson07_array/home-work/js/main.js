let out = document.querySelector('.out');

let shopList = [
    {
        id: 1,
        name: 'apple',
        status: 'purchased',
        quantity: 3,
        price: 20,
        sum: 60,
    },
    {
        id: 2,
        name: 'banana',
        status: 'needBuy',
        quantity: 1,
        price: 30,
        sum: 30,
    },
    {
        id: 3,
        name: 'milk',
        status: 'purchased',
        quantity: 2,
        price: 40,
        sum: 80,
    },
    {
        id: 4,
        name: 'egs',
        status: 'purchased',
        quantity: 2,
        price: 15,
        sum: 30,
    },
    {
        id: 5,
        name: 'cheess',
        status: 'needBuy',
        quantity: 5,
        price: 5,
        sum: 25,
    },
    {
        id: 6,
        name: 'chips',
        status: 'needBuy',
        quantity: 3,
        price: 40,
        sum: 120,
    },

]


function renderList(data, isPurchased) {

    return `<li class="product__cart ${isPurchased ? 'purchased__item' : ''}">${data.name} ${data.sum} UAH 
    <button class="btn__buy" onclick="buyItem('${data.name}')">Buy</button>
    <button class="btn__delete" onclick="deleteItem('${data.name}')">Delete</button>
    </li>`;
}

function showList() {
    out.innerHTML = ""
    shopList.filter(shopping => shopping.status === 'purchased').map(shopping => {
        out.innerHTML += renderList(shopping, true)
    })
    shopList.filter(shopping => shopping.status !== 'purchased').map(shopping => {
        out.innerHTML += renderList(shopping, false)
    })
}
showList()

function buyItem(itemName) {
    const purchasedItem = shopList.find(shoping => shoping.name === itemName);
    purchasedItem.status = 'purchased';
    showList()
}

function deleteItem(itemName) {
    shopList = shopList.filter(shopping => shopping.name !== itemName)
    showList()
}