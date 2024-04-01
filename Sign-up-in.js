// Function to handle login
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if local storage is available
  if (typeof Storage !== 'undefined') {
    // Get users array from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user with matching email and password exists
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // User found, show success message
      alert('Login successful!');
      // Redirect to dashboard or another page
      // window.location.href = 'dashboard.html'; // Uncomment this line for redirection
    } else {
      // User not found or invalid credentials, show error message
      alert('Invalid email or password. Please try again.');
    }

    // Reset form
    document.getElementById('loginForm').reset();
  } else {
    alert('Local storage is not supported. Cannot check user credentials.');
  }
}

// Function to handle form submission
function handleSignup(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;

  // Check if passwords match
  if (password1 !== password2) {
    alert('Passwords do not match. Please try again.');
    document.getElementById('password1').value = '';
    document.getElementById('password2').value = '';
    return;
  }

  // Check if local storage is available
  if (typeof Storage !== 'undefined') {
    // Check if users array exists in local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    users.push({ username, email, password: password1 });

    // Store updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert('Signup successful!');

    // Reset form
    document.getElementById('signupForm').reset();
  } else {
    alert('Local storage is not supported. Cannot store user data.');
  }
}

// Initialize local storage with an empty users array if it doesn't exist
if (typeof Storage !== 'undefined' && !localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([]));
}
