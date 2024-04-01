// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
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
  
  // Attach event listener to form submit
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  