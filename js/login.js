document.querySelector('.login_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Get users array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = '../index.html';
    } else {
        alert('Invalid email or password!');
    }
});