const userDropdownTrigger = document.getElementById('user-dropdown-trigger');
        const userDropdown = document.getElementById('user-dropdown');
        const cartDropdownTrigger = document.getElementById('cart-dropdown-trigger');
        const cartDropdown = document.getElementById('cart-dropdown');

        userDropdownTrigger.addEventListener('click', () => {
            userDropdown.classList.toggle('active');
            cartDropdown.classList.remove('active');
        });

        cartDropdownTrigger.addEventListener('click', () => {
            cartDropdown.classList.toggle('active');
            userDropdown.classList.remove('active');
        });



// مدیریت دسته‌بندی‌ها
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('click', function() {
                // حذف کلاس active از همه دسته‌ها
                document.querySelectorAll('.category').forEach(cat => {
                    cat.classList.remove('active');
                });
                
                // اضافه کردن کلاس active به دسته انتخاب شده
                this.classList.add('active');
                
                const selectedCategory = this.getAttribute('data-category');
                const products = document.querySelectorAll('.product-card');
                
                products.forEach(product => {
                    if (selectedCategory === 'all') {
                        product.style.display = 'block';
                    } else {
                        if (product.getAttribute('data-category') === selectedCategory) {
                            product.style.display = 'block';
                        } else {
                            product.style.display = 'none';
                        }
                    }
                });
            });
        });
        
        // افزودن به سبد خرید
        document.querySelectorAll('.quick-add-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('.product-name').textContent;
                
                // نمایش اعلان
                const notification = document.createElement('div');
                notification.textContent = `${productName} به سبد خرید اضافه شد!`;
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = '#4a2e1a';
                notification.style.color = 'white';
                notification.style.padding = '15px 25px';
                notification.style.borderRadius = '5px';
                notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                notification.style.zIndex = '1000';
                notification.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';
                notification.style.fontWeight = '500';
                
                document.body.appendChild(notification);
                
                // به‌روزرسانی تعداد سبد خرید
                const cartCount = document.querySelector('.cart-count');
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
                
                // حذف اعلان بعد از 3 ثانیه
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            });
        });
        
        // افزودن انیمیشن‌های CSS
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
