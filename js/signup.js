document.querySelector('.signup_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Get existing users or empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('Email already registered!');
        return;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
});