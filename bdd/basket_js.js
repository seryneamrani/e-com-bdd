// Sample wishlist product data (to simulate fetched data)
const wishlistProducts = [
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
    // Add more wishlist products similarly...
  ];
  
  // Function to render wishlist products dynamically
  function renderWishlistProducts() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    wishlistProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      // Creating HTML structure for each wishlist product
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Price: ${product.price}</p>
        <p>${product.description}</p>
        <p>Availability: ${product.availability}</p>
      `;
  
      wishlistGrid.appendChild(productElement);
    });
  }
  
  // Call the function to render wishlist products after the document has been loaded
  document.addEventListener('DOMContentLoaded', function() {
    renderWishlistProducts();
  });
  



  function redirectToLoginpage() {
    // Redirect to a new page (replace 'homepage.html' with your desired page)
    window.location.href = 'login.html';
  }