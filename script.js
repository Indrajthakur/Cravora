
/* ==========================================
   CRAVORA - COMPLETE JAVASCRIPT
========================================== */


/* ==========================================
   1. SEARCH AND FILTER ELEMENTS
========================================== */

const searchInput = document.getElementById("restaurant-search");
const searchButton = document.getElementById("search-button");
const searchMessage = document.getElementById("search-message");

const ratingFilter = document.getElementById("rating-filter");
const priceFilter = document.getElementById("price-filter");
const cuisineFilter = document.getElementById("cuisine-filter");
const resetFiltersButton = document.getElementById("reset-filters");

const restaurantCards = document.querySelectorAll(".restaurant-card");
const categoryCards = document.querySelectorAll(".category-card");
const navLinks = document.querySelectorAll(".nav-link");

let showFavoritesOnly = false;



/* ==========================================
   2. LOCAL STORAGE
========================================== */

let favorites = JSON.parse(
    localStorage.getItem("cravoraFavorites") || "[]"
);

let cart = JSON.parse(
    localStorage.getItem("cravoraCart") || "[]"
);

let orderHistory = JSON.parse(
    localStorage.getItem("cravoraOrders") || "[]"
);

// Convert old cart entries into the new cart format
cart = cart.map(item => {
    if (typeof item === "string") {
        return {
            name: item,
            restaurant: "",
            price: getRestaurantPrice(item),
            quantity: 1
        };
    }

    return {
        name: item.name,
        restaurant: item.restaurant || "",
        price: Number(item.price) || 0,
        quantity: Number(item.quantity) || 1
    };
});

/* ==========================================
   3. FAVOURITES
========================================== */

restaurantCards.forEach((card) => {

    const restaurantName = card.querySelector(
        ".restaurant-title h3"
    ).textContent.trim();

    const imageContainer = card.querySelector(".restaurant-image");

    const favoriteButton = document.createElement("button");

    favoriteButton.className = "favorite-btn";
    favoriteButton.type = "button";

    function updateFavoriteButton() {

        const isFavorite = favorites.includes(restaurantName);

        favoriteButton.textContent = isFavorite ? "♥" : "♡";

        favoriteButton.title = isFavorite
            ? "Remove from favourites"
            : "Add to favourites";

        favoriteButton.classList.toggle("favorited", isFavorite);
    }

    updateFavoriteButton();

    imageContainer.appendChild(favoriteButton);

    favoriteButton.addEventListener("click", () => {

        if (favorites.includes(restaurantName)) {

            favorites = favorites.filter(
                name => name !== restaurantName
            );

        } else {

            favorites.push(restaurantName);

        }

        localStorage.setItem(
            "cravoraFavorites",
            JSON.stringify(favorites)
        );

        updateFavoriteButton();

        filterRestaurants();

    });

});


/* ==========================================
   4. RESTAURANT FILTER FUNCTION
========================================== */

function filterRestaurants() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const minRating = Number(ratingFilter.value);
    const selectedPrice = priceFilter.value;
    const selectedCuisine = cuisineFilter.value.toLowerCase();

    let resultsCount = 0;

    restaurantCards.forEach((card) => {

        const details = card.textContent.toLowerCase();

        const name = card.querySelector(
            ".restaurant-title h3"
        ).textContent.toLowerCase();

        const cuisine = (card.dataset.cuisine || "").toLowerCase();

        const rating = Number(card.dataset.rating || 0);
        const price = Number(card.dataset.price || 0);

        const matchesSearch =
            searchTerm === "" ||
            name.includes(searchTerm) ||
            details.includes(searchTerm) ||
            cuisine.includes(searchTerm);

        const matchesRating = rating >= minRating;

        let matchesPrice = true;

        if (selectedPrice === "budget") {
            matchesPrice = price < 200;
        }

        if (selectedPrice === "medium") {
            matchesPrice = price >= 200 && price <= 300;
        }

        if (selectedPrice === "premium") {
            matchesPrice = price > 300;
        }

        const matchesCuisine =
            selectedCuisine === "all" ||
            cuisine.includes(selectedCuisine);

        const restaurantName = card.querySelector(
            ".restaurant-title h3"
        ).textContent.trim();

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

        if (isVisible) {
            resultsCount++;
        }

    });

    const filtersAreActive =
        searchTerm !== "" ||
        minRating > 0 ||
        selectedPrice !== "all" ||
        selectedCuisine !== "all" ||
        showFavoritesOnly;

    if (!filtersAreActive) {

        searchMessage.textContent = "";

    } else if (resultsCount === 0) {

        searchMessage.textContent = showFavoritesOnly
            ? "No favourites yet! Add restaurants using the heart icon ❤️"
            : "No restaurants found. Try changing your search or filters!";

    } else {

        searchMessage.textContent = showFavoritesOnly
            ? `${resultsCount} favourite restaurant(s) found ❤️`
            : `${resultsCount} restaurant(s) found.`;

    }

}


/* ==========================================
   5. SEARCH EVENTS
========================================== */

searchButton.addEventListener("click", filterRestaurants);

searchInput.addEventListener("input", filterRestaurants);

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        filterRestaurants();
    }

});


/* ==========================================
   6. FILTER EVENTS
========================================== */

ratingFilter.addEventListener("change", filterRestaurants);
priceFilter.addEventListener("change", filterRestaurants);
cuisineFilter.addEventListener("change", filterRestaurants);


/* ==========================================
   7. RESET FILTERS
========================================== */

resetFiltersButton.addEventListener("click", () => {

    searchInput.value = "";
    ratingFilter.value = "0";
    priceFilter.value = "all";
    cuisineFilter.value = "all";

    showFavoritesOnly = false;

    filterRestaurants();

});


/* ==========================================
   8. CATEGORY CLICK
========================================== */

categoryCards.forEach((category) => {

    category.addEventListener("click", () => {

        const selectedCategory = category.querySelector(
            "h3"
        ).textContent.toLowerCase();

        searchInput.value = selectedCategory;

        ratingFilter.value = "0";
        priceFilter.value = "all";
        cuisineFilter.value = "all";

        showFavoritesOnly = false;

        filterRestaurants();

        document.querySelector("#restaurants").scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ==========================================
   9. FAVOURITES NAVIGATION
========================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const linkText = link.textContent.trim().toLowerCase();

        if (linkText.includes("favourites")) {

            event.preventDefault();

            showFavoritesOnly = true;

            searchInput.value = "";
            ratingFilter.value = "0";
            priceFilter.value = "all";
            cuisineFilter.value = "all";

            filterRestaurants();

            document.querySelector("#restaurants").scrollIntoView({
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


/* ==========================================
   10. DARK MODE
========================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("cravoraTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {

        themeToggle.textContent = "☀️";
        localStorage.setItem("cravoraTheme", "dark");

    } else {

        themeToggle.textContent = "🌙";
        localStorage.setItem("cravoraTheme", "light");

    }

});


/* ==========================================
   11. SHOPPING CART ELEMENTS
========================================== */

const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const modalCartCount = document.getElementById("modal-cart-count");
const clearCartButton = document.getElementById("clear-cart");

const addToCartButtons = document.querySelectorAll(
    ".add-to-cart-btn"
);


/* ==========================================
   11A. RESTAURANT MENU DATA
========================================== */

const restaurantMenus = {
    "Pizza Paradise": [
        { name: "Margherita Pizza", price: 199, emoji: "🍕", description: "Classic cheese and tomato pizza" },
        { name: "Farmhouse Pizza", price: 299, emoji: "🍕", description: "Loaded with fresh vegetables" },
        { name: "Paneer Tikka Pizza", price: 279, emoji: "🍕", description: "Spicy paneer with creamy cheese" }
    ],

    "Burger House": [
        { name: "Classic Veg Burger", price: 99, emoji: "🍔", description: "Fresh and crispy vegetable patty" },
        { name: "Cheese Burger", price: 149, emoji: "🍔", description: "Burger with extra cheese" },
        { name: "Double Patty Burger", price: 199, emoji: "🍔", description: "Double patty with special sauce" }
    ],

    "Biryani Junction": [
        { name: "Veg Biryani", price: 159, emoji: "🍛", description: "Aromatic rice with vegetables" },
        { name: "Paneer Biryani", price: 199, emoji: "🍛", description: "Delicious paneer and basmati rice" },
        { name: "Special Dum Biryani", price: 249, emoji: "🍛", description: "Traditional dum-style biryani" }
    ],

    "Sweet Cravings": [
        { name: "Chocolate Cake", price: 99, emoji: "🍰", description: "Rich chocolate dessert" },
        { name: "Brownie", price: 89, emoji: "🍫", description: "Soft and chocolatey brownie" },
        { name: "Ice Cream", price: 79, emoji: "🍨", description: "Creamy vanilla ice cream" }
    ],

    "Wok Express": [
        { name: "Veg Hakka Noodles", price: 149, emoji: "🍜", description: "Stir-fried noodles and vegetables" },
        { name: "Veg Fried Rice", price: 139, emoji: "🍚", description: "Chinese-style fried rice" },
        { name: "Manchurian", price: 169, emoji: "🥡", description: "Crispy vegetable balls in sauce" }
    ],

    "Madras Cafe": [
        { name: "Masala Dosa", price: 99, emoji: "🥞", description: "Crispy dosa with potato filling" },
        { name: "Idli Sambhar", price: 79, emoji: "🥘", description: "Soft idlis with hot sambhar" },
        { name: "Mysore Dosa", price: 119, emoji: "🥞", description: "Spicy Mysore-style dosa" }
    ],

    "Mexican Fiesta": [
        { name: "Veg Tacos", price: 149, emoji: "🌮", description: "Tacos filled with fresh vegetables" },
        { name: "Veg Burrito", price: 179, emoji: "🌯", description: "Mexican-style stuffed wrap" },
        { name: "Nachos", price: 129, emoji: "🧀", description: "Crunchy nachos with cheese" }
    ],

    "Pasta Point": [
        { name: "White Sauce Pasta", price: 179, emoji: "🍝", description: "Creamy white sauce pasta" },
        { name: "Red Sauce Pasta", price: 169, emoji: "🍝", description: "Classic tomato sauce pasta" },
        { name: "Cheese Macaroni", price: 199, emoji: "🧀", description: "Cheesy baked macaroni" }
    ],

    "Desi Street Kitchen": [
        { name: "Pani Puri", price: 49, emoji: "🥙", description: "Crispy puris with tangy water" },
        { name: "Aloo Tikki", price: 69, emoji: "🥔", description: "Crispy potato patties" },
        { name: "Samosa", price: 39, emoji: "🥟", description: "Traditional crispy samosa" }
    ],

    "Sandwich Studio": [
        { name: "Veg Sandwich", price: 99, emoji: "🥪", description: "Fresh vegetable sandwich" },
        { name: "Cheese Sandwich", price: 129, emoji: "🥪", description: "Grilled sandwich with cheese" },
        { name: "Paneer Sandwich", price: 149, emoji: "🥪", description: "Spiced paneer sandwich" }
    ]
};

/* ==========================================
   12. UPDATE CART
========================================== */

function updateCart() {

    localStorage.setItem("cravoraCart", JSON.stringify(cart));

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
                <strong>${escapeTrackingText(item.name)}</strong>
                <p>₹${item.price} × ${item.quantity}</p>
                <strong>₹${item.price * item.quantity}</strong>
            </div>

            <div class="cart-quantity">
                <button class="quantity-btn" data-action="decrease"
                    data-index="${index}">−</button>

                <span>${item.quantity}</span>

                <button class="quantity-btn" data-action="increase"
                    data-index="${index}">+</button>

                <button class="remove-item" data-index="${index}">
                    Remove
                </button>
            </div>
        </div>
    `).join("");

    const total = calculateCartTotal();

    cartItems.insertAdjacentHTML("beforeend", `
        <div class="cart-total">
            <h3>Subtotal: ₹${total}</h3>
        </div>
    `);
}


/* ==========================================
   13. OPEN RESTAURANT MENU
========================================== */

addToCartButtons.forEach(button => {

    button.textContent = "View Menu";

    button.addEventListener("click", () => {

        const restaurantName = button.dataset.name;

        if (restaurantName) {
            openRestaurantMenu(restaurantName);
        }

    });

});


/* ==========================================
   14. OPEN AND CLOSE CART
========================================== */

cartButton.addEventListener("click", () => {

    updateCart();

    cartModal.style.display = "flex";

});

closeCart.addEventListener("click", () => {

    cartModal.style.display = "none";

});

cartModal.addEventListener("click", (event) => {

    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }

});


/* ==========================================
   15. CART QUANTITY AND REMOVE EVENTS
========================================== */

cartItems.addEventListener("click", event => {

    const index = Number(event.target.dataset.index);

    if (event.target.classList.contains("remove-item")) {

        cart.splice(index, 1);
        updateCart();
        return;
    }

    if (event.target.dataset.action === "increase") {

        cart[index].quantity++;
        updateCart();
    }

    if (event.target.dataset.action === "decrease") {

        cart[index].quantity--;

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        updateCart();
    }

});

/* ==========================================
   16. CLEAR CART
========================================== */

clearCartButton.addEventListener("click", () => {

    cart = [];

    updateCart();

});


/* ==========================================
   17. INITIAL PAGE SETUP
========================================== */

searchInput.value = "";

ratingFilter.value = "0";
priceFilter.value = "all";
cuisineFilter.value = "all";

showFavoritesOnly = false;

restaurantCards.forEach(card => {
    card.hidden = false;
});

searchMessage.textContent = "";

updateCart();
filterRestaurants();


/* ==========================================
   18. CHECKOUT FEATURE
========================================== */

// Checkout button

const checkoutButton = document.createElement("button");

checkoutButton.id = "checkout-button";
checkoutButton.textContent = "Proceed to Checkout";
checkoutButton.className = "checkout-button";

clearCartButton.parentElement.appendChild(checkoutButton);


// Checkout modal

const checkoutModal = document.createElement("div");

checkoutModal.id = "checkout-modal";
checkoutModal.className = "checkout-modal";

checkoutModal.innerHTML = `
    <div class="checkout-content">

        <button type="button" id="close-checkout"
            class="close-checkout">&times;</button>

        <h2>Complete Your Order</h2>

        <p class="checkout-subtitle">
            Enter your delivery details below.
        </p>

        <div id="checkout-summary"></div>

        <form id="checkout-form">

            <label for="customer-name">Full Name</label>
            <input type="text" id="customer-name"
                placeholder="Enter your name" required>

            <label for="customer-phone">Phone Number</label>
            <input type="tel" id="customer-phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}" maxlength="10" required>

            <label for="customer-address">Delivery Address</label>
            <textarea id="customer-address"
                placeholder="Enter your complete address"
                required></textarea>

            <label for="payment-method">Payment Method</label>

            <select id="payment-method">
                <option value="Cash on Delivery">
                    Cash on Delivery
                </option>

                <option value="Online Demo Payment">
                    Online Payment (Demo)
                </option>
            </select>

            <h3 id="checkout-total"></h3>

            <button type="submit" class="place-order-button">
                Place Order
            </button>

        </form>

    </div>
`;

document.body.appendChild(checkoutModal);


/* ==========================================
   19. CALCULATE CART TOTAL
========================================== */

function getRestaurantPrice(itemName) {

    const card = [...restaurantCards].find(card => {

        const name = card.querySelector(
            ".restaurant-title h3"
        ).textContent.trim();

        return name === itemName;

    });

    return Number(card?.dataset.price) || 0;

}

function calculateCartTotal() {

    return cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

}


/* ==========================================
   20. CHECKOUT SUMMARY
========================================== */

function updateCheckoutSummary() {

    const summary = document.getElementById("checkout-summary");

    if (cart.length === 0) {
        summary.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("checkout-total").textContent = "";
        return;
    }

    summary.innerHTML = cart.map(item => `

        <div class="checkout-item">

            <span>
                ${escapeTrackingText(item.name)} × ${item.quantity}
            </span>

            <strong>₹${item.price * item.quantity}</strong>

        </div>

    `).join("");

    document.getElementById("checkout-total").textContent =
        `Total Amount: ₹${calculateCartTotal()}`;

}


/* ==========================================
   21. OPEN AND CLOSE CHECKOUT
========================================== */

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty! Add something first.");

        return;

    }

    updateCheckoutSummary();

    cartModal.style.display = "none";
    checkoutModal.style.display = "flex";

});


document.getElementById("close-checkout").addEventListener("click", () => {

    checkoutModal.style.display = "none";

});


checkoutModal.addEventListener("click", (event) => {

    if (event.target === checkoutModal) {

        checkoutModal.style.display = "none";

    }

});


/* ==========================================
   22. ORDER HISTORY BUTTON AND MODAL
========================================== */

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

        <button type="button" id="close-order-history"
            class="close-checkout">&times;</button>

        <h2>📦 My Orders</h2>

        <p class="checkout-subtitle">
            Your previous orders
        </p>

        <div id="order-history-list"></div>

    </div>
`;

document.body.appendChild(orderHistoryModal);


/* ==========================================
   23. DISPLAY ORDER HISTORY
========================================== */

function displayOrderHistory() {

    const list = document.getElementById("order-history-list");

    if (orderHistory.length === 0) {

        list.innerHTML = `
            <p>You haven't placed any orders yet.</p>
        `;

        return;

    }

    list.innerHTML = orderHistory.map(order => {

        const orderItems = order.items.map(item => {

            // Support older orders containing plain text
            if (typeof item === "string") {
                return `<li>${escapeTrackingText(item)}</li>`;
            }

            return `
                <li>
                    ${escapeTrackingText(item.name)}
                    × ${item.quantity}
                    — ₹${item.price * item.quantity}
                </li>
            `;

        }).join("");

        const totalQuantity = order.items.reduce((total, item) => {
            return total + (
                typeof item === "string"
                    ? 1
                    : Number(item.quantity) || 1
            );
        }, 0);

        return `

            <div class="order-history-card">

                <h3>Order #${escapeTrackingText(order.id)}</h3>

                <p>${escapeTrackingText(order.date)}</p>

                <p>
                    <strong>Items:</strong> ${totalQuantity}
                </p>

                <p>
                    <strong>Total:</strong> ₹${Number(order.total) || 0}
                </p>

                <div class="order-status">
                    <span>●</span>
                    ${escapeTrackingText(order.status)}
                </div>

                <details>

                    <summary>View Order Details</summary>

                    <ul>
                        ${orderItems}
                    </ul>

                    <p>
                        <strong>Payment:</strong>
                        ${escapeTrackingText(order.payment)}
                    </p>

                </details>

            </div>

        `;

    }).join("");

}



/* ==========================================
   24. OPEN AND CLOSE ORDER HISTORY
========================================== */

orderHistoryButton.addEventListener("click", () => {

    displayOrderHistory();

    cartModal.style.display = "none";
    orderHistoryModal.style.display = "flex";

});


document.getElementById("close-order-history")
    .addEventListener("click", () => {

        orderHistoryModal.style.display = "none";

    });


orderHistoryModal.addEventListener("click", (event) => {

    if (event.target === orderHistoryModal) {

        orderHistoryModal.style.display = "none";

    }

});


/* ==========================================
   25. PLACE ORDER AND SAVE ORDER HISTORY
========================================== */

document.getElementById("checkout-form").addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        if (cart.length === 0) {

            alert("Your cart is empty!");

            checkoutModal.style.display = "none";

            return;

        }

        const customerName = document.getElementById(
            "customer-name"
        ).value.trim();

        const customerPhone = document.getElementById(
            "customer-phone"
        ).value.trim();

        const customerAddress = document.getElementById(
            "customer-address"
        ).value.trim();

        const paymentMethod = document.getElementById(
            "payment-method"
        ).value;

        const total = calculateCartTotal();

        // Create new order

        const newOrder = {

            id: "CRV" + Date.now().toString().slice(-6),

         items: cart.map(item => ({ ...item })),

            total: total,

            date: new Date().toLocaleString("en-IN"),

            status: "Order Placed",

            payment: paymentMethod,

            customerName: customerName,

            customerPhone: customerPhone,

            customerAddress: customerAddress

        };


        // Save order

        orderHistory.unshift(newOrder);

        localStorage.setItem(
            "cravoraOrders",
            JSON.stringify(orderHistory)
        );


        // Confirmation message

        alert(
            `🎉 Order Placed Successfully!\n\n` +
            `Thank you, ${customerName}!\n` +
            `Order ID: #${newOrder.id}\n` +
            `Total Amount: ₹${total}\n` +
            `Payment: ${paymentMethod}\n\n` +
            `Your order has been saved in My Orders.`
        );


        // Empty cart

        cart = [];

        updateCart();


        // Close checkout

        checkoutModal.style.display = "none";


        // Reset form

        document.getElementById("checkout-form").reset();

    }

);


/* ==========================================
   END OF CRAVORA JAVASCRIPT
========================================== */

/* ==========================================
   26. ORDER TRACKING
========================================== */

const trackingInput = document.getElementById("tracking-order-id");
const trackOrderButton = document.getElementById("track-order-button");
const trackingMessage = document.getElementById("tracking-message");
const trackingResult = document.getElementById("tracking-result");

const trackingResultId = document.getElementById("tracking-result-id");
const trackingStatus = document.getElementById("tracking-status");

const trackingSteps = document.querySelectorAll(".tracking-step");

// Available demo delivery stages
const deliveryStages = [
    "Order Placed",
    "Preparing Food",
    "Out for Delivery",
    "Delivered"
];


/* ==========================================
   27. TRACK ORDER FUNCTION
========================================== */

function trackOrder() {

    const enteredId = trackingInput.value.trim().toUpperCase();

    trackingMessage.textContent = "";
    trackingResult.hidden = true;

    if (!enteredId) {
        trackingMessage.textContent = "Please enter your Order ID.";
        return;
    }

    // Find the order in saved order history
    const foundOrder = orderHistory.find(order =>
        order.id.toUpperCase() === enteredId
    );

    if (!foundOrder) {
        trackingMessage.textContent =
            "Order not found! Please check your Order ID.";
        return;
    }

    // Show order information
    trackingResult.hidden = false;
    trackingResultId.textContent = "#" + foundOrder.id;

    // Find the current delivery stage
    let currentStage = deliveryStages.indexOf(foundOrder.status);

    if (currentStage === -1) {
        currentStage = 0;
    }

    trackingStatus.textContent = foundOrder.status;

    // Update timeline
    trackingSteps.forEach((step, index) => {

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

    // Show additional order details
    let extraInfo = document.getElementById("tracking-extra-info");

    if (!extraInfo) {

        extraInfo = document.createElement("div");
        extraInfo.id = "tracking-extra-info";

        const orderInfo = trackingResult.querySelector(
            ".tracking-order-info"
        );

        orderInfo.insertAdjacentElement("afterend", extraInfo);

    }

    extraInfo.innerHTML = `
        <p><strong>Customer:</strong> ${escapeTrackingText(foundOrder.customerName || "Customer")}</p>
        <p><strong>Total Amount:</strong> ₹${Number(foundOrder.total) || 0}</p>
        <p><strong>Order Date:</strong> ${escapeTrackingText(foundOrder.date || "")}</p>
        <p><strong>Items:</strong> ${foundOrder.items.length}</p>
    `;

}


/* ==========================================
   28. SAFE TEXT DISPLAY
========================================== */

function escapeTrackingText(value) {

    const element = document.createElement("span");
    element.textContent = String(value);

    return element.innerHTML;

}


/* ==========================================
   29. TRACK BUTTON EVENTS
========================================== */

trackOrderButton.addEventListener("click", trackOrder);

trackingInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        trackOrder();
    }

});


/* ==========================================
   30. TRACK ORDER FROM MY ORDERS
========================================== */

// Add Track Order button to every saved order

const originalDisplayOrderHistory = displayOrderHistory;

displayOrderHistory = function () {

    originalDisplayOrderHistory();

    document.querySelectorAll(".order-history-card").forEach((card, index) => {

        const order = orderHistory[index];

        if (!order) return;

        const trackButton = document.createElement("button");

        trackButton.type = "button";
        trackButton.className = "checkout-button track-saved-order";
        trackButton.textContent = "📦 Track This Order";
        trackButton.dataset.orderId = order.id;

        card.appendChild(trackButton);

    });

};


// Handle clicks on Track This Order buttons

document.getElementById("order-history-list").addEventListener(
    "click",
    (event) => {

        const button = event.target.closest(".track-saved-order");

        if (!button) return;

        const orderId = button.dataset.orderId;

        orderHistoryModal.style.display = "none";

        document.querySelector("#track-order").scrollIntoView({
            behavior: "smooth"
        });

        trackingInput.value = orderId;

        trackOrder();

    }
);

/* ==========================================
   31. RESTAURANT MENU MODAL
========================================== */

const menuModal = document.createElement("div");

menuModal.id = "menu-modal";
menuModal.className = "checkout-modal";

menuModal.innerHTML = `
    <div class="checkout-content menu-content">

        <button type="button" id="close-menu"
            class="close-checkout">&times;</button>

        <h2 id="menu-restaurant-name">Restaurant Menu</h2>

        <p class="checkout-subtitle">
            Choose your favourite food
        </p>

        <div id="menu-items"></div>

    </div>
`;

document.body.appendChild(menuModal);

const menuItemsContainer = document.getElementById("menu-items");

function openRestaurantMenu(restaurantName) {

    const menu = restaurantMenus[restaurantName];

    if (!menu) {
        alert("Menu is not available for this restaurant yet.");
        return;
    }

    document.getElementById("menu-restaurant-name").textContent =
        restaurantName;

    menuItemsContainer.innerHTML = menu.map((item, index) => `

        <div class="menu-item">

            <div class="menu-food-icon">${item.emoji}</div>

            <div class="menu-food-info">

                <h3>${escapeTrackingText(item.name)}</h3>

                <p>${escapeTrackingText(item.description)}</p>

                <strong>₹${item.price}</strong>

            </div>

            <button class="menu-add-button"
                data-menu-index="${index}"
                data-restaurant="${escapeTrackingText(restaurantName)}">

                + Add

            </button>

        </div>

    `).join("");

    menuModal.style.display = "flex";

}


// Add food item to cart

menuItemsContainer.addEventListener("click", event => {

    const button = event.target.closest(".menu-add-button");

    if (!button) return;

    const restaurantName = button.dataset.restaurant;
    const itemIndex = Number(button.dataset.menuIndex);

    const selectedItem = restaurantMenus[restaurantName][itemIndex];

    const existingItem = cart.find(item =>
        item.name === selectedItem.name &&
        item.restaurant === restaurantName
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: selectedItem.name,
            restaurant: restaurantName,
            price: selectedItem.price,
            quantity: 1
        });

    }

    updateCart();

    button.textContent = "Added ✓";
    button.classList.add("added");

    setTimeout(() => {

        button.textContent = "+ Add";
        button.classList.remove("added");

    }, 1000);

});


// Close menu

document.getElementById("close-menu").addEventListener("click", () => {

    menuModal.style.display = "none";

});

menuModal.addEventListener("click", event => {

    if (event.target === menuModal) {
        menuModal.style.display = "none";
    }

});
