
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email) && !phonePattern.test(email)) {
        alert("Please enter a valid email address or phone number.");
        return false;
    }

    return true;
}
