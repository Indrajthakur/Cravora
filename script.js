/* ==========================================
   CRAVORA - COMPLETE JAVASCRIPT
========================================== */

/* 1. RESTAURANT DATA */

const restaurants = [
    {
        name: "Pizza Paradise",
        rating: 4.5,
        price: 250,
        cuisine: "pizza italian fast food",
        description: "Pizza, Italian, Fast Food",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        offer: "20% OFF",
        time: "30 min"
    },
    {
        name: "Burger House",
        rating: 4.3,
        price: 200,
        cuisine: "burgers american fast food",
        description: "Burgers, American, Snacks",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        offer: "15% OFF",
        time: "25 min"
    },
    {
        name: "Biryani Junction",
        rating: 4.7,
        price: 300,
        cuisine: "biryani north indian",
        description: "Biryani, North Indian",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
        offer: "10% OFF",
        time: "35 min"
    },
    {
        name: "Sweet Cravings",
        rating: 4.4,
        price: 180,
        cuisine: "desserts bakery sweets",
        description: "Desserts, Bakery, Sweets",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",
        offer: "FREE DELIVERY",
        time: "20 min"
    },
    {
        name: "Wok Express",
        rating: 4.6,
        price: 220,
        cuisine: "chinese asian noodles",
        description: "Chinese, Asian, Noodles",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600",
        offer: "15% OFF",
        time: "25 min"
    },
    {
        name: "Madras Cafe",
        rating: 4.5,
        price: 160,
        cuisine: "south indian dosa idli",
        description: "South Indian, Dosa, Idli",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
        offer: "10% OFF",
        time: "20 min"
    },
    {
        name: "Mexican Fiesta",
        rating: 4.4,
        price: 280,
        cuisine: "mexican tacos burritos",
        description: "Mexican, Tacos, Burritos",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600",
        offer: "20% OFF",
        time: "30 min"
    },
    {
        name: "Pasta Point",
        rating: 4.6,
        price: 260,
        cuisine: "pasta italian continental",
        description: "Pasta, Italian, Continental",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
        offer: "FREE DELIVERY",
        time: "30 min"
    },
    {
        name: "Desi Street Kitchen",
        rating: 4.3,
        price: 140,
        cuisine: "street food indian chaat",
        description: "Street Food, Indian, Chaat",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
        offer: "10% OFF",
        time: "20 min"
    },
    {
        name: "Sandwich Studio",
        rating: 4.2,
        price: 190,
        cuisine: "sandwiches cafe fast food",
        description: "Sandwiches, Cafe, Fast Food",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
        offer: "15% OFF",
        time: "15 min"
    }
];


/* 2. RESTAURANT MENUS */

const restaurantMenus = {
    "Pizza Paradise": [
        { name: "Margherita Pizza", price: 199, description: "Classic cheese and tomato pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600", type: "veg" },
        { name: "Farmhouse Pizza", price: 299, description: "Loaded with fresh vegetables", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600", type: "veg" },
        { name: "Paneer Tikka Pizza", price: 279, description: "Spicy paneer with creamy cheese", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600", type: "veg" },
        { name: "Chicken Tikka Pizza", price: 329, description: "Chicken tikka with cheese and spices", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600", type: "non-veg" }
    ],

    "Burger House": [
        { name: "Classic Veg Burger", price: 99, description: "Fresh vegetable patty", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600", type: "veg" },
        { name: "Cheese Burger", price: 149, description: "Burger with extra cheese", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600", type: "veg" },
        { name: "Double Chicken Burger", price: 199, description: "Double chicken patty with special sauce", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600", type: "non-veg" },
        { name: "Chicken Burger", price: 179, description: "Chicken patty with fresh lettuce", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600", type: "non-veg" }
    ],

    "Biryani Junction": [
        { name: "Veg Biryani", price: 159, description: "Aromatic rice with vegetables", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600", type: "veg" },
        { name: "Paneer Biryani", price: 199, description: "Paneer and basmati rice", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600", type: "veg" },
        { name: "Special Dum Biryani", price: 249, description: "Traditional vegetable dum biryani", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600", type: "veg" },
        { name: "Chicken Biryani", price: 229, description: "Aromatic chicken dum biryani", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600", type: "non-veg" }
    ],

    "Sweet Cravings": [
        { name: "Chocolate Cake", price: 99, description: "Rich chocolate dessert", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", type: "veg" },
        { name: "Brownie", price: 89, description: "Soft chocolate brownie", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600", type: "veg" },
        { name: "Ice Cream", price: 79, description: "Creamy vanilla ice cream", image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=600", type: "veg" }
    ],

    "Wok Express": [
        { name: "Veg Hakka Noodles", price: 149, description: "Stir-fried noodles and vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600", type: "veg" },
        { name: "Veg Fried Rice", price: 139, description: "Chinese-style vegetable fried rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600", type: "veg" },
        { name: "Manchurian", price: 169, description: "Crispy vegetable balls in sauce", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600", type: "veg" },
        { name: "Chicken Noodles", price: 199, description: "Stir-fried noodles with chicken", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600", type: "non-veg" }
    ],

    "Madras Cafe": [
        { name: "Masala Dosa", price: 99, description: "Crispy dosa with potato filling", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600", type: "veg" },
        { name: "Idli Sambhar", price: 79, description: "Soft idlis with hot sambhar", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600", type: "veg" },
        { name: "Mysore Dosa", price: 119, description: "Spicy Mysore-style dosa", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600", type: "veg" }
    ],

    "Mexican Fiesta": [
        { name: "Veg Tacos", price: 149, description: "Tacos filled with fresh vegetables", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600", type: "veg" },
        { name: "Veg Burrito", price: 179, description: "Mexican-style stuffed wrap", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600", type: "veg" },
        { name: "Nachos", price: 129, description: "Crunchy nachos with cheese", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600", type: "veg" },
        { name: "Chicken Tacos", price: 199, description: "Tacos filled with seasoned chicken", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600", type: "non-veg" }
    ],

    "Pasta Point": [
        { name: "White Sauce Pasta", price: 179, description: "Creamy white sauce pasta", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600", type: "veg" },
        { name: "Red Sauce Pasta", price: 169, description: "Classic tomato sauce pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600", type: "veg" },
        { name: "Cheese Macaroni", price: 199, description: "Cheesy baked macaroni", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600", type: "veg" },
        { name: "Chicken Pasta", price: 229, description: "Creamy pasta with chicken", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600", type: "non-veg" }
    ],

    "Desi Street Kitchen": [
        { name: "Pani Puri", price: 49, description: "Crispy puris with tangy water", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600", type: "veg" },
        { name: "Aloo Tikki", price: 69, description: "Crispy potato patties", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600", type: "veg" },
        { name: "Samosa", price: 39, description: "Traditional crispy samosa", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600", type: "veg" },
        { name: "Chicken Kebab", price: 159, description: "Spiced grilled chicken kebab", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600", type: "non-veg" }
    ],

    "Sandwich Studio": [
        { name: "Veg Sandwich", price: 99, description: "Fresh vegetable sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600", type: "veg" },
        { name: "Cheese Sandwich", price: 129, description: "Grilled sandwich with cheese", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600", type: "veg" },
        { name: "Paneer Sandwich", price: 149, description: "Spiced paneer sandwich", image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=600", type: "veg" },
        { name: "Chicken Sandwich", price: 179, description: "Chicken sandwich with fresh lettuce", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600", type: "non-veg" }
    ]
};


/* 3. GET HTML ELEMENTS */

const searchInput = document.getElementById("restaurant-search");
const searchButton = document.getElementById("search-button");
const searchMessage = document.getElementById("search-message");

const ratingFilter = document.getElementById("rating-filter");
const priceFilter = document.getElementById("price-filter");
const cuisineFilter = document.getElementById("cuisine-filter");
const resetFiltersButton = document.getElementById("reset-filters");

const restaurantGrid = document.getElementById("restaurant-grid");

const restaurantDetailsModal = document.getElementById("restaurant-details-modal");
const restaurantDetailsBody = document.getElementById("restaurant-details-body");
const closeRestaurantDetails = document.getElementById("close-restaurant-details");

const categoryCards = document.querySelectorAll(".category-card");
const navLinks = document.querySelectorAll(".nav-link");

const themeToggle = document.getElementById("theme-toggle");

const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const modalCartCount = document.getElementById("modal-cart-count");
const clearCartButton = document.getElementById("clear-cart");

const trackingInput = document.getElementById("tracking-order-id");
const trackOrderButton = document.getElementById("track-order-button");
const trackingMessage = document.getElementById("tracking-message");
const trackingResult = document.getElementById("tracking-result");

let favorites = JSON.parse(localStorage.getItem("cravoraFavorites") || "[]");
let cart = JSON.parse(localStorage.getItem("cravoraCart") || "[]");
let orderHistory = JSON.parse(localStorage.getItem("cravoraOrders") || "[]");

let showFavoritesOnly = false;

let currentMenuRestaurant = "";
let currentMenuFilter = "all";
let currentMenuSearch = "";
let currentMenuSort = "default";
let currentMenuCategory = "all";

let menuQuantities = {};


/* 4. HELPER FUNCTIONS */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

function calculateCartTotal() {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

function saveCart() {
    localStorage.setItem("cravoraCart", JSON.stringify(cart));
}

function saveOrders() {
    localStorage.setItem("cravoraOrders", JSON.stringify(orderHistory));
}


/* TOAST NOTIFICATION SYSTEM */

const toastContainer = document.createElement("div");
toastContainer.className = "toast-container";
document.body.appendChild(toastContainer);

function showToast(message, type = "success") {
    const toast = document.createElement("div");

    toast.className = `toast ${type === "error" ? "error" : ""}`;

    toast.innerHTML = `
        <span class="toast-icon">
            ${type === "error" ? "⚠️" : "✓"}
        </span>
        <span class="toast-message"></span>
    `;

    toast.querySelector(".toast-message").textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("removing");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}


/* 5. CREATE RESTAURANT CARDS */

function renderRestaurants() {
    restaurantGrid.innerHTML = restaurants.map(restaurant => {
        const cuisineTags = restaurant.description
            .split(",")
            .map(tag => `
                <span class="cuisine-tag">
                    ${escapeHTML(tag.trim())}
                </span>
            `)
            .join("");

        return `
            <article
                class="restaurant-card"
                data-rating="${restaurant.rating}"
                data-price="${restaurant.price}"
                data-cuisine="${restaurant.cuisine}"
            >
                <div class="restaurant-image">
                    <img
                        src="${restaurant.image}"
                        alt="${escapeHTML(restaurant.name)}"
                        loading="lazy"
                    >

                    <span class="offer">
                        ${escapeHTML(restaurant.offer)}
                    </span>
                </div>

                <div class="restaurant-info">
                    <div class="restaurant-title">
                        <h3>${escapeHTML(restaurant.name)}</h3>
                        <span class="rating">★ ${restaurant.rating}</span>
                    </div>

                    <div class="restaurant-cuisine-tags">
                        ${cuisineTags}
                    </div>

                    <div class="restaurant-meta">
                        <span>₹${restaurant.price} for two</span>
                        <span>${escapeHTML(restaurant.time)}</span>
                    </div>

                    <button
                        type="button"
                        class="add-to-cart-btn"
                        data-name="${escapeHTML(restaurant.name)}"
                    >
                        View Menu
                    </button>
                </div>
            </article>
        `;
    }).join("");

    addFavoriteButtons();
}

function getRestaurantCards() {
    return document.querySelectorAll(".restaurant-card");
}


/* RESTAURANT DETAILS POPUP */

function showRestaurantDetails(name) {
    const restaurant = restaurants.find(item => item.name === name);

    if (!restaurant) return;

    restaurantDetailsBody.innerHTML = `
        <div class="restaurant-details-image">
            <img
                src="${restaurant.image}"
                alt="${escapeHTML(restaurant.name)}"
            >

            <span class="offer">
                ${escapeHTML(restaurant.offer)}
            </span>
        </div>

        <div class="restaurant-details-info">
            <p class="section-tag">RESTAURANT DETAILS</p>

            <h2>${escapeHTML(restaurant.name)}</h2>

            <div class="details-rating">
                ⭐ ${restaurant.rating} / 5
            </div>

            <p class="details-description">
                Discover delicious food at ${escapeHTML(restaurant.name)}.
                Explore its menu and find something you love.
            </p>

            <div class="details-grid">
                <div class="details-item">
                    <span>🍽️ Cuisine</span>
                    <strong>${escapeHTML(restaurant.description)}</strong>
                </div>

                <div class="details-item">
                    <span>🛵 Delivery Time</span>
                    <strong>${escapeHTML(restaurant.time)}</strong>
                </div>

                <div class="details-item">
                    <span>💰 Average Cost</span>
                    <strong>₹${restaurant.price} for two</strong>
                </div>

                <div class="details-item">
                    <span>🕒 Opening Hours</span>
                    <strong>10 AM – 11 PM (Demo)</strong>
                </div>
            </div>

            <p class="details-demo-note">
                *Opening hours and restaurant information are sample demo data.
            </p>

            <button
                type="button"
                class="details-menu-button"
                id="details-view-menu"
            >
                Explore Menu →
            </button>
        </div>
    `;

    restaurantDetailsModal.classList.add("active");
    document.body.style.overflow = "hidden";

    document.getElementById("details-view-menu").addEventListener("click", () => {
        restaurantDetailsModal.classList.remove("active");
        document.body.style.overflow = "";

        openRestaurantMenu(name);
    });
}


/* CLOSE RESTAURANT DETAILS */

closeRestaurantDetails.addEventListener("click", () => {
    restaurantDetailsModal.classList.remove("active");
    document.body.style.overflow = "";
});

restaurantDetailsModal.addEventListener("click", event => {
    if (event.target === restaurantDetailsModal) {
        restaurantDetailsModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        restaurantDetailsModal.classList.remove("active");
        document.body.style.overflow = "";
    }
});


/* 6. SEARCH AND FILTERING */

function filterRestaurants() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const minimumRating = Number(ratingFilter.value);
    const selectedPrice = priceFilter.value;
    const selectedCuisine = cuisineFilter.value.toLowerCase();

    let visibleCount = 0;

    getRestaurantCards().forEach(card => {
        const name = card.querySelector(".restaurant-title h3")
            .textContent.toLowerCase();

        const description = card.querySelector(".restaurant-info")
            .textContent.toLowerCase();

        const cuisine = (card.dataset.cuisine || "").toLowerCase();

        const rating = Number(card.dataset.rating);
        const price = Number(card.dataset.price);

        const matchesSearch =
            !searchTerm ||
            name.includes(searchTerm) ||
            description.includes(searchTerm) ||
            cuisine.includes(searchTerm);

        const matchesRating = rating >= minimumRating;

        let matchesPrice = true;

        if (selectedPrice === "budget") {
            matchesPrice = price < 200;
        } else if (selectedPrice === "medium") {
            matchesPrice = price >= 200 && price <= 300;
        } else if (selectedPrice === "premium") {
            matchesPrice = price > 300;
        }

        const matchesCuisine =
            selectedCuisine === "all" ||
            cuisine.includes(selectedCuisine);

        const restaurantName = card.querySelector(".restaurant-title h3")
            .textContent.trim();

        const matchesFavorites =
            !showFavoritesOnly ||
            favorites.includes(restaurantName);

        const isVisible =
            matchesSearch &&
            matchesRating &&
            matchesPrice &&
            matchesCuisine &&
            matchesFavorites;

        card.hidden = !isVisible;

        if (isVisible) visibleCount++;
    });

    const filtersActive =
        searchTerm ||
        minimumRating > 0 ||
        selectedPrice !== "all" ||
        selectedCuisine !== "all" ||
        showFavoritesOnly;

    if (!filtersActive) {
        searchMessage.textContent = "";
    } else if (visibleCount === 0) {
        searchMessage.textContent = showFavoritesOnly
            ? "No favourites yet! Click the heart icon on a restaurant to save it."
            : "No restaurants found. Try another search or change your filters.";
    } else {
        searchMessage.textContent = `${visibleCount} restaurant(s) found.`;
    }
}

searchInput.addEventListener("input", filterRestaurants);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        filterRestaurants();
    }
});

searchButton.addEventListener("click", filterRestaurants);

ratingFilter.addEventListener("change", filterRestaurants);
priceFilter.addEventListener("change", filterRestaurants);
cuisineFilter.addEventListener("change", filterRestaurants);

resetFiltersButton.addEventListener("click", () => {
    searchInput.value = "";
    ratingFilter.value = "0";
    priceFilter.value = "all";
    cuisineFilter.value = "all";

    showFavoritesOnly = false;

    filterRestaurants();
});


/* 7. FAVOURITES */

function addFavoriteButtons() {
    getRestaurantCards().forEach(card => {
        const name = card.querySelector(".restaurant-title h3")
            .textContent.trim();

        const imageContainer = card.querySelector(".restaurant-image");

        const button = document.createElement("button");

        button.type = "button";
        button.className = "favorite-btn";

        function updateButton() {
            const isFavorite = favorites.includes(name);

            button.textContent = isFavorite ? "♥" : "♡";
            button.classList.toggle("favorited", isFavorite);
            button.title = isFavorite
                ? "Remove favourite"
                : "Add favourite";
        }

        updateButton();
        imageContainer.appendChild(button);

        button.addEventListener("click", () => {
            if (favorites.includes(name)) {
                favorites = favorites.filter(item => item !== name);
            } else {
                favorites.push(name);
            }

            localStorage.setItem(
                "cravoraFavorites",
                JSON.stringify(favorites)
            );

            updateButton();
            filterRestaurants();
        });
    });
}


/* 8. CATEGORY FILTERING */

categoryCards.forEach(category => {
    category.addEventListener("click", () => {
        const categoryName = category.dataset.category ||
            category.querySelector("h3").textContent.toLowerCase();

        searchInput.value = categoryName;
        ratingFilter.value = "0";
        priceFilter.value = "all";
        cuisineFilter.value = "all";

        showFavoritesOnly = false;

        filterRestaurants();

        document.getElementById("restaurants").scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* 9. SIDEBAR NAVIGATION */

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        const linkText = link.textContent.toLowerCase();

        if (linkText.includes("favourites")) {
            event.preventDefault();

            showFavoritesOnly = true;

            searchInput.value = "";
            ratingFilter.value = "0";
            priceFilter.value = "all";
            cuisineFilter.value = "all";

            filterRestaurants();

            document.getElementById("restaurants").scrollIntoView({
                behavior: "smooth"
            });
        } else if (
            linkText.includes("explore") ||
            linkText.includes("restaurants") ||
            linkText.includes("categories")
        ) {
            showFavoritesOnly = false;
            filterRestaurants();
        }

        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


/* 10. DARK MODE */

const savedTheme = localStorage.getItem("cravoraTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = darkMode ? "☀️" : "🌙";

    localStorage.setItem(
        "cravoraTheme",
        darkMode ? "dark" : "light"
    );
});


/* 11. CART DATA CLEANUP */

cart = cart.map(item => {
    if (typeof item === "string") {
        return {
            name: item,
            restaurant: "",
            price: 0,
            quantity: 1
        };
    }

    return {
        name: item.name,
        restaurant: item.restaurant || "",
        price: Number(item.price) || 0,
        quantity: Math.max(1, Number(item.quantity) || 1)
    };
});


/* 12. CART FUNCTIONS */

function updateCart() {
    saveCart();

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;
    modalCartCount.textContent = totalQuantity;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <strong>${escapeHTML(item.name)}</strong>
                <p>₹${item.price} × ${item.quantity}</p>
                <strong>₹${item.price * item.quantity}</strong>
            </div>

            <div class="cart-quantity">
                <button
                    type="button"
                    class="quantity-btn"
                    data-action="decrease"
                    data-index="${index}"
                >−</button>

                <span>${item.quantity}</span>

                <button
                    type="button"
                    class="quantity-btn"
                    data-action="increase"
                    data-index="${index}"
                >+</button>

                <button
                    type="button"
                    class="remove-item"
                    data-index="${index}"
                >
                    Remove
                </button>
            </div>
        </div>
    `).join("") + `
        <div class="cart-total">
            <h3>Subtotal: ₹${calculateCartTotal()}</h3>
        </div>
    `;
}

cartButton.addEventListener("click", () => {
    updateCart();
    cartModal.style.display = "flex";
});

closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});

cartModal.addEventListener("click", event => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

cartItems.addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-item");
    const actionButton = event.target.closest("[data-action]");

    if (removeButton) {
        cart.splice(Number(removeButton.dataset.index), 1);
        updateCart();
        return;
    }

    if (actionButton) {
        const index = Number(actionButton.dataset.index);

        if (!cart[index]) return;

        if (actionButton.dataset.action === "increase") {
            cart[index].quantity++;
        } else if (actionButton.dataset.action === "decrease") {
            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
        }

        updateCart();
    }
});

clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCart();
});


/* 13. RESTAURANT MENU MODAL */

const menuModal = document.createElement("div");

menuModal.id = "menu-modal";
menuModal.className = "checkout-modal";

menuModal.innerHTML = `
    <div class="checkout-content menu-content">

        <button
            type="button"
            id="close-menu"
            class="close-checkout"
        >
            &times;
        </button>

        <p class="section-tag">FRESHLY MADE FOR YOU</p>

        <h2 id="menu-restaurant-name">Restaurant Menu</h2>

        <p class="checkout-subtitle">
            Choose your favourite food
        </p>

        <input
            type="search"
            id="menu-search"
            class="menu-search"
            placeholder="🔍 Search food items..."
        >

        <div class="menu-toolbar">

            <div class="menu-filter-buttons">
                <button
                    type="button"
                    class="menu-filter-btn active"
                    data-filter="all"
                >
                    All
                </button>

                <button
                    type="button"
                    class="menu-filter-btn"
                    data-filter="veg"
                >
                    🟢 Veg
                </button>

                <button
                    type="button"
                    class="menu-filter-btn"
                    data-filter="non-veg"
                >
                    🔴 Non-Veg
                </button>
            </div>

            <select id="menu-sort" class="menu-sort">
                <option value="default">Sort: Recommended</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
            </select>

        </div>

        <div
            id="menu-category-filters"
            class="menu-category-filters"
        ></div>

        <div
            id="menu-items"
            class="menu-items-grid"
        ></div>

    </div>
`;

document.body.appendChild(menuModal);


/* MENU ELEMENTS */

const menuItemsContainer = document.getElementById("menu-items");
const menuSearchInput = document.getElementById("menu-search");
const menuCategoryFilters = document.getElementById("menu-category-filters");
const menuSortSelect = document.getElementById("menu-sort");


/* 14. FOOD CATEGORY HELPER */

function getFoodCategory(item) {
    const name = item.name.toLowerCase();

    const categories = [
        { name: "Pizza", keywords: ["pizza"] },
        { name: "Burgers", keywords: ["burger"] },
        { name: "Biryani", keywords: ["biryani"] },
        { name: "Desserts", keywords: ["cake", "brownie", "ice cream"] },
        { name: "Noodles", keywords: ["noodles"] },
        { name: "Rice", keywords: ["fried rice"] },
        { name: "Dosa & Idli", keywords: ["dosa", "idli"] },
        { name: "Tacos & Wraps", keywords: ["taco", "burrito"] },
        { name: "Pasta", keywords: ["pasta", "macaroni"] },
        { name: "Street Food", keywords: ["pani puri", "aloo tikki", "samosa"] },
        { name: "Kebabs", keywords: ["kebab"] },
        { name: "Sandwiches", keywords: ["sandwich"] }
    ];

    const matched = categories.find(category =>
        category.keywords.some(keyword => name.includes(keyword))
    );

    return matched ? matched.name : "Other";
}


/* 15. RENDER MENU CATEGORY FILTERS */

function renderMenuCategoryFilters(menu) {
    const categories = [
        ...new Set(menu.map(item => getFoodCategory(item)))
    ];

    menuCategoryFilters.innerHTML = `
        <button
            type="button"
            class="menu-category-btn active"
            data-category="all"
        >
            All Categories
        </button>

        ${categories.map(category => `
            <button
                type="button"
                class="menu-category-btn"
                data-category="${category}"
            >
                ${category}
            </button>
        `).join("")}
    `;

    menuCategoryFilters
        .querySelectorAll(".menu-category-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === currentMenuCategory
            );
        });
}


/* CATEGORY FILTER CLICK */

menuCategoryFilters.addEventListener("click", event => {
    const button = event.target.closest(".menu-category-btn");

    if (!button) return;

    currentMenuCategory = button.dataset.category;

    menuCategoryFilters
        .querySelectorAll(".menu-category-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderMenuItems();
});


/* 16. RENDER MENU ITEMS */

function renderMenuItems() {
    const menu = restaurantMenus[currentMenuRestaurant];

    if (!menu) {
        menuItemsContainer.innerHTML = "<p>Menu not available.</p>";
        return;
    }

    let filteredItems = menu.filter(item => {

        const matchesSearch =
            item.name.toLowerCase().includes(currentMenuSearch) ||
            item.description.toLowerCase().includes(currentMenuSearch);

        const matchesType =
            currentMenuFilter === "all" ||
            item.type === currentMenuFilter;

        const matchesCategory =
            currentMenuCategory === "all" ||
            getFoodCategory(item) === currentMenuCategory;

        return matchesSearch && matchesType && matchesCategory;
    });


    /* PRICE SORTING */

    if (currentMenuSort === "low-high") {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (currentMenuSort === "high-low") {
        filteredItems.sort((a, b) => b.price - a.price);
    }


    /* EMPTY RESULT */

    if (filteredItems.length === 0) {
        menuItemsContainer.innerHTML = `
            <p>No food items found. Try another search!</p>
        `;
        return;
    }


    /* DISPLAY FOOD CARDS */

    menuItemsContainer.innerHTML = filteredItems.map(item => {

        const index = menu.indexOf(item);
        const quantity = menuQuantities[index] || 1;
        const isVeg = item.type === "veg";

        return `
            <article class="menu-item">

                <img
                    class="menu-food-image"
                    src="${item.image}"
                    alt="${escapeHTML(item.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=Food+Image';"
                >

                <div class="menu-food-info">

                    <span class="food-type-badge ${isVeg ? "veg" : "non-veg"}">
                        ${isVeg ? "🟢 VEG" : "🔴 NON-VEG"}
                    </span>

                    <h3>${escapeHTML(item.name)}</h3>

                    <p>${escapeHTML(item.description)}</p>

                    <strong class="menu-food-price">
                        ₹${item.price}
                    </strong>

                    <div class="menu-item-actions">

                        <div class="menu-quantity-control">

                            <button
                                type="button"
                                class="menu-quantity-btn"
                                data-menu-action="decrease"
                                data-menu-index="${index}"
                            >
                                −
                            </button>

                            <span>${quantity}</span>

                            <button
                                type="button"
                                class="menu-quantity-btn"
                                data-menu-action="increase"
                                data-menu-index="${index}"
                            >
                                +
                            </button>

                        </div>

                        <button
                            type="button"
                            class="menu-add-button"
                            data-menu-action="add"
                            data-menu-index="${index}"
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </article>
        `;
    }).join("");
}


/* 17. OPEN AND CLOSE MENU */

function openRestaurantMenu(name) {

    if (!restaurantMenus[name]) {
        showToast("Menu is not available for this restaurant.", "error");
        return;
    }

    currentMenuRestaurant = name;

    /* Reset menu filters */

    currentMenuCategory = "all";
    currentMenuFilter = "all";
    currentMenuSearch = "";
    currentMenuSort = "default";

    menuQuantities = {};

    /* Set default quantity */

    restaurantMenus[name].forEach((item, index) => {
        menuQuantities[index] = 1;
    });

    /* Update menu heading and inputs */

    document.getElementById("menu-restaurant-name").textContent = name;

    menuSearchInput.value = "";
    menuSortSelect.value = "default";

    /* Reset veg/non-veg buttons */

    menuModal.querySelectorAll(".menu-filter-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === "all"
        );
    });

    /* Render categories and food items */

    renderMenuCategoryFilters(restaurantMenus[name]);
    renderMenuItems();

    /* Show menu modal */

    menuModal.style.display = "flex";
}


/* MENU SEARCH */

menuSearchInput.addEventListener("input", () => {
    currentMenuSearch = menuSearchInput.value.trim().toLowerCase();
    renderMenuItems();
});


/* MENU PRICE SORTING */

menuSortSelect.addEventListener("change", () => {
    currentMenuSort = menuSortSelect.value;
    renderMenuItems();
});


/* VEG AND NON-VEG FILTERING */

menuModal.querySelectorAll(".menu-filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        currentMenuFilter = button.dataset.filter;

        menuModal.querySelectorAll(".menu-filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderMenuItems();
    });
});


/* CLOSE MENU BUTTON */

document.getElementById("close-menu").addEventListener("click", () => {
    menuModal.style.display = "none";
});


/* CLOSE MENU WHEN CLICKING OUTSIDE */

menuModal.addEventListener("click", event => {
    if (event.target === menuModal) {
        menuModal.style.display = "none";
    }
});


/* 18. MENU QUANTITY AND ADD TO CART */

menuItemsContainer.addEventListener("click", event => {

    const button = event.target.closest("[data-menu-action]");

    if (!button) return;

    const action = button.dataset.menuAction;
    const index = Number(button.dataset.menuIndex);

    const item = restaurantMenus[currentMenuRestaurant]?.[index];

    if (!item) return;

    /* Increase quantity */

    if (action === "increase") {
        menuQuantities[index]++;
        renderMenuItems();
        return;
    }

    /* Decrease quantity */

    if (action === "decrease") {
        menuQuantities[index] = Math.max(
            1,
            menuQuantities[index] - 1
        );

        renderMenuItems();
        return;
    }

    /* Add item to cart */

    if (action === "add") {

        const quantity = menuQuantities[index];

        const existingItem = cart.find(cartItem =>
            cartItem.name === item.name &&
            cartItem.restaurant === currentMenuRestaurant
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name: item.name,
                restaurant: currentMenuRestaurant,
                price: item.price,
                quantity
            });
        }

        updateCart();

        button.textContent = "Added ✓";
        button.classList.add("added");

        showToast(`${item.name} added to cart!`);
    }
});


/* OPEN RESTAURANT DETAILS ON CARD CLICK */

restaurantGrid.addEventListener("click", event => {

    const card = event.target.closest(".restaurant-card");

    if (!card) return;

    if (event.target.closest("button")) return;

    const name = card.querySelector(".restaurant-title h3")
        .textContent.trim();

    showRestaurantDetails(name);
});


/* 19. VIEW MENU BUTTONS */

restaurantGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-to-cart-btn");

    if (!button) return;

    openRestaurantMenu(button.dataset.name);
});


/* 20. CHECKOUT */

const checkoutButton = document.createElement("button");

checkoutButton.id = "checkout-button";
checkoutButton.className = "checkout-button";
checkoutButton.textContent = "Proceed to Checkout";

clearCartButton.parentElement.appendChild(checkoutButton);


const checkoutModal = document.createElement("div");

checkoutModal.id = "checkout-modal";
checkoutModal.className = "checkout-modal";

checkoutModal.innerHTML = `
    <div class="checkout-content">

        <button
            type="button"
            id="close-checkout"
            class="close-checkout"
        >
            &times;
        </button>

        <h2>Complete Your Order</h2>

        <p class="checkout-subtitle">
            Enter your delivery details below.
        </p>

        <div id="checkout-summary"></div>

        <form id="checkout-form">

            <label for="customer-name">Full Name</label>

            <input
                type="text"
                id="customer-name"
                placeholder="Enter your name"
                required
            >

            <label for="customer-phone">Phone Number</label>

            <input
                type="tel"
                id="customer-phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                maxlength="10"
                required
            >

            <label for="customer-address">Delivery Address</label>

            <textarea
                id="customer-address"
                placeholder="Enter your complete address"
                required
            ></textarea>

            <label for="payment-method">Payment Method</label>

            <select id="payment-method">
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Online Demo Payment">Online Payment (Demo)</option>
            </select>

            <h3 id="checkout-total"></h3>

            <button type="submit" class="place-order-button">
                Place Order
            </button>

        </form>
    </div>
`;

document.body.appendChild(checkoutModal);


function updateCheckoutSummary() {

    const summary = document.getElementById("checkout-summary");

    summary.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>
                ${escapeHTML(item.name)} × ${item.quantity}
            </span>

            <strong>
                ₹${item.price * item.quantity}
            </strong>
        </div>
    `).join("");

    document.getElementById("checkout-total").textContent =
        `Total Amount: ₹${calculateCartTotal()}`;
}


checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {
        showToast("Your cart is empty! Add something first.", "error");
        return;
    }

    updateCheckoutSummary();

    cartModal.style.display = "none";
    checkoutModal.style.display = "flex";
});


document.getElementById("close-checkout").addEventListener("click", () => {
    checkoutModal.style.display = "none";
});


checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) {
        checkoutModal.style.display = "none";
    }
});


/* 21. ORDER HISTORY */

const orderHistoryButton = document.createElement("button");

orderHistoryButton.id = "order-history-button";
orderHistoryButton.className = "checkout-button";
orderHistoryButton.textContent = "📦 My Orders";

checkoutButton.parentElement.appendChild(orderHistoryButton);


const orderHistoryModal = document.createElement("div");

orderHistoryModal.id = "order-history-modal";
orderHistoryModal.className = "checkout-modal";

orderHistoryModal.innerHTML = `
    <div class="checkout-content">

        <button
            type="button"
            id="close-order-history"
            class="close-checkout"
        >
            &times;
        </button>

        <h2>📦 My Orders</h2>

        <p class="checkout-subtitle">
            Your previous orders
        </p>

        <div id="order-history-list"></div>

    </div>
`;

document.body.appendChild(orderHistoryModal);


function displayOrderHistory() {

    const list = document.getElementById("order-history-list");

    if (orderHistory.length === 0) {
        list.innerHTML = "<p>You haven't placed any orders yet.</p>";
        return;
    }

    list.innerHTML = orderHistory.map(order => `
        <div class="order-history-card">

            <h3>Order #${escapeHTML(order.id)}</h3>

            <p>${escapeHTML(order.date)}</p>

            <p>
                <strong>Items:</strong>
                ${order.items.reduce(
                    (total, item) => total + item.quantity,
                    0
                )}
            </p>

            <p>
                <strong>Total:</strong>
                ₹${order.total}
            </p>

            <div class="order-status">
                ● ${escapeHTML(order.status)}
            </div>

            <details>

                <summary>View Order Details</summary>

                <ul>
                    ${order.items.map(item => `
                        <li>
                            ${escapeHTML(item.name)} × ${item.quantity}
                            — ₹${item.price * item.quantity}
                        </li>
                    `).join("")}
                </ul>

                <p>
                    <strong>Payment:</strong>
                    ${escapeHTML(order.payment)}
                </p>

            </details>

            <button
                type="button"
                class="checkout-button track-saved-order"
                data-order-id="${escapeHTML(order.id)}"
            >
                📦 Track This Order
            </button>

        </div>
    `).join("");
}


orderHistoryButton.addEventListener("click", () => {

    displayOrderHistory();

    cartModal.style.display = "none";
    orderHistoryModal.style.display = "flex";
});


document.getElementById("close-order-history").addEventListener("click", () => {
    orderHistoryModal.style.display = "none";
});


orderHistoryModal.addEventListener("click", event => {
    if (event.target === orderHistoryModal) {
        orderHistoryModal.style.display = "none";
    }
});


/* 22. PLACE ORDER */

document.getElementById("checkout-form").addEventListener("submit", event => {

    event.preventDefault();

    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }

    const customerName = document.getElementById("customer-name")
        .value.trim();

    const customerPhone = document.getElementById("customer-phone")
        .value.trim();

    const customerAddress = document.getElementById("customer-address")
        .value.trim();

    const paymentMethod = document.getElementById("payment-method").value;

    const newOrder = {
        id: "CRV" + Date.now().toString().slice(-6),

        items: cart.map(item => ({ ...item })),

        total: calculateCartTotal(),

        date: new Date().toLocaleString("en-IN"),

        status: "Order Placed",

        payment: paymentMethod,

        customerName,
        customerPhone,
        customerAddress
    };

    orderHistory.unshift(newOrder);

    saveOrders();

    showToast(
        `Order placed successfully! Order ID: #${newOrder.id}`
    );

    cart = [];

    updateCart();

    checkoutModal.style.display = "none";

    document.getElementById("checkout-form").reset();
});


/* 23. ORDER TRACKING */

const deliveryStages = [
    "Order Placed",
    "Preparing Food",
    "Out for Delivery",
    "Delivered"
];


function trackOrder() {

    const enteredId = trackingInput.value.trim().toUpperCase();

    trackingMessage.textContent = "";
    trackingResult.hidden = true;

    if (!enteredId) {
        trackingMessage.textContent = "Please enter your Order ID.";
        return;
    }

    const foundOrder = orderHistory.find(order =>
        String(order.id).toUpperCase() === enteredId
    );

    if (!foundOrder) {
        trackingMessage.textContent =
            "Order not found! Please check your Order ID.";

        return;
    }

    trackingResult.hidden = false;

    document.getElementById("tracking-result-id").textContent =
        "#" + foundOrder.id;

    let currentStage = deliveryStages.indexOf(foundOrder.status);

    if (currentStage < 0) currentStage = 0;

    document.getElementById("tracking-status").textContent =
        foundOrder.status;

    document.querySelectorAll(".tracking-step").forEach((step, index) => {

        step.classList.remove("completed", "active");

        const icon = step.querySelector(".step-icon");

        if (index <= currentStage) {
            step.classList.add("completed");
            icon.textContent = "✓";
        } else {
            icon.textContent = index + 1;
        }

        if (index === currentStage) {
            step.classList.add("active");
        }
    });


    let extraInfo = document.getElementById("tracking-extra-info");

    if (!extraInfo) {

        extraInfo = document.createElement("div");

        extraInfo.id = "tracking-extra-info";

        trackingResult.querySelector(".tracking-order-info")
            .insertAdjacentElement("afterend", extraInfo);
    }

    extraInfo.innerHTML = `
        <p>
            <strong>Customer:</strong>
            ${escapeHTML(foundOrder.customerName)}
        </p>

        <p>
            <strong>Total Amount:</strong>
            ₹${foundOrder.total}
        </p>

        <p>
            <strong>Order Date:</strong>
            ${escapeHTML(foundOrder.date)}
        </p>

        <p>
            <strong>Items:</strong>
            ${foundOrder.items.length}
        </p>
    `;
}


trackOrderButton.addEventListener("click", trackOrder);


trackingInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        event.preventDefault();
        trackOrder();
    }
});


/* 24. TRACK ORDER FROM ORDER HISTORY */

document.getElementById("order-history-list")
    .addEventListener("click", event => {

        const button = event.target.closest(".track-saved-order");

        if (!button) return;

        orderHistoryModal.style.display = "none";

        document.getElementById("track-order").scrollIntoView({
            behavior: "smooth"
        });

        trackingInput.value = button.dataset.orderId;

        trackOrder();
    });


/* 25. INITIAL SETUP */

renderRestaurants();

ratingFilter.value = "0";
priceFilter.value = "all";
cuisineFilter.value = "all";

searchInput.value = "";

showFavoritesOnly = false;

updateCart();
filterRestaurants();

console.log("Cravora loaded successfully!");


/* 26. ACTIVE NAVIGATION HIGHLIGHT */

document.addEventListener("DOMContentLoaded", () => {

    const allNavLinks = document.querySelectorAll(
        ".nav-link, .mobile-nav-link"
    );

    const sections = [
        "home",
        "categories",
        "restaurants",
        "track-order"
    ]
        .map(id => document.getElementById(id))
        .filter(Boolean);


    function setActiveLink(sectionId) {

        allNavLinks.forEach(link => {

            const isActive =
                link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle("active", isActive);
        });
    }


    const observer = new IntersectionObserver(entries => {

        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort(
                (a, b) =>
                    b.intersectionRatio - a.intersectionRatio
            );

        if (visibleSections.length > 0) {
            setActiveLink(visibleSections[0].target.id);
        }

    }, {
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 0.2, 0.5, 1]
    });


    sections.forEach(section => observer.observe(section));
});

/* =========================================
   CRAVORA — PAGE LOADER
========================================= */

function hidePageLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
        loader.classList.add("hidden");

        setTimeout(() => {
            loader.remove();
        }, 450);
    }
}

if (document.readyState === "complete") {
    hidePageLoader();
} else {
    window.addEventListener("load", hidePageLoader, { once: true });
}
/* CRAVORA — PAGE LOADER */

function hidePageLoader() {
    const loader = document.getElementById("page-loader");

    if (loader) {
        loader.classList.add("hidden");

        setTimeout(() => {
            loader.remove();
        }, 450);
    }
}

if (document.readyState === "complete") {
    hidePageLoader();
} else {
    window.addEventListener("load", hidePageLoader, { once: true });
}
/* =========================================
   CRAVORA — SCROLL REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Stop animations for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Elements that should reveal while scrolling
    const revealSelectors = [
        ".section-heading",
        ".category-card",
        ".restaurant-card",
        ".tracking-box",
        "footer"
    ];

    // Create the observer
    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.remove("reveal-pending");
                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    // Find elements and observe them
    function observeRevealElements(container = document) {

        revealSelectors.forEach((selector) => {

            const elements = container.querySelectorAll(selector);

            elements.forEach((element) => {

                if (
                    element.classList.contains("reveal-pending") ||
                    element.classList.contains("reveal-visible")
                ) {
                    return;
                }

                element.classList.add("reveal-pending");
                revealObserver.observe(element);

            });

        });

    }

    // Observe existing page elements
    observeRevealElements();

    // Watch restaurant cards created dynamically by JavaScript
    const restaurantGrid = document.getElementById("restaurant-grid");

    if (restaurantGrid) {

        const gridObserver = new MutationObserver(() => {
            observeRevealElements(restaurantGrid);
        });

        gridObserver.observe(restaurantGrid, {
            childList: true,
            subtree: true
        });

    }

});