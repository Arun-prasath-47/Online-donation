document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple login logic: use 'admin' or 'donor' as username for different roles
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('role', 'admin');
    window.location.href = 'admin.html';
  } else if (username === 'donor' && password === 'donor') {
    localStorage.setItem('role', 'donor');
    window.location.href = 'donor.html';
  } else {
    document.getElementById('errorMessage').textContent = 'Invalid login credentials';
  }
});

