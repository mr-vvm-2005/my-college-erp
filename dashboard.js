// Get user role from URL parameter
function getUserRole() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('role') || 'student';
}

function showSection(section) {
    const content = document.getElementById('content');
    const role = getUserRole();

    switch (section) {
        case 'profile':
            content.innerHTML = `
                <h3>📋 Profile Information</h3>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 15px;">
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Role:</strong> ${role.charAt(0).toUpperCase() + role.slice(1)}</p>
                    <p><strong>ID:</strong> ${role.toUpperCase()}123456</p>
                    <p><strong>Email:</strong> john.doe@aditanar.edu</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Department:</strong> Computer Science</p>
                    <p><strong>Academic Year:</strong> 2024-2025</p>
                </div>
            `;
            break;
        case 'courses':
            content.innerHTML = `
                <h3>📚 Enrolled Courses</h3>
                <table>
                    <tr><th>Course Code</th><th>Course Name</th><th>Instructor</th><th>Credits</th><th>Status</th></tr>
                    <tr><td>CS101</td><td>Introduction to Computer Science</td><td>Dr. Smith</td><td>3</td><td><span style="color: #26de81;">✓ Active</span></td></tr>
                    <tr><td>MATH201</td><td>Calculus II</td><td>Prof. Johnson</td><td>4</td><td><span style="color: #26de81;">✓ Active</span></td></tr>
                    <tr><td>PHY101</td><td>Physics I</td><td>Dr. Brown</td><td>3</td><td><span style="color: #26de81;">✓ Active</span></td></tr>
                    <tr><td>ENG101</td><td>English Literature</td><td>Prof. Davis</td><td>3</td><td><span style="color: #26de81;">✓ Active</span></td></tr>
                </table>
            `;
            break;
        case 'grades':
            content.innerHTML = `
                <h3>📊 Academic Grades</h3>
                <table>
                    <tr><th>Course</th><th>Grade</th><th>GPA</th><th>Credits</th><th>Status</th></tr>
                    <tr><td>CS101</td><td>A</td><td>4.0</td><td>3</td><td><span style="color: #26de81;">✓ Passed</span></td></tr>
                    <tr><td>MATH201</td><td>B+</td><td>3.5</td><td>4</td><td><span style="color: #26de81;">✓ Passed</span></td></tr>
                    <tr><td>PHY101</td><td>A-</td><td>3.7</td><td>3</td><td><span style="color: #26de81;">✓ Passed</span></td></tr>
                    <tr><td>ENG101</td><td>A</td><td>4.0</td><td>3</td><td><span style="color: #26de81;">✓ Passed</span></td></tr>
                </table>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px;">
                    <p style="font-size: 18px;"><strong>Overall GPA:</strong> <span style="color: #4facfe; font-size: 24px; font-weight: bold;">3.78</span> / 4.0</p>
                    <p><strong>Total Credits:</strong> 13</p>
                    <p><strong>Academic Standing:</strong> <span style="color: #26de81;">Excellent</span></p>
                </div>
            `;
            break;
        case 'attendance':
            content.innerHTML = `
                <h3>📅 Attendance Record</h3>
                <table>
                    <tr><th>Course</th><th>Present</th><th>Total Classes</th><th>Percentage</th><th>Status</th></tr>
                    <tr><td>CS101</td><td>28</td><td>30</td><td>93%</td><td><span style="color: #26de81;">✓ Good</span></td></tr>
                    <tr><td>MATH201</td><td>25</td><td>30</td><td>83%</td><td><span style="color: #f39c12;">⚠ Average</span></td></tr>
                    <tr><td>PHY101</td><td>29</td><td>30</td><td>97%</td><td><span style="color: #26de81;">✓ Excellent</span></td></tr>
                    <tr><td>ENG101</td><td>27</td><td>30</td><td>90%</td><td><span style="color: #26de81;">✓ Good</span></td></tr>
                </table>
                <div style="background: white; padding: 20px; border-radius: 10px; margin-top: 20px;">
                    <p style="font-size: 18px;"><strong>Overall Attendance:</strong> <span style="color: #4facfe; font-size: 24px; font-weight: bold;">90.8%</span></p>
                    <p><strong>Status:</strong> <span style="color: #26de81;">Meeting Requirements (Minimum: 75%)</span></p>
                </div>
            `;
            break;
        default:
            content.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h3>Welcome to Your Dashboard</h3>
                    <p style="color: #666; margin-top: 15px;">Select an option from the left menu to view your information.</p>
                </div>
            `;
    }
}

function goHome() {
    if (confirm('Are you sure you want to return to the home page?')) {
        window.location.href = 'index.html';
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', function () {
    const role = getUserRole();
    document.querySelector('.right-panel h2').textContent = `Welcome, ${role.charAt(0).toUpperCase() + role.slice(1)}!`;
    showSection('profile');
});
