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





// مدیریت تعداد محصولات
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
                
                // در اینجا می‌توانید منطق به‌روزرسانی قیمت را اضافه کنید
            });
        });
        
        // مدیریت حذف محصولات
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const cartItem = this.closest('.cart-item');
                cartItem.style.animation = 'fadeOut 0.5s forwards';
                
                setTimeout(() => {
                    cartItem.remove();
                    // به‌روزرسانی تعداد سبد خرید و مبالغ
                }, 500);
            });
        });
        
        // افزودن انیمیشن‌های CSS
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-20px); height: 0; padding: 0; margin: 0; border: none; }
            }
        `;
        document.head.appendChild(style);
