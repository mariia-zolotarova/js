const out = document.querySelector('.main');
const selectOut = document.querySelector('.sort-brand')
const btnSortBrand = document.querySelector('.btn__sort-brand')
const btnSortAll = document.querySelector('.btn__sort-all')


const cars = [
    {
        img: './img/tiguan.webp',
        brand: "volkswagen",
        model: "tiguan",
        age: 2018,
        price: 19000,
        length: 20,
    },
    {
        img: './img/tiguan.webp',
        brand: "volkswagen",
        model: "touran",
        age: 2009,
        price: 10000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "volkswagen",
        model: "passat",
        age: 2009,
        price: 7000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "mercedes",
        model: "E",
        age: 2009,
        price: 30000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "mercedes",
        model: "S",
        age: 2009,
        price: 38000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "audi",
        model: "A8",
        age: 2009,
        price: 28000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "audi",
        model: "Q7",
        age: 2009,
        price: 3900,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "mazda",
        model: "CX-5",
        age: 2009,
        price: 10000,
        length: 670,
    },
    {
        img: './img/tiguan.webp',
        brand: "mazda",
        model: "CX-9",
        age: 2009,
        price: 10000,
        length: 670,
    },
]

// console.log(cars[0]);
// console.log(cars[cars.length - 1]);
// console.log(cars[0].img);

// for(let i = 0; i< cars.length; i++){
//     console.log(cars[i]);
// }

// cars.map((item, index, array) => {
//     console.log(index);
//     console.log(item);
//     console.log(array);
// });

// cars.map(car => console.log(car));

// cars.map(car => {
//     if (car.brand == 'volkswagen') { console.log(car.brand) }
// });


function renderCars(data) {
    return `
    <div class="card">
        <img src="${data.img}" alt="${data.brand} ${data.model}">
        <h2 class="card__title"> ${data.model} ${data.brand} ${data.age}</h2>
        <h5 class="card__price"> ${data.price} ${data.length} ${data.age}</h5>
    </div>
    `
}

function showAll() {
    out.innerHTML = ''
    cars.map(car => {
        out.innerHTML += renderCars(car)
    })
}
showAll()

// cars.map(car => {
//     out.innerHTML += renderCars(car)
// });

// cars.map(car => {
//     selectOut.innerHTML += `
//     <option value="${car.brand}">${car.brand}</option>
//     `
// });

function renderOption() {
    let arr2 = []
    cars.map(item => {
        arr2.push(item.brand)
    })
    let newArr = new Set(arr2)


    // cars.map(car => {
    //     selectOut.innerHTML += `
    //      <option value="${car.brand}"> ${car.brand} </option>
    //     `
    // })
}
renderOption()

btnSortBrand.onclick = () => {
    out.innerHTML = "";
    cars.map(car => {
        if (selectOut.value == car.brand) {
            out.innerHTML += renderCars(car)
        }
        else if (selectOut.value == "all") {
            out.innerHTML += renderCars(car)
        }
    });
}

// btnSortAll.onclick = showAll