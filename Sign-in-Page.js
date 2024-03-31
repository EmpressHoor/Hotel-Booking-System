

        var menulist = document.getElementById("menulist");
        menulist.style.maxHeight = "0px";
  
        function menutoggle() {
          if (menulist.style.maxHeight == "0px") {
            menulist.style.maxHeight = "100vh";
          } else {
            menulist.style.maxHeight = "0px";
          }
        }
// Function to handle form submission

function handleSignup(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Check if users array exists in local storage
      let users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add new user to the array
      users.push({ username, email, password });
  
      // Store updated users array in local storage
      localStorage.setItem('users', JSON.stringify(users));
  
      // Show success message
      alert('Signin successful!');
  
      // Reset form
      document.getElementById('signinForm').reset();
    } else {
      alert('Local storage is not supported. Cannot store user data.');
    }
  }
  
  // Attach event listener to form submit
  document.getElementById('signinForm').addEventListener('submit', handleSignup);
  