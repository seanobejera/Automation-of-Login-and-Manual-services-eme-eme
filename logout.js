function confirmLogout() {
    const confirmation = confirm("Are you ready to log out?");
    if (confirmation) {
        window.location.href = "../login.html";
    }
    }