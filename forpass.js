// Function to handle form submission
function handleResetPassword(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form input values
    const password1 = document.getElementById('forpass1').value;
    const password2 = document.getElementById('forpass2').value;
    
    // Check if passwords match
    if (password1 !== password2) {
      alert('Passwords do not match. Please try again.');
      document.getElementById('forpass1').value = '';
      document.getElementById('forpass2').value = '';
      return;
    }
    
    // Passwords match, perform further actions (e.g., update password in database)
    
    // Show success message
    alert('Password reset successful!');
    
    // Redirect or perform any other action after password reset
  }
  
  // Attach event listener to form submit
  document.querySelector('.form').addEventListener('submit', handleResetPassword);
  