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
const productDom = document.querySelector('.products-center');

//cart
let cart = [];

//getting products
class Products {
    async getProducts() {

        try {

            let result = await fetch("products.json");
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const id = item.sys.id;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }

}

//display Products
class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
            <!-- sigle proudct -->
            <article class="product">
                <div class="img-container">
                    <img src="${product.image}" alt="" srcset="${product.image}" class="product-img">
                    <button class="bag-btn" data-id="1"><i class="fas fa-shopping-cart"></i>add to bag</button>
                </div>
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
            </article>
            <!-- sigle proudct ends-->
            `
            productDom.innerHTML = result;
        });

    }
}

//the kicking statred
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    products.getProducts().then(products => ui.displayProducts(products));


});