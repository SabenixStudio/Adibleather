
        // عناصر DOM
        const emailForm = document.getElementById('email-form');
        const passwordForm = document.getElementById('password-form');
        const nextBtn = document.getElementById('next-btn');
        const backBtn = document.getElementById('back-btn');
        const loginBtn = document.querySelector('#password-form .btn[type="submit"]');
        
        // رفتن به مرحله رمز عبور
        nextBtn.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            if (email) {
                emailForm.classList.remove('active');
                passwordForm.classList.add('active');
            } else {
                alert('لطفاً ایمیل خود را وارد کنید');
            }
        });
        
        // بازگشت به مرحله ایمیل
        backBtn.addEventListener('click', () => {
            passwordForm.classList.remove('active');
            emailForm.classList.add('active');
        });
        
        // ورود (ارسال فرم رمز عبور)
        loginBtn.addEventListener('click', () => {
            const password = document.getElementById('password').value;
            if (password) {
                // در اینجا می‌توانید اعتبارسنجی و ارسال اطلاعات را انجام دهید
                alert('ورود با موفقیت انجام شد!');
            } else {
                alert('لطفاً رمز عبور را وارد کنید');
            }
        });
    