// Navigate back to home page
function goBack() {
    window.location.href = "index.html";
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) {
        console.error('Login form not found');
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');

        // Clear previous messages
        messageDiv.innerHTML = '';

        // Basic validation
        if (!username || !password) {
            messageDiv.innerHTML = '<p style="color: #ff4757; font-weight: 500;">Please fill in all fields.</p>';
            return;
        }

        // Show loading animation with better styling
        messageDiv.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; gap: 10px;"><div class="loading"></div><span style="color: #4facfe; font-weight: 500;">Logging in...</span></div>';

        // Simulate login process (replace with actual authentication in production)
        setTimeout(() => {
            // Demo credentials: username: admin, password: password
            if (username === 'admin' && password === 'password') {
                messageDiv.innerHTML = '<p style="color: #26de81; font-weight: 500;">✓ Login successful! Redirecting...</p>';
                
                setTimeout(() => {
                    // Redirect based on current page
                    const currentPage = window.location.pathname.split('/').pop();
                    
                    switch(currentPage) {
                        case 'login_parent.html':
                            window.location.href = 'dashboard.html?role=parent';
                            break;
                        case 'login_student.html':
                            window.location.href = 'dashboard.html?role=student';
                            break;
                        case 'login_admin.html':
                            window.location.href = 'dashboard.html?role=admin';
                            break;
                        case 'login_teacher.html':
                            window.location.href = 'dashboard.html?role=teacher';
                            break;
                        case 'login_applicant.html':
                            window.location.href = 'dashboard.html?role=applicant';
                            break;
                        default:
                            window.location.href = 'dashboard.html';
                    }
                }, 1000);
            } else {
                messageDiv.innerHTML = '<p style="color: #ff4757; font-weight: 500;">✗ Invalid username or password. Please try again.</p>';
                
                // Shake animation for error
                loginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);
            }
        }, 1500);
    });
});
