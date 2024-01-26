// Sample product data (to simulate fetched data)
const productsData = [
  { 
    image: 'product1.jpg',
    name: 'Product 1',
    price: '$19.99',
    description: 'Description of Product 1',
    availability: 'In Stock'
  },

  { 
    image: 'product1.jpg',
    name: 'Product 1',
    price: '$19.99',
    description: 'Description of Product 1',
    availability: 'In Stock'
  },

  { 
    image: 'product1.jpg',
    name: 'Product 1',
    price: '$19.99',
    description: 'Description of Product 1',
    availability: 'In Stock'
  },

  { 
    image: 'product1.jpg',
    name: 'Product 1',
    price: '$19.99',
    description: 'Description of Product 1',
    availability: 'In Stock'
  },

  { 
    image: 'product1.jpg',
    name: 'Product 1',
    price: '$19.99',
    description: 'Description of Product 1',
    availability: 'In Stock'
  },
  // Add more products similarly...
];

// Function to render products dynamically
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  productsData.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Creating HTML structure for each product
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>${product.description}</p>
      <p>Availability: ${product.availability}</p>

    `;

    productElement.onclick = function() {
      // Redirect to the product page (replace 'product.html' with your desired page)
      window.location.href = 'product.html';
    };

    productGrid.appendChild(productElement);
  });
}

// Call the function to render products after the document has been loaded
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
});







function redirectToLoginpage() {
  // Redirect to a new page (replace 'homepage.html' with your desired page)
  window.location.href = 'login.html';
}


function redirectToSigninpage() {
  // Redirect to a new page (replace 'homepage.html' with your desired page)
  window.location.href = 'signin.html';
}




