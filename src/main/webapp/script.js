
        let isLogin = true;

        // Toggle between login and signup forms
        function toggleForm() {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const cardTitle = document.getElementById('cardTitle');
            const cardDescription = document.getElementById('cardDescription');
            const toggleText = document.getElementById('toggleText');
            const toggleLink = document.getElementById('toggleLink');

            // Clear all errors and form data
            clearErrors();
            clearForms();

            if (isLogin) {
                // Switch to signup
                loginForm.classList.add('slide-out-left');
                setTimeout(() => {
                    loginForm.classList.add('hidden');
                    signupForm.classList.remove('hidden');
                    signupForm.classList.add('slide-in-right');
                    setTimeout(() => {
                        signupForm.classList.add('active');
                    }, 10);
                }, 150);

                cardTitle.textContent = 'Join PassItOn';
                cardDescription.textContent = 'Create your account to start sharing knowledge';
                toggleText.innerHTML = 'Already have an account? <a href="#" class="toggle-link" onclick="toggleForm()">Sign in</a>';
                isLogin = false;
            } else {
                // Switch to login
                signupForm.classList.remove('active');
                signupForm.classList.add('slide-out-left');
                setTimeout(() => {
                    signupForm.classList.add('hidden');
                    loginForm.classList.remove('hidden');
                    loginForm.classList.remove('slide-out-left');
                    loginForm.classList.add('slide-in-right');
                    setTimeout(() => {
                        loginForm.classList.add('active');
                    }, 10);
                }, 150);

                cardTitle.textContent = 'Welcome Back';
                cardDescription.textContent = 'Sign in to access your student resources';
                toggleText.innerHTML = 'Don\'t have an account? <a href="#" class="toggle-link" onclick="toggleForm()">Sign up</a>';
                isLogin = true;
            }
        }

        // Toggle password visibility
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(inputId + 'Icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/>';
            } else {
                input.type = 'password';
                icon.innerHTML = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
            }
        }

        // Validate matric number format
        function validateMatricNumber(matricNumber) {
            const matricRegex = /^[A-Z]{2,3}\/\d{2}\/\d{4}$/i;
            return matricRegex.test(matricNumber);
        }

        // Show error message
        function showError(fieldId, message) {
            const errorElement = document.getElementById(fieldId + 'Error');
            const inputElement = document.getElementById(fieldId);
            
            errorElement.textContent = message;
            inputElement.classList.add('error');
        }

        // Clear error message
        function clearError(fieldId) {
            const errorElement = document.getElementById(fieldId + 'Error');
            const inputElement = document.getElementById(fieldId);
            
            errorElement.textContent = '';
            inputElement.classList.remove('error');
        }

        // Clear all errors
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            const inputElements = document.querySelectorAll('.input');
            
            errorElements.forEach(el => el.textContent = '');
            inputElements.forEach(el => el.classList.remove('error'));
        }

        // Clear all forms
        function clearForms() {
            document.getElementById('loginForm').reset();
            document.getElementById('signupForm').reset();
        }

        // Validate login form
        function validateLoginForm() {
            let isValid = true;
            const matricNumber = document.getElementById('loginMatric').value.trim();
            const password = document.getElementById('loginPassword').value;

            clearErrors();

            if (!matricNumber) {
                showError('loginMatric', 'Matric number is required');
                isValid = false;
            } else if (!validateMatricNumber(matricNumber)) {
                showError('loginMatric', 'Invalid matric number format (e.g., CSC/20/1234)');
                isValid = false;
            }

            if (!password) {
                showError('loginPassword', 'Password is required');
                isValid = false;
                
            } else if (password.length < 6) {
            	
                showError('loginPassword', 'Password must be at least 6 characters');
                isValid = false;
            }

            return isValid;
        }

        // Validate signup form
        function validateSignupForm() {
            let isValid = true;
            const matricNumber = document.getElementById('signupMatric').value.trim();
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            clearErrors();

            if (!matricNumber) {
                showError('signupMatric', 'Matric number is required');
                isValid = false;
            } else if (!validateMatricNumber(matricNumber)) {
                showError('signupMatric', 'Invalid matric number format (e.g., CSC/20/1234)');
                isValid = false;
            }

            if (!firstName) {
                showError('firstName', 'First name is required');
                isValid = false;
            }

            if (!lastName) {
                showError('lastName', 'Last name is required');
                isValid = false;
            }

            if (!password) {
                showError('signupPassword', 'Password is required');
                isValid = false;
            } else if (password.length < 6) {
                showError('signupPassword', 'Password must be at least 6 characters');
                isValid = false;
            }

            if (!confirmPassword) {
                showError('confirmPassword', 'Please confirm your password');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match');
                isValid = false;
            }

            return isValid;
        }

        // Handle form submissions
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateLoginForm()) {
                const formData = {
                    matricNumber: document.getElementById('loginMatric').value.trim(),
                    password: document.getElementById('loginPassword').value
                };
                
                console.log('Login form submitted:', formData);
                alert('Login form submitted successfully! Check console for data.');
                // Here you would typically send the data to your server
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateSignupForm()) {
                const formData = {
                    matricNumber: document.getElementById('signupMatric').value.trim(),
                    firstName: document.getElementById('firstName').value.trim(),
                    lastName: document.getElementById('lastName').value.trim(),
                    password: document.getElementById('signupPassword').value
                };
                
                console.log('Signup form submitted:', formData);
                alert('Signup form submitted successfully! Check console for data.');
                // Here you would typically send the data to your server
            }
        });

        // Clear errors when user starts typing
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearError(this.id);
                }
            });
        });
 