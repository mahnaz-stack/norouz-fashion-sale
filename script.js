// داده‌های محصولات
const products = [   
    {
        "id": 1,
        "name": "لباس ساتن درخشان",
        "image": "https://images.unsplash.com/photo-1765229280390-e05fb240aed8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfhttps://nesfejahanshop.ir/wp-content/uploads/2024/10/203.jpgHx8fGVufDB8fHx8fA%3D%3D",
        "oldPrice": "۵,۵۰۰,۰۰۰",
        "newPrice": "۳,۸۵۰,۰۰۰",
        "rating": 5,
        "category": "مجلسی",
        "description": "لباس مجلسی با طراحی شیک و تزئینات ظریف",
        "discount": 30,        
        "colors": ["مشکی", "سبز تیره", "بورگوندی"],
        "sizes": ["S", "M", "L", "XL"]
    },
    {
        "id": 2,
        "name": "لباس مجلسی بلند زنانه",
        "image": "https://static.esam.ir/sell/itemImages/5146639/27547611_1736363773_595.jpg",
        "oldPrice": "۶,۸۰۰,۰۰۰",
        "newPrice": "۵,۷۵۰,۰۰۰",
        "rating": 5,
        "category": "مجلسی",
        "description": "لباس مجلسی بلند با پارچه حریر و طراحی شاهانه",
        "discount": 30,
        "colors": ["مشکی", "خاکستری ذغالی", "آبی دریایی"],
        "sizes": ["L", "XL", "XXL"]
    },
    {
        "id": 3,
        "name": "لباس رویایی تور ",
        "image": "https://stylema.shop/shop-resources/ZmHtYfkPJa/product-images/1683286837_90495.jpg?size=500x500&rs=fit",
        "oldPrice": "۴,۱۰۰,۰۰۰",
        "newPrice": "۳,۴۷۰,۰۰۰",
        "rating": 4,
        "category": "مجلسی",
        "description": "پیراهن مجلسی با طراحی ایرانی و تزئینات دست‌دوز",
        "discount": 30,
        "colors": ["طلایی", "نقره‌ای", "مرواریدی"],
        "sizes": ["XS", "S", "M"]
    },
    {
        "id": 4,
        "name": "لباس مجلسی شاهانه",
        "image": "https://i1.delgarm.com/i/798/0011/02/61ec2998d1875.jpeg",
        "oldPrice": "۶,۵۰۰,۰۰۰",
        "newPrice": "۵,۵۰۰,۰۰۰",
        "rating": 5,
        "category": "مجلسی",
        "description": "لباس حریر بلند مجلل",
        "discount": 30,
        "colors": ["مشکی", "خاکستری", "آبی"],
        "sizes": ["M", "L", "XL"]
    },
    {
        "id": 5,
        "name": "لباس عروسکی مجلل",
        "image": "https://stylema.shop/shop-resources/ZmHtYfkPJa/product-images/1730831757_10555.jpg?size=500x500&rs=fit",
        "oldPrice": "۴,۸۰۰,۰۰۰",
        "newPrice": "۳,۹۰۰,۰۰۰",
        "rating": 4,
        "category": "مجلسی",
        "description": "لباس مجلسی با تزئینات کریستالی و طراحی مدرن",
        "discount": 30,
        "colors": ["قرمز", "صورتی", "بنفش"],
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 6,
        "name": "لباس ظریف منجوق دوزی",
        "image": "https://nesfejahanshop.ir/wp-content/uploads/2024/10/203.jpg",
        "oldPrice": "۴,۵۰۰,۰۰۰",
        "newPrice": "۳,۱۵۰,۰۰۰",
        "rating": 5,
        "category": "مجلسی",
        "description": "لباس مجلسی بلند، حریر، کریستالی",
        "discount": 30,
        "colors": ["مشکی", "سبز زمردی", "بورگوندی"],
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 7,
        "name": "کت و دامن مجلسی",
        "image": "https://mantomirdamad.com/wp-content/uploads/2023/10/kot-daman8.webp",
        "oldPrice": "۴,۲۰۰,۰۰۰",
        "newPrice": "۲,۹۴۰,۰۰۰",
        "rating": 5,
        "category": "زنانه",
        "description": "ست مجلسی شامل کت و دامن با پارچه ساتن لوکس",
        "discount": 30,
        "colors": ["سفید", "کرم", "آبی پودری"],
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 8,
        "name": "ست دو تیکه مجلل",
        "image": "https://chishi.ir/wp-content/uploads/2024/04/model-kot-daman-rasmi-zanane-1.webp",
        "oldPrice": "۲,۲۰۰,۰۰۰",
        "newPrice": "۸۴۰,۰۰۰",
        "rating": 4,
        "category": "زنانه",
        "description": "کت مجلسی زنانه با تزئینات ظریف",
        "discount": 30,
        "colors": ["سفید", "آبی روشن", "بنفش کمرنگ"],
        "sizes": ["M", "L", "XL"]
    },
    {
        "id": 9,
        "name": "ست کت و دامن مجلسی",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C8SQDs3Q07Yr64BQGGMEYHcUBEsEk8hAAKW3YDjQ_w&s=10",
        "oldPrice": "۲,۰۰۰,۰۰۰",
        "newPrice": "۱,۹۶۰,۰۰۰",
        "rating": 5,
        "category": "زنانه",
        "description":"کت مجلسی زنانه با طراحی منحصر به فرد",
        "discount": 30,
        "colors": ["مشکی", "عاجی", "طلایی روشن"],
        "sizes": ["XS", "S", "M", "L"]
    },
    {
    "id": 10,
        "name": "کت و شلوار کلاسیک ایتالیایی",
        "image": "https://torkjameh.com/155681/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%84%D8%A8%D8%A7%D8%B3-%D9%85%D8%B1%D8%AF%D8%A7%D9%86%D9%87-%DA%A9%D8%AA-%D9%88-%D8%B4%D9%84%D9%88%D8%A7%D8%B1-%D8%B4%DB%8C%DA%A9-%D9%85%D8%B1%D8%AF%D8%A7%D9%86%D9%87-%D8%A2%D9%82%D8%A7%DB%8C%D8%A7%D9%86-marc.jpg",
        "oldPrice": "۳,۵۰۰,۰۰۰",
        "newPrice": "۲,۴۵۰,۰۰۰",
        "rating": 5,
        "category": "مردانه",
        "description": "کت و شلوار مجلسی مردانه ایتالیایی با پارچه سوپر و دوخت ظریف",
        "discount": 30,
        "colors": ["مشکی", "زرشکی", "نavy"],
        "sizes": ["S", "M", "L"]
    },
    {
        "id": 11,
        "name": "کت و شلوار اسپورت مجلسی",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP9Gr-Pmtebb0FTexOrajJbTzxfz5uVmXI0kTqP7xn9-ME4aGDrUMu5zd&s=10",
        "oldPrice": "۲,۸۰۰,۰۰۰",
        "newPrice": "۱,۹۶۰,۰۰۰",
        "rating": 5,
        "category": "مردانه",
        "description": "کت رسمی پشمی با دوخت ایتالیایی و کیفیت عالی",
        "discount": 30,
        "colors": ["مشکی", "خاکستری تیره", "آبی دریایی"],
        "sizes": ["M", "L", "XL", "XXL"]
    },
    {
        "id": 12,
        "name": "کت مردانه رسمی",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6CniNoAMW0SxnIz-m78MhnrzJbBdVndJ6Kyf3pevbC04Q3FdxM41rak&s=10",
        "oldPrice": "۶,۶۰۰,۰۰۰",
        "newPrice": "۵,۲۰۰,۰۰۰",
        "rating": 4,
        "category": "مردانه",
        "description": "کت مجلسی مردانه با طراحی مدرن و دوخت ظریف",
        "discount": 30,
        "colors": ["فیروزه‌ای", "سفید","مشکی",],
        "sizes": ["XS", "S", "M"]
    },
]

// سیستم سبد خرید
const shoppingCart = {
    items: [], //لیست محصولات در سبد
    total: 0,  
    count: 0,
    
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.updateCart();
        this.saveToLocalStorage();
    },
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateCart();
        this.saveToLocalStorage();
    },
    
    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                this.updateCart();
                this.saveToLocalStorage();
            }
        }
    },
    // updateCart() means: محاسبه کن-آپدیت کن
    updateCart() {
        this.count = this.items.reduce((total, item) => total + item.quantity, 0);
        this.total = this.items.reduce((total, item) => {
            const price = parseInt(item.newPrice.replace(/,/g, ''));
            return total + (price * item.quantity);
        }, 0);


        this.updateCartUI();
        
    },
    
    updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = this.count;
            //Animation
            cartCount.classList.add('animate-pulse');
            setTimeout(() => cartCount.classList.remove('animate-pulse'), 300);
        }

        //بروزرسانی شمارشگر در منوی موبایل
        const mobileCartCount = document.querySelector('.mobile-cart-count');
        if (mobileCartCount) {
            mobileCartCount.textContent = this.count;
        }
    },
    
    saveToLocalStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify({
            items: this.items,
            total: this.total,
            count: this.count
        }));
    },
    
    loadFromLocalStorage() {
        const savedCart = localStorage.getItem('shoppingCart');
        if (savedCart) {
            const { items } = JSON.parse(savedCart);
            this.items = items;
            this.updateCart();
        }
    }
};

function setupHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    
    if (!hamburgerBtn || !mobileMenu || !mobileOverlay) return;
    
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        
        // انیمیشن تبدیل به X - کلاس open به active تغییر کرد
        this.classList.toggle('active');
    });
    
    // بستن با دکمه X در منوی موبایل
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // بستن با کلیک روی overlay
    mobileOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        this.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // بستن منو با کلیک روی لینک‌های منوی موبایل
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // بستن با کلید ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // به‌روزرسانی تعداد سبد خرید در منوی موبایل
    function updateMobileCartCount() {
        const mobileCartCount = document.querySelector('.mobile-cart-count');
        if (mobileCartCount) {
            mobileCartCount.textContent = shoppingCart.count || '0';
        }
    }
    
    // وقتی سبد خرید آپدیت شد، تعداد در منوی موبایل هم آپدیت شود
    const originalUpdateCart = shoppingCart.updateCart;
    shoppingCart.updateCart = function() {
        originalUpdateCart.call(this);
        updateMobileCartCount();
    };
    
    // مقداردهی اولیه
    updateMobileCartCount();
}

// متغیرهای شمارش معکوس
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 5); // 5 روز بعد

// ایجاد ستاره‌های رتبه‌بندی
function createRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    // تعداد نظرات تصادفی
    const reviewCount = Math.floor(Math.random() * 100) + 20;
    stars += `<span class="rating-count">(${reviewCount.toLocaleString('fa-IR')})</span>`;
    
    return stars;
}

// محاسبه تخفیف
function calculateDiscount(oldPrice, newPrice) {
    const old = parseInt(oldPrice.replace(/,/g, ''));
    const newP = parseInt(newPrice.replace(/,/g, ''));
    return Math.round(((old - newP) / old) * 100);
}

// سیستم صفحه‌بندی
let currentPage = 1;
const productsPerPage = 6;

// نمایش محصولات
//for each production:
function displayProducts(page = 1) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    // محاسبه محدوده محصولات این صفحه
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);
    
    // پاک کردن container
    productsContainer.innerHTML = '';
    
    // اگر محصولی وجود ندارد
    if (products.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>محصولی یافت نشد</h3>
                <p>لطفاً فیلترهای جستجو را تغییر دهید.</p>
            </div>
        `;
        document.getElementById('pagination').innerHTML = '';
        return;
    }
    
    // نمایش محصولات این صفحه
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const discountPercentage = calculateDiscount(product.oldPrice, product.newPrice);
        const nowruzTexts = ["🎁 نوروزی", "✨ ویژه عید", "🌸 بهاری", "🎉 تخفیف ویژه"];
        const randomText = nowruzTexts[Math.floor(Math.random() * nowruzTexts.length)];
        
        //2-put the HTML inside it
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${discountPercentage > 0 ? `<span class="product-badge">${discountPercentage}% تخفیف</span>` : ''}
                ${product.id %2 === 0 ? `<span class="product-badge nowruz-special">${randomText}</span>` : ''}
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        مشاهده سریع
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="old-price">${product.oldPrice} تومان</span>
                    <span class="new-price">${product.newPrice} تومان</span>
                    ${discountPercentage > 0 ? `<span class="discount-badge">${discountPercentage}%</span>` : ''}
                </div>
                <div class="product-rating">
                    ${createRatingStars(product.rating)}
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-dot" style="background-color: ${getColorCode(color)}"></span>`).join('')}
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    افزودن به سبد خرید
                </button>
            </div>
        `;
        //appendChild() means: Add Child  /3-Add it the page
        productsContainer.appendChild(productCard);
    });
    
    // ایجاد صفحه‌بندی
    createPagination(page);
    
    // وصل کردن رویدادها (بعد از اینکه المنت‌ها ایجاد شدند)
    //setTimeout means: Run this code after a certain time
    setTimeout(() => {
        setupProductEvents();
    }, 0);
}

// ایجاد صفحه‌بندی
function createPagination(currentPage = 1) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // دکمه صفحه قبل
    if (currentPage > 1) {
        paginationHTML += `<button class="page-prev" data-page="${currentPage - 1}">
            <i class="fas fa-arrow-right"></i> قبلی
        </button>`;
    }
    
    // صفحات
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    // دکمه صفحه بعد
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-next" data-page="${currentPage + 1}">
            بعدی <i class="fas fa-arrow-left"></i>
        </button>`;
    }
    
    // نمایش اطلاعات صفحه
    paginationHTML += `<span class="page-info">صفحه ${currentPage} از ${totalPages}</span>`;
    
    paginationContainer.innerHTML = paginationHTML;
    
    // رویدادهای صفحه‌بندی
    paginationContainer.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.dataset.page);
            if (page !== currentPage) {
                currentPage = page;
                displayProducts(currentPage);
                
                // اسکرول به بالای بخش محصولات
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// راه‌اندازی رویدادهای محصولات
function setupProductEvents() {
    let eventsInitialized = false;

function setupProductEvents() {
    // اگر قبلاً وصل شده، دوباره وصل نکن
    if (eventsInitialized) return;
    eventsInitialized = true;
    
    // دکمه‌های افزودن به سبد خرید
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            const button = e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            
            // پیدا کردن محصول از آرایه اصلی
            const product = products.find(p => p.id === productId);
            if (product) {
                shoppingCart.addItem(product);
                showNotification('محصول به سبد خرید اضافه شد!', 'success');
            }
        }
        
        // دکمه‌های مشاهده سریع
        if (e.target.closest('.quick-view-btn')) {
            const button = e.target.closest('.quick-view-btn');
            const productId = parseInt(button.getAttribute('data-id'));
            showQuickView(productId);
        }
    });
    
    // جستجو (با debounce)
    let searchTimeout;
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const searchTerm = this.value.trim().toLowerCase();
            
            searchTimeout = setTimeout(() => {
                filterAndSearch(searchTerm);
            }, 300); // تأخیر 300ms
        });
    }
    
    // فیلتر دسته‌بندی
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const searchInput = document.getElementById('product-search');
            const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
            
            filterAndSearch(searchTerm, filter);
        });
    });
    
    // مرتب‌سازی
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

// تابع جایگزین برای setupProductEvents که فقط یکبار استفاده بشه
function setupProductEventsOnce() {
    eventsInitialized = false;
    setupProductEvents();
}

// تابع sortProducts رو هم اصلاح کن:
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => {
                const aPrice = parseInt(a.newPrice.replace(/,/g, ''));
                const bPrice = parseInt(b.newPrice.replace(/,/g, ''));
                return aPrice - bPrice;
            });
            break;
            
        case 'price-high':
            sortedProducts.sort((a, b) => {
                const aPrice = parseInt(a.newPrice.replace(/,/g, ''));
                const bPrice = parseInt(b.newPrice.replace(/,/g, ''));
                return bPrice - aPrice;
            });
            break;
            
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
            
        case 'discount':
            sortedProducts.sort((a, b) => {
                const aDiscount = calculateDiscount(a.oldPrice, a.newPrice);
                const bDiscount = calculateDiscount(b.oldPrice, b.newPrice);
                return bDiscount - aDiscount;
            });
            break;
    }
    
    // نمایش محصولات مرتب‌شده با صفحه‌بندی
    displayFilteredProducts(sortedProducts);
}
    
    // دکمه‌های افزودن به سبد خرید
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                shoppingCart.addItem(product);
                showNotification('محصول به سبد خرید اضافه شد!', 'success');
            }
        });
    });
    
    // دکمه‌های مشاهده سریع
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showQuickView(productId);
        });
    });
    
    // جستجو
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            filterAndSearch(searchTerm);
        });
    }
    
    // فیلتر دسته‌بندی
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterAndSearch('', filter);
        });
    });
    
    // مرتب‌سازی
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
}

// فیلتر و جستجوی ترکیبی
function filterAndSearch(searchTerm = '', categoryFilter = 'all') {
    let filteredProducts = [...products];
    
    // فیلتر دسته‌بندی
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === categoryFilter
        );
    }
    
    // جستجو
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // به‌روزرسانی نمایش
    displayFilteredProducts(filteredProducts);
}

// به‌روزرسانی محصولات فیلتر شده
function updateFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-lighter); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark-color); margin-bottom: 10px;">محصولی یافت نشد</h3>
                <p style="color: var(--text-light);">لطفاً فیلترهای جستجو را تغییر دهید.</p>
            </div>
        `;
        document.getElementById('pagination').innerHTML = '';
        return;
    }
    
    // نمایش 6 محصول اول
    const pageProducts = filteredProducts.slice(0, 6);
    
    productsContainer.innerHTML = '';
    pageProducts.forEach(product => {
        //createElement() means: Create an element
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const discountPercentage = calculateDiscount(product.oldPrice, product.newPrice);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${discountPercentage > 0 ? `<span class="product-badge">${discountPercentage}% تخفیف</span>` : ''}

                <!--product-badge-->
                ${product.id %2 === 0 ? `<span class="product-badge nowruz-special">نوروزی</span>` : ''}

                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        مشاهده سریع
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="old-price">${product.oldPrice} تومان</span>
                    <span class="new-price">${product.newPrice} تومان</span>
                    ${discountPercentage > 0 ? `<span class="discount-badge">${discountPercentage}%</span>` : ''}
                </div>
                <div class="product-rating">
                    ${createRatingStars(product.rating)}
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-dot" style="background-color: ${getColorCode(color)}"></span>`).join('')}
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    افزودن به سبد خرید
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // صفحه‌بندی رو مخفی کن
    document.getElementById('pagination').innerHTML = '';
    
    // وصل کردن رویدادها
    setTimeout(setupProductEvents, 0);
}

// مرتب‌سازی محصولات
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => {
                const aPrice = parseInt(a.newPrice.replace(/,/g, ''));
                const bPrice = parseInt(b.newPrice.replace(/,/g, ''));
                return aPrice - bPrice;
            });
            break;
            
        case 'price-high':
            sortedProducts.sort((a, b) => {
                const aPrice = parseInt(a.newPrice.replace(/,/g, ''));
                const bPrice = parseInt(b.newPrice.replace(/,/g, ''));
                return bPrice - aPrice;
            });
            break;
            
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
            
        case 'discount':
            sortedProducts.sort((a, b) => {
                const aDiscount = calculateDiscount(a.oldPrice, a.newPrice);
                const bDiscount = calculateDiscount(b.oldPrice, b.newPrice);
                return bDiscount - aDiscount;
            });
            break;
    }
    
    // نمایش محصولات مرتب‌شده
    updateFilteredProducts(sortedProducts);
}

// Pop-up تبلیغاتی
function setupPromoPopup() {
    const popup = document.getElementById('promoPopup');
    const closeBtn = document.getElementById('closePopup');
    const yesBtn = document.getElementById('popupYes');
    const noBtn = document.getElementById('popupNo');
    const dontShowCheckbox = document.getElementById('dontShowAgain');

    
    if (!popup) return;
    
    // چک کن قبلاً کاربر Pop-up رو نبینده
    const hasSeenPopup = localStorage.getItem('hasSeenPromoPopup');
    const dontShowAgain = localStorage.getItem('dontShowPromoPopup');
    
    // اگر قبلاً دیده یا انتخاب کرده نبیند، نمایش نده
    if (dontShowAgain === 'true') {
        return;
    }
    
    // نمایش Pop-up بعد از 2 ثانیه
    setTimeout(() => {
        //classList.add() means: add class
        popup.classList.add('show');
        document.body.style.overflow = 'hidden'; // جلوگیری از اسکرول
        
        // ذخیره اینکه کاربر Pop-up رو دیده
        localStorage.setItem('hasSeenPromoPopup', 'true');
    }, 2000);
    
    // بستن Pop-up
    function closePopup() {
        popup.classList.remove('show');
        document.body.style.overflow = ''; // بازگشت اسکرول
        
        // اگر کاربر انتخاب کرده دیگه نشون نده
        if (dontShowCheckbox.checked) {
            localStorage.setItem('dontShowPromoPopup', 'true');
            localStorage.setItem('hasSeenPromoPopup', 'true');
        }
        
        // انیمیشن بسته شدن
        setTimeout(() => {
            popup.style.display = 'none';
        }, 400);
    }
    
    // رویدادهای کلیک
    closeBtn?.addEventListener('click', closePopup);
    
    noBtn?.addEventListener('click', closePopup);
    
    yesBtn?.addEventListener('click', function() {
        // بستن Pop-up
        closePopup();
        
        // نمایش پیام موفقیت
        showNotification('🎉 کد تخفیف ۲۰٪ برای شما فعال شد! کد: NOWRUZ1405', 'success');
        
        // رفتن به بخش محصولات
        setTimeout(() => {
            document.getElementById('products')?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
        
        // ذخیره در localStorage
        localStorage.setItem('promoCodeUsed', 'NOWRUZ1405');
        
        // اگر چک‌باکس انتخاب شده
        if (dontShowCheckbox.checked) {
            localStorage.setItem('dontShowPromoPopup', 'true');
        }
    });
    
    // بستن با کلیک خارج از محتوا
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // بستن با کلید ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            closePopup();
        }
    });
}

// مشاهده سریع محصول
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    const discountPercentage = calculateDiscount(product.oldPrice, product.newPrice);
    
    modal.innerHTML = `
        <div class="quick-view-content" style="
            background: white;
            border-radius: var(--border-radius-lg);
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        ">
            <div class="quick-view-header" style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid var(--medium-gray);
            ">
                <h3 style="margin: 0; color: var(--dark-color);">${product.name}</h3>
                <button class="close-modal" style="
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--dark-gray);
                ">×</button>
            </div>
            <div class="quick-view-body" style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                padding: 30px;
            ">
                <div class="quick-view-image">
                    <img src="${product.image}" alt="${product.name}" style="
                        width: 100%;
                        border-radius: var(--border-radius-md);
                        box-shadow: var(--shadow-md);
                    ">
                </div>
                <div class="quick-view-details">
                    <span class="product-category" style="
                        display: inline-block;
                        background: var(--primary-light);
                        color: var(--primary-color);
                        padding: 5px 15px;
                        border-radius: var(--border-radius-full);
                        font-size: 0.9rem;
                        margin-bottom: 15px;
                    ">${product.category}</span>
                    <h2 style="margin: 0 0 15px; color: var(--dark-color);">${product.name}</h2>
                    <p style="color: var(--text-light); line-height: 1.7; margin-bottom: 20px;">${product.description}</p>
                    
                    <div class="price-section" style="margin-bottom: 25px;">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                            <span class="old-price" style="text-decoration: line-through; color: var(--dark-gray); font-size: 1.2rem;">${product.oldPrice} تومان</span>
                            <span class="new-price" style="color: var(--secondary-color); font-size: 1.8rem; font-weight: 800;">${product.newPrice} تومان</span>
                            ${discountPercentage > 0 ? `<span class="discount-badge" style="
                                background: var(--secondary-light);
                                color: var(--secondary-color);
                                padding: 5px 12px;
                                border-radius: var(--border-radius-full);
                                font-weight: 700;
                            ">${discountPercentage}% تخفیف</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="rating-section" style="margin-bottom: 25px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            ${createRatingStars(product.rating)}
                        </div>
                    </div>
                    
                    <div class="options-section" style="margin-bottom: 30px;">
                        <div style="margin-bottom: 15px;">
                            <strong style="display: block; margin-bottom: 10px; color: var(--dark-color);">رنگ‌بندی:</strong>
                            <div style="display: flex; gap: 10px;">
                                ${product.colors.map(color => `
                                    <label style="display: flex; align-items: center; gap: 5px; cursor: pointer;">
                                        <input type="radio" name="color" value="${color}">
                                        <span class="color-dot" style="
                                            width: 25px;
                                            height: 25px;
                                            border-radius: 50%;
                                            background-color: ${getColorCode(color)};
                                            border: 2px solid var(--medium-gray);
                                        "></span>
                                        <span>${color}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div>
                            <strong style="display: block; margin-bottom: 10px; color: var(--dark-color);">سایز:</strong>
                            <div style="display: flex; gap: 10px;">
                                ${product.sizes.map(size => `
                                    <label style="cursor: pointer;">
                                        <input type="radio" name="size" value="${size}">
                                        <span style="
                                            display: inline-block;
                                            padding: 8px 16px;
                                            border: 2px solid var(--medium-gray);
                                            border-radius: var(--border-radius-sm);
                                            transition: var(--transition-fast);
                                        ">${size}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 15px;">
                        <button class="add-to-cart-quick" data-id="${product.id}" style="
                            flex: 1;
                            padding: 15px;
                            background: var(--primary-gradient);
                            color: white;
                            border: none;
                            border-radius: var(--border-radius-md);
                            font-weight: 700;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            transition: var(--transition-normal);
                        ">
                            <i class="fas fa-shopping-cart"></i>
                            افزودن به سبد خرید
                        </button>
                        <button class="buy-now" data-id="${product.id}" style="
                            padding: 15px 30px;
                            background: var(--accent-gradient);
                            color: white;
                            border: none;
                            border-radius: var(--border-radius-md);
                            font-weight: 700;
                            cursor: pointer;
                            transition: var(--transition-normal);
                        ">
                            خرید مستقیم
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // بستن مودال
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        }
    });
    
    // افزودن به سبد خرید از طریق مودال
    modal.querySelector('.add-to-cart-quick').addEventListener('click', () => {
        shoppingCart.addItem(product);
        showNotification('محصول به سبد خرید اضافه شد!', 'success');
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    });
    
    // خرید مستقیم
    modal.querySelector('.buy-now').addEventListener('click', () => {
        shoppingCart.addItem(product);
        showNotification('در حال انتقال به صفحه پرداخت...', 'info');
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
        setTimeout(() => {
            window.location.href = '#checkout';
        }, 500);
    });
    
    // انیمیشن ظاهر شدن
    setTimeout(() => {
        modal.querySelector('.quick-view-content').style.transform = 'translateY(0)';
    }, 50);
}

// تبدیل نام رنگ به کد HEX
function getColorCode(colorName) {
    const colorMap = {
        'قرمز': '#e74c3c',
        'آبی': '#3498db',
        'سفید': '#ffffff',
        'مشکی': '#2c3e50',
        'صورتی': '#ff6b8b',
        'بنفش': '#9b59b6',
        'طلایی': '#f1c40f',
        'نقره‌ای': '#bdc3c7',
        'خاکستری': '#95a5a6'
    };
    
    return colorMap[colorName] || '#3498db';
}

// شمارش معکوس
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    if (distance < 0) {
        document.querySelector('.countdown-title').textContent = 'حراجی نوروزی به پایان رسید!';
        document.querySelector('.countdown').style.display = 'none';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '۰');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '۰');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '۰');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '۰');
    
    // انیمیشن تغییر ثانیه
    if (secondsEl) {
        secondsEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            secondsEl.style.transform = 'scale(1)';
        }, 100);
    }
}

// نمایش اعلان
function showNotification(message, type = 'success') {
    //create a new <div> for the announcement
    const notification = document.createElement('div');
    //hive it CSS classes
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: '<i class="fas fa-check-circle"></i>',
        error: '<i class="fas fa-exclamation-circle"></i>',
        info: '<i class="fas fa-info-circle"></i>',
        warning: '<i class="fas fa-exclamation-triangle"></i>'
    };
    
    //insert the message text inside it
    notification.innerHTML = `
        <div class="notification-icon">
            ${icons[type] || icons.success}
        </div>
        <div class="notification-content">
            ${message}
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    //Appearance styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius-md);
        z-index: 10000;
        box-shadow: var(--shadow-lg);
        display: flex;
        align-items: center;
        gap: 15px;
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 350px;
        background: ${getNotificationBackground(type)};
    `;
    
    //add the announcement to the page
    document.body.appendChild(notification);
    //add the notification to the bottom of the banner
    
    // نمایش اعلان
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // close notification button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // حذف خودکار بعد از 4 ثانیه
    const autoRemove = setTimeout(() => {
        notification.style.transform = 'translateX(-100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
    
    // توقف حذف خودکار هنگام هاور
    notification.addEventListener('mouseenter', () => {
        clearTimeout(autoRemove);
    });
    
    notification.addEventListener('mouseleave', () => {
        setTimeout(() => {
            notification.style.transform = 'translateX(-100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    });
}

// رنگ اعلان بر اساس نوع
function getNotificationColor(type) {
    const colors = {
        success: 'var(--primary-gradient)',
        error: 'var(--secondary-gradient)',
        info: 'linear-gradient(135deg, var(--dark-light) 0%, var(--dark-color) 100%)',
        warning: 'var(--accent-gradient)'
    };
    
    return colors[type] || colors.success;
}

function getNotificationBackground(type) {
    switch(type) {
        case 'success': return '#4CAF50';
        case 'error': return '#FF5252';
        case 'info': return '#2196F3';
        case 'warning': return '#FF9800';
        default: return '#4CAF50';
    }
}
    
// سوالات متداول
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = question.nextElementSibling;

            //بستن سوالات دیگر
            questions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('open');
                }
            });

            //باز/بستن سوال فعلی 
            question.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });
});        

function setupFaq() {
    const questions = document .querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function() {
            const answer = question.nextElementSibling;    
        });
    });
}

/**
 * Newsletter Module - Professional Version
 * با قابلیت‌های کامل اعتبارسنجی، مدیریت خطا و UX پیشرفته
 */

function setupNewsletterForm() {
    const form = document .getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        //اعتبارسنجی
        if (!name) {
            showNotification('لطفا نام خود را وارد کنید', 'error');
            nameInput.focus();
            return;
        }

        if (!email) {
            showNotification('لطفا ایمیل معتبر وارد کنید', 'error');
            emailInput.focus();
            return;
        }

        // شبیه‌سازی ارسال به سرور
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spainner"></i>در حال ارسال...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification(`ممنون ${name}! کد تخفیف ۲۰٪ به ایمیل ${email} ارسال شد`, 'success');

            // بازنشانی فرم
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            //ذخیره در localStorage
            saveSubscription(email, name);
        }, 1500);
    });
}

//اعتبارسنجی ایمیل
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ذخیره اشتراک
function saveSubscription(email, name) {
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
    const existingIndex = subscriptions.findIndex(sub => sub.email === email);
    
    if (existingIndex === -1) {
        subscriptions.push({
            email,
            name,
            date: new Date().toISOString(),
            discountCode: 'DISCOUNT20'
        });
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
    }
}

class NewsletterManager {
    constructor() {
        this.form = document.getElementById('newsletter-form');
        this.successState = document.getElementById('success-state');
        this.submitBtn = this.form?.querySelector('.btn-newsletter');
        this.originalBtnText = this.submitBtn?.innerHTML;
        
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // تنظیم event listeners
        this.setupEventListeners();
        
        // تنظیم اعتبارسنجی real-time
        this.setupRealTimeValidation();
        
        // نمایش آخرین اشتراک (در صورت وجود)
        this.displayLastSubscription();
    }
    
    setupEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // دکمه ثبت‌نام جدید
        const newSubBtn = document.getElementById('new-subscription');
        if (newSubBtn) {
            newSubBtn.addEventListener('click', this.resetForm.bind(this));
        }
    }
    
    setupRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input[data-validation]');
        
        inputs.forEach(input => {
            // Validation on blur
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            // Clear validation on focus
            input.addEventListener('focus', () => {
                this.clearFieldError(input);
            });
            
            // Real-time validation for email
            if (input.type === 'email') {
                input.addEventListener('input', (e) => {
                    if (e.target.value.length > 3) {
                        this.validateField(input);
                    }
                });
            }
        });
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        // اعتبارسنجی کامل
        if (!this.validateForm()) {
            this.shakeForm();
            return;
        }
        
        // جمع‌آوری داده‌ها
        const formData = this.collectFormData();
        
        // نمایش حالت loading
        this.setLoadingState(true);
        
        try {
            // شبیه‌سازی درخواست به سرور
            await this.submitToServer(formData);
            
            // نمایش موفقیت
            this.showSuccessState(formData);
            
            // ذخیره در localStorage
            this.saveSubscription(formData);
            
            // ریست فرم
            this.form.reset();
            
            // ارسال رویداد برای analytics
            this.dispatchSubscriptionEvent(formData);
            
        } catch (error) {
            // نمایش خطا
            this.showError('خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.');
            console.error('Newsletter submission error:', error);
        } finally {
            // خاتمه loading
            this.setLoadingState(false);
        }
    }
    
    collectFormData() {
        return {
            name: this.form.querySelector('#newsletter-name').value.trim(),
            email: this.form.querySelector('#newsletter-email').value.trim().toLowerCase(),
            date: new Date().toISOString(),
            timestamp: Date.now(),
            source: 'website_newsletter'
        };
    }
    
    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input[data-validation]');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    validateField(input) {
        const value = input.value.trim();
        const validationType = input.dataset.validation;
        const errorElement = document.getElementById(`${input.id}-error`);
        
        let isValid = true;
        let errorMessage = '';
        
        switch(validationType) {
            case 'name':
                if (!value) {
                    errorMessage = 'لطفا نام خود را وارد کنید';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = 'نام باید حداقل ۲ کاراکتر باشد';
                    isValid = false;
                } else if (!/^[\u0600-\u06FF\s]+$/.test(value)) {
                    errorMessage = 'لطفا نام را به فارسی وارد کنید';
                    isValid = false;
                }
                break;
                
            case 'email':
                if (!value) {
                    errorMessage = 'لطفا ایمیل خود را وارد کنید';
                    isValid = false;
                } else if (!this.isValidEmail(value)) {
                    errorMessage = 'لطفا یک ایمیل معتبر وارد کنید';
                    isValid = false;
                }
                break;
        }
        
        // به‌روزرسانی وضعیت فیلد
        this.updateFieldState(input, isValid, errorMessage, errorElement);
        
        return isValid;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const persianEmailRegex = /^[\u0600-\u06FF\s@.]+$/;
        
        // بررسی ساختار عمومی ایمیل
        if (!emailRegex.test(email)) return false;
        
        // بررسی کاراکترهای فارسی (اگر وجود دارد)
        if (persianEmailRegex.test(email.split('@')[0])) return false;
        
        return true;
    }
    
    updateFieldState(input, isValid, errorMessage, errorElement) {
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.className = `validation-message ${isValid ? '' : 'error'}`;
            errorElement.style.display = isValid ? 'none' : 'block';
        }
        
        input.classList.toggle('invalid', !isValid);
        input.setAttribute('aria-invalid', !isValid);
        
        if (!isValid) {
            input.setAttribute('aria-describedby', errorElement.id);
        } else {
            input.removeAttribute('aria-describedby');
        }
    }
    
    clearFieldError(input) {
        const errorElement = document.getElementById (`${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        input.classList.remove('invalid');
        input.removeAttribute('aria-describedby');
    }
    
    async submitToServer(formData) {
        // شبیه‌سازی تاخیر شبکه
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // شبیه‌سازی خطای تصادفی (۵٪ احتمال)
        if (Math.random() < 0.05) {
            throw new Error('Network error simulation');
        }
        
        // تولید کد تخفیف
        const discountCode = this.generateDiscountCode(formData.name);
        
        return {
            success: true,
            discountCode,
            message:` اشتراک شما با موفقیت ثبت شد! کد تخفیف به ${formData.email} ارسال شد.`
        };
    }
    
    generateDiscountCode(name) {
        const prefix = 'DISCOUNT';
        const nameCode = name.substring(0, 3).toUpperCase();
        const randomNum = Math.floor(100 + Math.random() * 900);
        const dateCode = new Date().getDate();
        
        return `${prefix}${nameCode}${randomNum}${dateCode}`;
    }
    
    showSuccessState(formData) {
        const discountCode = this.generateDiscountCode(formData.name);
        const successMessage = document.getElementById('success-message');
        const discountElement = document.getElementById('discount-code');
        
        // به‌روزرسانی متن موفقیت
        successMessage.textContent = 
           ` ممنون ${formData.name}! کد تخفیف ۱۰٪ برای شما فعال شد.`;
        
        // نمایش کد تخفیف
        discountElement.textContent = discountCode;
        
        // کپی خودکار کد تخفیف
        this.copyToClipboard(discountCode);
        
        // نمایش حالت موفقیت
        this.form.style.display = 'none';
        this.successState.style.display = 'block';
        
        // انیمیشن
        this.successState.style.animation = 'fadeIn 0.5s ease-out';
        
        // تمرکز روی دکمه جدید
        setTimeout(() => {
            document.getElementById('new-subscription').focus();
        }, 100);
    }
    
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            // می‌توانید یک نوتیفیکیشن برای کاربر نمایش دهید
        } catch (err) {
            console.log('Could not copy text: ', err);
        }
    }
    
    saveSubscription(formData) {
        try {
            const subscriptions = JSON.parse(
                localStorage.getItem('newsletterSubscriptions') || '[]'
            );
            
            // بررسی تکراری نبودن
            const exists = subscriptions.some(sub => sub.email === formData.email);
            
            if (!exists) {
                subscriptions.unshift({
                    ...formData,
                    discountCode: this.generateDiscountCode(formData.name),
                    id: this.generateId(),
                    status: 'active'
                });
                
                // محدود کردن به ۵۰ مورد آخر
                const trimmedSubscriptions = subscriptions.slice(0, 50);
                
                localStorage.setItem(
                    'newsletterSubscriptions', 
                    JSON.stringify(trimmedSubscriptions)
                );
                
                // به‌روزرسانی آمار
                this.updateSubscriptionStats();
            }
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }
    
    updateSubscriptionStats() {
        const stats = JSON.parse(localStorage.getItem('newsletterStats') || '{}');
        
        stats.totalSubscriptions = (stats.totalSubscriptions || 0) + 1;
        stats.lastSubscription = new Date().toISOString();
        stats.monthlyCount = (stats.monthlyCount || 0) + 1;
        
        localStorage.setItem('newsletterStats', JSON.stringify(stats));
    }
    
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    displayLastSubscription() {
        const subscriptions = JSON.parse(
            localStorage.getItem('newsletterSubscriptions') || '[]'
        );
        
        if (subscriptions.length > 0) {
            // می‌توانید آخرین اشتراک را در جایی نمایش دهید
            console.log('Last subscription:', subscriptions[0]);
        }
    }
    
    setLoadingState(isLoading) {
        if (!this.submitBtn) return;
        
        const btnText = this.submitBtn.querySelector('.btn-text');
        const btnIcon = this.submitBtn.querySelector('.btn-icon');
        const btnLoading = this.submitBtn.querySelector('.btn-loading');
        
        if (isLoading) {
            this.submitBtn.disabled = true;
            btnText.textContent = 'در حال ارسال...';
            btnIcon.style.display = 'none';
            btnLoading.style.display = 'inline-block';
        } else {
            this.submitBtn.disabled = false;
            btnText.textContent = 'دریافت کد تخفیف';
            btnIcon.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    }
    
    showError(message) {
        // نمایش خطا در بالای فرم
        const errorContainer = document.createElement('div');
        errorContainer.className = 'global-error';
        errorContainer.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;
        
        // استایل خطا
        errorContainer.style.cssText = `
            background: rgba(255, 107, 107, 0.15);
            border-right: 3px solid #ff6b6b;
            color: #ffd1d1;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: fadeIn 0.3s ease-out;
        `;
        
        // اضافه کردن به فرم
        this.form.prepend(errorContainer);
        
        // حذف خودکار پس از ۵ ثانیه
        setTimeout(() => {
            if (errorContainer.parentNode) {
                errorContainer.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => errorContainer.remove(), 300);
            }
        }, 5000);
    }
    
    shakeForm() {
        this.form.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            this.form.style.animation = '';
        }, 500);
    }
    
    resetForm() {
        // مخفی کردن حالت موفقیت
        this.successState.style.display = 'none';
        
        // نمایش مجدد فرم
        this.form.style.display = 'flex';
        this.form.reset();
        
        // پاک کردن خطاها
        const errors = this.form.querySelectorAll('.validation-message');
        errors.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
        
        // تمرکز روی اولین فیلد
        this.form.querySelector('#newsletter-name').focus();
        
        // انیمیشن
        this.form.style.animation = 'fadeIn 0.5s ease-out';
    }
    
    dispatchSubscriptionEvent(formData) {
        // ارسال رویداد برای Google Analytics یا سایر سیستم‌ها
        const event = new CustomEvent('newsletterSubscription', {
            detail: { ...formData, timestamp: Date.now() }
        });
        window.dispatchEvent(event);
    }
}

// مقداردهی اولیه
document.addEventListener('DOMContentLoaded', () => {
    new NewsletterManager();
    
    // اضافه کردن استایل‌های انیمیشن
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; transform: translateY(-10px); }
        }
        
        input.invalid {
            border-color: #ff6b6b !important;
            animation: shake 0.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});


// دکمه بازگشت به بالا
function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // انیمیشن کلیک
        backToTopButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            backToTopButton.style.transform = '';
        }, 200);
    });
}

// انیمیشن اسکرول برای لینک‌ها
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


//تابع برای نمایش و مدیریت سبد خرید
function setupCartModal() {
    // دکمه سبد خرید در هدر
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) return;
    
    // ساخت مودال سبد خرید
    const cartModal = document.createElement('div');
    cartModal.id = 'cartModal';
    cartModal.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: none;
        justify-content: flex-start;
        align-items: flex-start;
        direction: rtl;
    `;
    
    cartModal.innerHTML = `
        <div class="cart-modal-content" style="
            width: 400px;
            max-width: 90%;
            height: 100%;
            background: white;
            margin-right: 0;
            overflow-y: auto;
            padding: 20px;
            box-shadow: -5px 0 15px rgba(0,0,0,0.2);
        ">
            <div class="cart-header" style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid var(--nowruz-gold);
            ">
                <h3 style="margin: 0; color: var(--dark-color); font-family: Vazirmatn;">
                    <i class="fas fa-shopping-bag"></i> سبد خرید شما
                </h3>
                <button id="closeCartModal" style="
                    background: none;
                    border: none;
                    font-size: 1.8rem;
                    cursor: pointer;
                    color: var(--dark-gray);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                ">&times;</button>
            </div>
            
            <div id="cartItemsContainer" style="min-height: 200px; margin-bottom: 20px;">
                <!-- آیتم‌های سبد خرید اینجا نمایش داده می‌شوند -->
            </div>
            
            <div id="emptyCartMessage" style="
                display: none;
                text-align: center;
                padding: 40px 20px;
                color: var(--text-light);
                font-family: Vazirmatn;
            ">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3; color: var(--nowruz-gold);"></i>
                <h4 style="color: var(--dark-color); margin-bottom: 10px;">سبد خرید شما خالی است</h4>
                <p style="color: var(--text-light);">محصولی به سبد خرید اضافه نکرده‌اید</p>
            </div>
            
            <div class="cart-summary" style="
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid var(--light-gray);
                font-family: Vazirmatn;
            ">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 1rem;">
                    <span style="color: var(--dark-color);">تعداد کالا:</span>
                    <span id="cartTotalCount" style="color: var(--nowruz-red); font-weight: bold;">0</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 1.2rem; font-weight: bold;">
                    <span style="color: var(--dark-color);">مبلغ قابل پرداخت:</span>
                    <span id="cartTotalPrice" style="color: var(--secondary-color);">۰ تومان</span>
                </div>
                
                <button id="checkoutBtn" style="
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(45deg, var(--nowruz-red), var(--nowruz-gold));
                    color: white;
                    border: none;
                    border-radius: var(--border-radius-md);
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-family: Vazirmatn;
                    margin-bottom: 10px;
                    transition: all 0.3s;
                ">
                    <i class="fas fa-credit-card"></i>
                    پرداخت و تکمیل خرید
                </button>
                
                <button id="continueShopping" style="
                    width: 100%;
                    padding: 14px;
                    background: transparent;
                    color: var(--dark-color);
                    border: 2px solid var(--nowruz-gold);
                    border-radius: var(--border-radius-md);
                    font-size: 1rem;
                    cursor: pointer;
                    font-family: Vazirmatn;
                    transition: all 0.3s;
                ">
                    ادامه خرید
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(cartModal);
    
    // رویدادهای مودال
    cartIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        cartModal.style.display = 'flex';
        updateCartModal();
    });
    
    document.getElementById('closeCartModal').addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    document.getElementById('continueShopping').addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // دکمه پرداخت
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (shoppingCart.items.length === 0) {
            showNotification('سبد خرید شما خالی است', 'error');
            return;
        }
        
        showNotification('در حال انتقال به صفحه پرداخت...', 'info');
        setTimeout(() => {
            document.getElementById('cartModal').style.display = 'none';
        }, 1000);
    });
}

// به‌روزرسانی مودال سبد خرید
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartTotalCount = document.getElementById('cartTotalCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    
    if (shoppingCart.items.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        cartTotalCount.textContent = '0';
        cartTotalPrice.textContent = '۰ تومان';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    emptyCartMessage.style.display = 'none';
    
    let cartHTML = '';
    
    shoppingCart.items.forEach(item => {
        const itemTotal = parseInt(item.newPrice.replace(/,/g, '')) * item.quantity;
        
        cartHTML += `
            <div class="cart-item" style="
                display: flex;
                align-items: center;
                padding: 15px 0;
                border-bottom: 1px solid var(--light-gray);
                direction: rtl;
            " data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" style="
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-left: 15px;
                ">
                
                <div style="flex: 1; font-family: Vazirmatn;">
                    <h4 style="margin: 0 0 5px; font-size: 1rem; color: var(--dark-color);">
                        ${item.name}
                    </h4>
                    <div style="color: var(--secondary-color); font-weight: bold; margin-bottom: 10px;">
                        ${item.newPrice} تومان
                    </div>
                    
                    <div class="quantity-controls" style="display: flex; align-items: center; gap: 10px;">
                        <button class="decrease-quantity" data-id="${item.id}" style="
                            width: 35px;
                            height: 35px;
                            background: var(--light-gray);
                            border: none;
                            border-radius: 50%;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.2rem;
                            color: var(--dark-color);
                            transition: all 0.3s;
                        ">-</button>
                        
                        <span class="item-quantity" style="
                            min-width: 35px;
                            text-align: center;
                            font-weight: bold;
                            color: var(--dark-color);
                        ">${item.quantity}</span>
                        
                        <button class="increase-quantity" data-id="${item.id}" style="
                            width: 35px;
                            height: 35px;
                            background: var(--nowruz-gold);
                            color: white;
                            border: none;
                            border-radius: 50%;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.2rem;
                            transition: all 0.3s;
                        ">+</button>
                        
                        <button class="remove-item" data-id="${item.id}" style="
                            margin-right: auto;
                            background: none;
                            border: 1px solid var(--nowruz-red);
                            color: var(--nowruz-red);
                            cursor: pointer;
                            font-size: 0.8rem;
                            padding: 5px 10px;
                            border-radius: 5px;
                            transition: all 0.3s;
                            font-family: Vazirmatn;
                        ">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </div>
                    
                    <div style="margin-top: 10px; color: var(--dark-color); font-size: 0.9rem;">
                        مجموع: <span style="color: var(--nowruz-red); font-weight: bold;">${itemTotal.toLocaleString('fa-IR')}</span> تومان
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotalCount.textContent = shoppingCart.count;
    cartTotalPrice.textContent = shoppingCart.total.toLocaleString('fa-IR') + ' تومان';
    
    // وصل کردن رویدادهای دکمه‌ها
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = shoppingCart.items.find(item => item.id === productId);
            
            if (item && item.quantity > 1) {
                shoppingCart.updateQuantity(productId, item.quantity - 1);
                updateCartModal();
                showNotification('تعداد محصول کاهش یافت', 'info');
            } else if (item && item.quantity === 1) {
                shoppingCart.removeItem(productId);
                updateCartModal();
                showNotification('محصول از سبد خرید حذف شد', 'info');
            }
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const item = shoppingCart.items.find(item => item.id === productId);
            
            if (item) {
                shoppingCart.updateQuantity(productId, item.quantity + 1);
                updateCartModal();
                showNotification('تعداد محصول افزایش یافت', 'success');
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            shoppingCart.removeItem(productId);
            updateCartModal();
            showNotification('محصول از سبد خرید حذف شد', 'info');
        });
    });
}

//نمایش محصولات فیلتر شده با صفحه بندی
function displayFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById('products-container');
    const paginationContainer = document.getElementById('pagination');
    
    if (!productsContainer) return;
    
    // بازنشانی صفحه به ۱
    currentPage = 1;
    
    // ذخیره محصولات فیلتر شده در یک متغیر سراسری
    window.filteredProducts = filteredProducts;
    
    // اگر محصولی برای نمایش نیست
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-lighter); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark-color); margin-bottom: 10px;">محصولی یافت نشد</h3>
                <p style="color: var(--text-light);">لطفاً فیلترهای جستجو را تغییر دهید.</p>
            </div>
        `;
        paginationContainer.innerHTML = '';
        return;
    }
    
    // نمایش محصولات صفحه اول
    displayProductsPage(filteredProducts, 1);
}

// تابع جدید برای نمایش صفحه خاص
function displayProductsPage(productsArray, page = 1) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    // محاسبه محصولات این صفحه
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = productsArray.slice(startIndex, endIndex);
    
    // پاک کردن محتوای قبلی
    productsContainer.innerHTML = '';
    
    // نمایش محصولات این صفحه
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const discountPercentage = calculateDiscount(product.oldPrice, product.newPrice);
        const nowruzTexts = ["🎁 نوروزی", "✨ ویژه عید", "🌸 بهاری", "🎉 تخفیف ویژه"];
        const randomText = nowruzTexts[Math.floor(Math.random() * nowruzTexts.length)];
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${discountPercentage > 0 ? `<span class="product-badge">${discountPercentage}% تخفیف</span>` : ''}
                ${product.id % 2 === 0 ? `<span class="product-badge nowruz-special">${randomText}</span>` : ''}
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        مشاهده سریع
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="old-price">${product.oldPrice} تومان</span>
                    <span class="new-price">${product.newPrice} تومان</span>
                    ${discountPercentage > 0 ? `<span class="discount-badge">${discountPercentage}%</span>` : ''}
                </div>
                <div class="product-rating">
                    ${createRatingStars(product.rating)}
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-dot" style="background-color: ${getColorCode(color)}"></span>`).join('')}
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    افزودن به سبد خرید
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // ایجاد صفحه‌بندی برای محصولات فیلتر شده
    createFilteredPagination(productsArray, page);
    
    // وصل کردن رویدادها (با جلوگیری از دوباره کاری)
    setupProductEventsOnce();
}

// تابع جدید برای صفحه‌بندی محصولات فیلتر شده
function createFilteredPagination(productsArray, currentPage = 1) {
    const totalPages = Math.ceil(productsArray.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // دکمه صفحه قبل
    if (currentPage > 1) {
        paginationHTML += `<button class="page-prev" data-page="${currentPage - 1}">
            <i class="fas fa-arrow-right"></i> قبلی
        </button>`;
    }
    
    // صفحات
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    // دکمه صفحه بعد
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-next" data-page="${currentPage + 1}">
            بعدی <i class="fas fa-arrow-left"></i>
        </button>`;
    }
    
    // نمایش اطلاعات صفحه
    paginationHTML += `<span class="page-info">صفحه ${currentPage} از ${totalPages}</span>`;
    
    paginationContainer.innerHTML = paginationHTML;
    
    // رویدادهای صفحه‌بندی جدید
    paginationContainer.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.dataset.page);
            if (page !== currentPage) {
                // استفاده از محصولات فیلتر شده ذخیره شده
                displayProductsPage(window.filteredProducts || products, page);
                
                // اسکرول به بالای بخش محصولات
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


// مقداردهی اولیه
function init() {
    // بارگذاری سبد خرید از localStorage
    shoppingCart.loadFromLocalStorage();
    
    // Pop-up تبلیغاتی
    setupPromoPopup();
    
    // نمایش محصولات (حالا با صفحه‌بندی)
    displayProducts();

    // راه‌اندازی منوی همبرگری
    setupHamburgerMenu();

    // راه‌اندازی شمارش معکوس
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // راه‌اندازی faq
    setupFaq();
    
    // راه‌اندازی دکمه بازگشت به بالا
    setupBackToTop();
    
    // راه‌اندازی اسکرول نرم
    setupSmoothScroll();

    //نمایش و مدیریت سبد خرید
    setupCartModal();

    // نمایش پیام خوش‌آمدگویی
    setTimeout(() => {
        if (!localStorage.getItem('welcomeShown')) {
            showNotification('به فروشگاه ما خوش آمدید! از حراجی‌های ویژه ما دیدن کنید.', 'info');
            localStorage.setItem('welcomeShown', 'true');
        }
    }, 1000);
}

// بارگذاری اولیه یا شروع برنامه
document.addEventListener('DOMContentLoaded', init);

// پشتیبانی از تغییر در مرورگر
window.addEventListener('beforeunload', () => {
    shoppingCart.saveToLocalStorage();
});

window.addEventListener('load', () => {
    setupPromoPopup();
});

