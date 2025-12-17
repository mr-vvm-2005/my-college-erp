function goToLogin(role) {
    if (role === "Applicant") {
        window.location.href = "login_applicant.html";
    } else if (role === "Student") {
        window.location.href = "login_student.html";
    } else if (role === "Parent/Guardian") {
        window.location.href = "login_parent.html";
    } else if (role === "Administrator") {
        window.location.href = "login_admin.html";
    } else if (role === "Teacher/Lecturer") {
        window.location.href = "login_teacher.html";
    } else {
        alert("Login page for " + role + " is not available.");
    }
}
