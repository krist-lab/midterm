const productData = [
    {
      name: "Boho Rattan Lamp",
      price: "$79",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Office Storage Table",
      price: "$129",
      image: "https://images.unsplash.com/photo-1499914485622-a88fac53632e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Orbit Pendant",
      price: "$159",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cozy Armchair",
      price: "$229",
      image: "https://images.unsplash.com/photo-1503389152951-9c3d9700af1c?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dining Table",
      price: "$349",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sunny Armchair",
      price: "$199",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const productGrid = document.getElementById('productGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  let productsShown = 0;
  const PRODUCTS_PER_LOAD = 6;
  
  function showProducts() {
    for (let i = productsShown; i < Math.min(productsShown + PRODUCTS_PER_LOAD, productData.length); i++) {
      const p = productData[i];
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product__name">${p.name}</div>
        <div class="product__price">${p.price}</div>
        <button class="btn btn--outline">Add to Cart</button>
      `;
      productGrid.appendChild(div);
    }
    productsShown += PRODUCTS_PER_LOAD;
    if (productsShown >= productData.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
  
  loadMoreBtn.addEventListener('click', showProducts);
  
  document.addEventListener('DOMContentLoaded', () => {
    showProducts();
  });