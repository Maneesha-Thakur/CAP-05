// Fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products on the DOM
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Handle sorting of products
function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'price-low-to-high':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-to-low':
            products.sort((a, b) => b.price - a.price);
            break;
        default:
            // Default sorting (original order)
            break;
    }
    return products;
}

// Handle search functionality
function searchProducts(products, searchQuery) {
    return products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

// Event listeners for search and sort
document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    displayProducts(products);

    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value;
        const sortedProducts = sortProducts(products, sortSelect.value);
        const filteredProducts = searchProducts(sortedProducts, searchQuery);
        displayProducts(filteredProducts);
    });

    sortSelect.addEventListener('change', () => {
        const searchQuery = searchInput.value;
        const sortedProducts = sortProducts(products, sortSelect.value);
        const filteredProducts = searchProducts(sortedProducts, searchQuery);
        displayProducts(filteredProducts);
    });
});
