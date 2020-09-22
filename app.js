// variables

console.log('gsldfjsdf');

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const proudactDom = document.querySelector('.proudact-center');

//cart
let cart = [];

//getting products
class Products {
    async getProducts() {
        console.log('dgfgfd');
        try {
            console.log('gdfgdfg');
            let result = await fetch("products.json");
            let data = await result.json();
            return data;

        } catch (error) {
            console.log(error);
        }
    }

}

//display Products
class UI {

}

//the kicking statred
document.addEventListener("DOMContentLoaded", () => {
    console.log('sdfsdf');
    const ui = new UI();
    const products = new Products();
    products.getProducts().then(data => console.log(data));


});