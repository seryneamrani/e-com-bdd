// Sample wishlist product data (to simulate fetched data)
const basketProducts = [
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
  function renderBasketProducts() {
    const basketGrid = document.getElementById('basketGrid');
    basketGrid.innerHTML = ''; // Clear the existing content
  
    basketProducts.forEach((product, index) => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      // Creating HTML structure for each basket product
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Price: ${product.price}</p>
        <p>${product.description}</p>
        <p>Availability: ${product.availability}</p>
        <button class="delete-button" onclick="deleteProduct(${index})">Delete</button>
      `;
  
      basketGrid.appendChild(productElement);
    });
  }
   
  function deleteProduct(index) {
    basketProducts.splice(index, 1); // Remove the product at the specified index
    renderBasketProducts(); // Re-render the basket after deletion
  }
   

  // Call the function to render wishlist products after the document has been loaded
  document.addEventListener('DOMContentLoaded', function () {
    renderBasketProducts();
  });




  function redirectToLoginpage() {
    // Redirect to a new page (replace 'homepage.html' with your desired page)
    window.location.href = 'login.html';
  }