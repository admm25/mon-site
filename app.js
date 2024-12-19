const products = [
    { id: 1, name: 'Airpods 2', price: 20, img: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Airpods 3', price: 30, img: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Airpods Pro 3', price: 40, img: 'https://via.placeholder.com/200' }
];

const productContainer = document.getElementById('products');

// Afficher les produits
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>€${product.price}</p>
        <button onclick="addToCart(${product.id})">Ajouter au panier</button>
    `;
    productContainer.appendChild(productElement);
});

// Ajouter au panier
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} ajouté au panier`);
    updateCart();
}

// Mettre à jour le nombre d'articles dans le panier
function updateCart() {
    const cartCount = cart.length;
    const cartLink = document.querySelector('header nav a[href="cart.html"]');
    cartLink.textContent = `Panier (${cartCount})`;
}
