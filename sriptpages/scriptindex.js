
let wishlistCount = 0; 
const wishlistIcon = document.querySelector('.wishlist-ic');
const wishlistCounter = wishlistIcon.querySelector('#wishlist-count');

document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.wishlist-icon');
        const isInWishlist = button.classList.contains('added-to-wishlist');
        if (isInWishlist) {
            button.classList.remove('added-to-wishlist');
            icon.src = 'images/icon/wishlist.ico';
            wishlistCount--;
        } else {
            button.classList.add('added-to-wishlist');
            icon.src = 'images/icon/wishlist_end.ico';
            wishlistCount++;
        }
        wishlistCounter.textContent = wishlistCount;
        if (wishlistCount < 0) {
            wishlistCount = 0;
            wishlistCounter.textContent = wishlistCount;
        }
    });
    
});
document.querySelectorAll('.btn-wish').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.co-wish');
        const isInWishlist = button.classList.contains('added-to-wishlist');
        
        if (isInWishlist) {
            button.classList.remove('added-to-wishlist');
            icon.src = 'images/icon/wishlist.ico';
            icon.style.filter = 'none'; 
            wishlistCount--;
        } else {
            button.classList.add('added-to-wishlist');
            icon.src = 'images/icon/wishlist_end.ico';
            wishlistCount++;
        }
        
        wishlistCounter.textContent = wishlistCount;
        if (wishlistCount < 0) {
            wishlistCount = 0;
            wishlistCounter.textContent = wishlistCount;
        }
    });
})
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
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".next-ic");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const images = JSON.parse(button.getAttribute("data-images"));
            const card = button.closest(".category-card");
            const imgElement = card.querySelector(".category-image");
            const currentSrc = imgElement.src;
            const currentIndex = images.indexOf(currentSrc.split("/").pop());
            const nextIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[nextIndex];
        });
    });
});
//пошук товарів за назвою
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
      resultsDiv.innerHTML = 'Введіть текст для пошуку.';
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/products?search=${encodeURIComponent(query)}`, {cache: "no-store"});

      if (!response.ok) {
        resultsDiv.innerHTML = 'Помилка сервера.';
        return;
      }

      document.getElementsByClassName("white-block")[0].style.display = "block";
      const data = await response.json();

      resultsDiv.innerHTML = data.map(item => `
        <div class="product">
          <p>${item.title}</p>
        </div>
      `).join('');

    } catch (err) {
      resultsDiv.innerHTML = `Помилка: ${err.message}`;
    }
  });
});
