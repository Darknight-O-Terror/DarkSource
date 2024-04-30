// Get the popup container and product containers
const popupContainer = document.getElementById('popup-container');
const productContainers = document.querySelectorAll('.product-container');

// Add event listeners to each product container
productContainers.forEach((productContainer) => {
  productContainer.addEventListener('click', () => {
    // Get the product info from the data attributes
    const productName = productContainer.getAttribute('data-product-name');
    const productDescription = productContainer.getAttribute('data-product-description');
    const productPrice = productContainer.getAttribute('data-product-price');
    const productImage = productContainer.getAttribute('data-product-image');

    // Update the popup content
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-description').textContent = productDescription;
    document.getElementById('product-price').textContent = productPrice;
    document.getElementById('image-viewer').innerHTML = `<img src="${productImage}" alt="${productName}">`;

    // Show the popup
    popupContainer.style.display = 'flex';
  });
});

// Add an event listener to the popup container to close it when clicked outside
popupContainer.addEventListener('click', (e) => {
  if (e.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});
