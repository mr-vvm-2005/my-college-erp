function showSection(section) {
    const content = document.getElementById('content');
    switch(section) {
        case 'profile':
            content.innerHTML = `
                <h3>Profile Information</h3>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Role:</strong> Student</p>
                <p><strong>Student ID:</strong> 123456</p>
                <p><strong>Email:</strong> john.doe@aditanar.edu</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
            `;
            break;
        case 'courses':
            content.innerHTML = `
                <h3>Enrolled Courses</h3>
                <table>
                    <tr><th>Course Code</th><th>Course Name</th><th>Instructor</th><th>Credits</th></tr>
                    <tr><td>CS101</td><td>Introduction to Computer Science</td><td>Dr. Smith</td><td>3</td></tr>
                    <tr><td>MATH201</td><td>Calculus II</td><td>Prof. Johnson</td><td>4</td></tr>
                    <tr><td>PHY101</td><td>Physics I</td><td>Dr. Brown</td><td>3</td></tr>
                </table>
            `;
            break;
        case 'grades':
            content.innerHTML = `
                <h3>Academic Grades</h3>
                <table>
                    <tr><th>Course</th><th>Grade</th><th>GPA</th></tr>
                    <tr><td>CS101</td><td>A</td><td>4.0</td></tr>
                    <tr><td>MATH201</td><td>B+</td><td>3.5</td></tr>
                    <tr><td>PHY101</td><td>A-</td><td>3.7</td></tr>
                </table>
                <p><strong>Overall GPA:</strong> 3.73</p>
            `;
            break;
        case 'attendance':
            content.innerHTML = `
                <h3>Attendance Record</h3>
                <table>
                    <tr><th>Course</th><th>Present</th><th>Total Classes</th><th>Percentage</th></tr>
                    <tr><td>CS101</td><td>28</td><td>30</td><td>93%</td></tr>
                    <tr><td>MATH201</td><td>25</td><td>30</td><td>83%</td></tr>
                    <tr><td>PHY101</td><td>29</td><td>30</td><td>97%</td></tr>
                </table>
            `;
            break;
        default:
            content.innerHTML = '<p>Select an option from the left to view details.</p>';
    }
}

function goHome() {
    window.location.href = 'index.html';
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('profile');
});
