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