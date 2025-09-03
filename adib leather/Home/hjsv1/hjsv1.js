
        // Dropdown Toggle
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

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!userDropdownTrigger.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
            if (!cartDropdownTrigger.contains(e.target)) {
                cartDropdown.classList.remove('active');
            }
        });

        // Hero Slider
        const slides = document.querySelector('.slides');
        const slideItems = document.querySelectorAll('.slide');
        const controlBtns = document.querySelectorAll('.control-btn');
        let currentSlide = 0;
        const slideCount = slideItems.length;

        function goToSlide(index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
            controlBtns.forEach(btn => btn.classList.remove('active'));
            controlBtns[index].classList.add('active');
            currentSlide = index;
        }

        controlBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                goToSlide(index);
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            goToSlide(currentSlide);
        }, 5000);

        // Initialize first slide
        goToSlide(0);
   