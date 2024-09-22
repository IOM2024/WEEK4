document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    clearErrors();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;
  
    let isValid = true;
  
    // Name validation
    if (name === '') {
      setError('nameError', 'Name is required.');
      isValid = false;
    }
  
    // Email validation
    if (!validateEmail(email)) {
      setError('emailError', 'Invalid email format.');
      isValid = false;
    }
  
    // Password validation
    if (password.length < 8) {
      setError('passwordError', 'Password must be at least 8 characters long.');
      isValid = false;
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      setError('confirmPasswordError', 'Passwords do not match.');
      isValid = false;
    }
  
    // Age validation
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      setError('ageError', 'Age must be a number between 18 and 100.');
      isValid = false;
    }
  
    // Gender validation
    if (!gender) {
      setError('genderError', 'Please select a gender.');
      isValid = false;
    }
  
    // Country validation
    if (country === '') {
      setError('countryError', 'Please select a country.');
      isValid = false;
    }
  
    // Terms validation
    if (!terms) {
      setError('termsError', 'You must agree to the terms and conditions.');
      isValid = false;
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Registration Successful!');
      document.getElementById('registrationForm').reset(); // Clear the form after successful validation
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    clearErrors();
  
    // Get form values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    let isValid = true;
  
    // Email validation
    if (!validateEmail(email)) {
      setError('loginEmailError', 'Invalid email format.');
      isValid = false;
    }
  
    // Password validation
    if (password === '') {
      setError('loginPasswordError', 'Password is required.');
      isValid = false;
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Login Successful!');
      document.getElementById('loginForm').reset(); // Clear the form after successful validation
    }
  });
  
  // Helper functions
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  
  function setError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(el) {
      el.textContent = '';
    });
  }
  