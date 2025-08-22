document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    // Roll No
    let roll = document.getElementById("roll").value.trim();
    if (roll === "") {
        document.getElementById("rollError").innerText = "Roll No is required.";
        isValid = false;
    }

    // Student Name
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Student name is required.";
        isValid = false;
    }

    // Father's Name
    let father = document.getElementById("father").value.trim();
    if (father === "") {
        document.getElementById("fatherError").innerText = "Father's name is required.";
        isValid = false;
    }

    // Mother's Name
    let mother = document.getElementById("mother").value.trim();
    if (mother === "") {
        document.getElementById("motherError").innerText = "Mother's name is required.";
        isValid = false;
    }

    // Date of Birth
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of birth is required.";
        isValid = false;
    }

    // Mobile No
    let mobile = document.getElementById("mobile").value.trim();
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Email
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    // Password
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select your gender.";
        isValid = false;
    }

    // Department
    let department = document.querySelector('input[name="department"]:checked');
    if (!department) {
        document.getElementById("departmentError").innerText = "Please select your department.";
        isValid = false;
    }

    // Student Photo
    let photo = document.getElementById("photo").files.length;
    if (photo === 0) {
        document.getElementById("photoError").innerText = "Please upload your photo.";
        isValid = false;
    }

    // Address
    let address = document.getElementById("address").value.trim();
    if (address === "") {
        document.getElementById("addressError").innerText = "Address is required.";
        isValid = false;
    }

    // Final Submission
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("studentform").reset();
    }
});
