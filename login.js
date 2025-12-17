function goBack() {
    window.location.href = "index.html";
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Clear previous messages
    messageDiv.innerHTML = '';

    // Basic validation
    if (!username || !password) {
        messageDiv.innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
        return;
    }

    // Show loading animation
    messageDiv.innerHTML = '<div class="loading">Logging in...</div>';

    // Simulate login process (replace with actual authentication)
    setTimeout(() => {
        if (username === 'admin' && password === 'password') {
            messageDiv.innerHTML = '<p style="color: green;">Login successful! Redirecting...</p>';
            setTimeout(() => {
                // Redirect based on current page
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'login_parent.html') {
                    window.location.href = 'parent_dashboard.html';
                } else if (currentPage === 'login_student.html') {
                    window.location.href = 'dashboard.html';
                } else if (currentPage === 'login_admin.html') {
                    window.location.href = 'admin_dashboard.html'; // Placeholder
                } else if (currentPage === 'login_teacher.html') {
                    window.location.href = 'teacher_dashboard.html'; // Placeholder
                } else if (currentPage === 'login_applicant.html') {
                    window.location.href = 'applicant_dashboard.html'; // Placeholder
                }
            }, 1000);
        } else {
            messageDiv.innerHTML = '<p style="color: red;">Invalid username or password.</p>';
        }
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');

            // Basic validation
            if (!username || !password) {
                messageDiv.innerHTML = '<p style="color: red;">Please fill in all fields.</p>';
                return;
            }

            // Show loading animation
            messageDiv.innerHTML = '<div class="loading"></div> Logging in...';

            // Simulate login delay
            setTimeout(() => {
                // Simulate login (replace with actual authentication)
                if (username === 'admin' && password === 'password') {
                    messageDiv.innerHTML = '<p style="color: green;">Login successful! Redirecting...</p>';
                    setTimeout(() => {
                        window.location.href = 'dashboard.html'; // Redirect to dashboard
                    }, 2000);
                } else {
                    messageDiv.innerHTML = '<p style="color: red;">Invalid username or password.</p>';
                }
            }, 2000);
        });
    }
});
