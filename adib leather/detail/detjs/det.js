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



// مدیریت گالری تصاویر
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                const mainImage = document.getElementById('mainImage');
                const imageUrl = this.getAttribute('data-image');
                
                mainImage.src = imageUrl;
                
                // حذف کلاس active از همه thumbnails
                document.querySelectorAll('.thumbnail').forEach(t => {
                    t.classList.remove('active');
                });
                
                // اضافه کردن کلاس active به thumbnail فعلی
                this.classList.add('active');
            });
        });
        
        // مدیریت امتیازدهی ستاره‌ها
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', function() {
                const value = parseInt(this.getAttribute('data-value'));
                const container = this.closest('.stars');
                
                // تنظیم ستاره‌ها بر اساس امتیاز
                container.querySelectorAll('.star').forEach((s, index) => {
                    if (index < value) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                
                // ذخیره امتیاز
                if (this.closest('#ratingStars')) {
                    // برای امتیازدهی محصول
                    const ratingText = document.querySelector('.rating-text');
                    ratingText.textContent = `(${value} ستاره)`;
                } else {
                    // برای فرم نظر
                    document.getElementById('reviewRating').value = value;
                }
            });
        });
        
        // مدیریت تعداد محصول
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.quantity-input');
                let value = parseInt(input.value);
                
                if (this.classList.contains('minus')) {
                    if (value > 1) {
                        input.value = value - 1;
                    }
                } else if (this.classList.contains('plus')) {
                    input.value = value + 1;
                }
            });
        });
        
        // مدیریت افزودن به سبد خرید
        document.querySelector('.btn-cart').addEventListener('click', function() {
            const productName = document.querySelector('.product-title').textContent;
            const quantity = document.querySelector('.quantity-input').value;
            
            // نمایش اعلان
            const notification = document.createElement('div');
            notification.textContent = `${quantity} عدد ${productName} به سبد خرید اضافه شد!`;
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
            cartCount.textContent = parseInt(cartCount.textContent) + parseInt(quantity);
            
            // حذف اعلان بعد از 3 ثانیه
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
        
        // مدیریت فرم نظر
        document.getElementById('reviewForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('reviewName').value;
            const rating = document.getElementById('reviewRating').value;
            const title = document.getElementById('reviewTitle').value;
            const content = document.getElementById('reviewContent').value;
            
            // ایجاد عنصر نظر جدید
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <div class="review-header">
                    <span class="reviewer">${name}</span>
                    <span class="review-date">امروز</span>
                </div>
                <div class="review-stars">
                    ${'<i class="fas fa-star"></i>'.repeat(rating)}
                </div>
                <div class="review-content">
                    <strong>${title}</strong><br>
                    ${content}
                </div>
            `;
            
            // افزودن نظر به بالای لیست نظرات
            document.querySelector('.reviews-list').prepend(reviewItem);
            
            // ریست کردن فرم
            this.reset();
            document.querySelectorAll('.form-rating .star').forEach(star => {
                star.classList.remove('active');
            });
            document.getElementById('reviewRating').value = 0;
            
            // نمایش پیام موفقیت
            alert('نظر شما با موفقیت ثبت شد و پس از تایید نمایش داده خواهد شد.');
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
