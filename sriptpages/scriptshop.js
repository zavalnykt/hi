var burger = document.getElementById("burger");
var menu = document.getElementById("side-menu");
var closeIcon = document.getElementById("close-icon"); 

burger.addEventListener("click", function() {
    this.classList.toggle("active");
    menu.classList.toggle("show");
});
function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("show");
}
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        closeMenu();
    }
});
closeIcon.addEventListener("click", function () {
    closeMenu();
});

const productsPage1 = [
    { name: "Котяче ліжко", price: 1230, image: "../images/productS/catBed.webp", brand: "Trixie", category: "Ліжка" },
    { name: "Миска для котів", price: 120, image: "../images/productS/catBowl.webp", brand: "Trixie", category: "Миски" },
    { name: "Миска для котів", price: 110, image: "../images/productS/catBowl2.webp", brand: "Moderna", category: "Миски" },
    { name: "Корм для котів", price: 540, image: "../images/productS/catFood.webp", brand: "Petkit", category: "Корм" },
    { name: "Корм для собак", price: 620, image: "../images/productS/corm.webp", brand: "Petkit", category: "Корм" },
    { name: "Ліжко для собак", price: 1560, image: "../images/productS/dogBed.webp", brand: "Trixie", category: "Ліжка" },
    { name: "Миска для собак", price: 130, image: "../images/productS/dogBowl.webp", brand: "Petkit", category: "Миски" },
    { name: "Миска для собак", price: 125, image: "../images/productS/DogBowl2.webp", brand: "Ferplast", category: "Миски" },
    { name: "Повідок для собак", price: 250, image: "../images/productS/dogLeach.webp", brand: "Hunter", category: "Аксесуари" },
    { name: "Ліжко для хом'яків", price: 340, image: "../images/productS/hamsterBed.webp", brand: "Trixie", category: "Ліжка" },
    { name: "Миска для хом'яків", price: 90, image: "../images/productS/HamsterBowl.webp", brand: "Ferplast", category: "Миски" },
    { name: "Корм для хом'яків", price: 450, image: "../images/productS/HamsterFood.webp", brand: "Vitakraft", category: "Корм" }
];

const productsPage2 = [
    { name: "Ліжко для попугая", price: 450, image: "../images/productS/parrotBed.webp", brand: "Trixie", category: "Ліжка" },
    { name: "Корм для попугая", price: 340, image: "../images/productS/parrotFood.webp", brand: "Moderna", category: "Корм" },
    { name: "Переноска для тварин", price: 1900, image: "../images/productS/petCarrier.webp", brand: "Ferplast", category: "Аксесуари" },
    { name: "Миска для попугая", price: 330, image: "../images/productS/parrotBowl.webp", brand: "Ferplast", category: "Миски" },
    { name: "Корм для кролика", price: 410, image: "../images/productS/rabbirFood.webp", brand: "Vitakraft", category: "Корм" },
    { name: "Ліжко для кролика", price: 560, image: "../images/productS/rabbitBed.webp", brand: "Trixie", category: "Ліжка" },
    { name: "Миска для кролика", price: 70, image: "../images/productS/RabbitBowl.webp", brand: "Ferplast", category: "Миски" },
    { name: "Акваріум", price: 2560, image: "../images/productS/turtleBed.webp", brand: "Tetra", category: "Акваріум" },
    { name: "Миска для черепах", price: 50, image: "../images/productS/turtleBowk.webp", brand: "Ferplast", category: "Миски" },
    { name: "Корм для черепах", price: 230, image: "../images/productS/turtleFood.webp", brand: "Vitakraft", category: "Корм" },
    { name: "Іграшки", price: 150, image: "../images/productS/toys1.webp", brand: "Trixie", category: "Іграшки" },
    { name: "Іграшки", price: 124, image: "../images/productS/toys2.webp", brand: "Trixie", category: "Іграшки" }
];

function loadProducts(page) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';


    const productsToShow = page === 1 ? productsPage1 : productsPage2;


    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-carD');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="im">
            <h4>${product.name}</h4>
            <p>₴${product.price}</p>
            <button class="wishlist-btn" data-product-name="${product.name}">
                <span class="heart-icon"></span> 
            </button>
        `;
        productsContainer.appendChild(productCard);
    });
}


document.getElementById('productsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('wishlist-btn')) {
        const productName = event.target.getAttribute('data-product-name');
        const heartIcon = event.target.querySelector('.heart-icon');
        if (wishlist.includes(productName)) {
            wishlist = wishlist.filter(item => item !== productName);
            heartIcon.innerHTML = '&#x2764;'; 
        } else {
            wishlist.push(productName);
            heartIcon.innerHTML = '&#x2764;&#xFE0F;'; 
        }
    }
});


const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach(button => {
    button.addEventListener('click', function() {
        const page = parseInt(this.getAttribute('data-page'));
        
        
        loadProducts(page);

        
        pageLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => loadProducts(1));

document.querySelector('.page-link[data-page="1"]').classList.add('active');
const filterToggle = document.getElementById('filterToggle');
const filterContainer = document.getElementById('filterContainer');

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filterButton');
    const filterSidebar = document.getElementById('filterSidebar');
    const closeFilterButton = document.getElementById('closeFilterButton');

    if (filterButton && filterSidebar && closeFilterButton) {
        filterButton.addEventListener('click', () => {
            filterSidebar.style.left = '0px'; 
        });

        closeFilterButton.addEventListener('click', () => {
            filterSidebar.style.left = '-300px'; 
        });
    } else {
        console.error('Елементи filterButton, filterSidebar або closeFilterButton не знайдено.');
    }
});

const priceRange = document.getElementById('price-range');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

priceRange.addEventListener('input', function () {
    const currentValue = this.value;
    minPrice.textContent = `${currentValue}₴`;
});





// фільтри
const allProducts = [...productsPage1, ...productsPage2];

function renderProducts(products) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p>Нічого не знайдено</p>';
    return;
  }

  products.forEach(p => {
    container.innerHTML += `
    <div class="products" id="product-Container">
      <div class="product-carD">
        <h4>${p.name}</h4>
        <p>Бренд: ${p.brand}</p>
        <p>Категорія: ${p.category}</p>
        <p>Ціна: ${p.price}₴</p>
        <img src="${p.image}" alt="${p.name}" class="im"/>
      </div>
      </div>
    `;
  });
}

function getCheckedFilters() {
  const checkedBoxes = Array.from(document.querySelectorAll('.filter-sidebar input[type="checkbox"]:checked'));
  
  const filters = {
    brand: [],
    category: [],
  };

  checkedBoxes.forEach(cb => {
    const type = cb.dataset.filterType;
    const value = cb.dataset.filterValue;
    if (type && value) {
      filters[type].push(value);
    }
  });

  return filters;
}

function applyFilters() {
  const filters = getCheckedFilters();
  const maxPrice = Number(document.getElementById('price-range').value || Infinity);

  const filtered = allProducts.filter(p => {
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(p.brand);
    const categoryMatch = filters.category.length === 0 || filters.category.includes(p.category);
    const priceMatch = p.price <= maxPrice;

    return brandMatch && categoryMatch && priceMatch;
  });

  renderProducts(filtered);
}

// Додаємо слухачів подій
document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});
document.getElementById('price-range').addEventListener('input', applyFilters);

// Запускаємо фільтрацію при старті
applyFilters();
