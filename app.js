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
    name: 'PRODUCT NAME 1',
    image: '1 (2).PNG',
    price: 12000
  },
  {
    id: 2,
    name: 'PRODUCT NAME 1',
    image: '2 (2).PNG',
    price: 20000
  },
  {
    id: 3,
    name: 'PRODUCT NAME 1',
    image: '3 (2).PNG',
    price: 14500
  },
  {
    id: 4,
    name: 'PRODUCT NAME 1',
    image: '4 (2).PNG',
    price: 15000
  },
  {
    id: 5,
    name: 'PRODUCT NAME 1',
    image: '5 (1).PNG',
    price: 25000
  },
  {
    id: 6,
    name: 'PRODUCT NAME 1',
    image: '6 (1).PNG',
    price: 17000
  },
];
let listCards = [];
function initApp(){
  products.forEach((value,key)=>{
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <img src="image/${value.image}"/>
    `;
    list.appendChild(newDiv);
  })
}
initApp();