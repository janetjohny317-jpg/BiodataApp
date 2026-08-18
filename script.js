let form = document.getElementById("biodataForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let fullname = document.getElementById("fname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let nationality = document.getElementById("Nationality").value;
    let maritalStatus = document.getElementById("Martialstatus").value;
    let address = document.getElementById("address").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    if (fullname === "") {
        alert("Please enter your full name.");
        return;}

    if (!/^[A-Za-z ]+$/.test(fullname)) {
        alert("Full name should contain only letters.");
        return;}

    if (phone === "") {
        alert("Please enter your phone number.");
        return;}

    if (!/^[0-9]{10}$/.test(phone)) { 
        alert("Phone number must contain exactly 10 digits.");
        return;}
        
    if (!gender) {
        alert("Please select your gender.");
        return;}

    if (maritalStatus === "") {
        alert("Please select your marital status.");
        return;}

    if (email === "") {
        alert("Please enter your email address.");
        return;}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;}

    if (dob === "") {
        alert("Please select your date of birth.");
        return;}

    let today = new Date();
    let selectedDate = new Date(dob);

    if (selectedDate > today) {
        alert("Date of birth cannot be a future date.");
        return;}

    if (nationality === "") {
        alert("Please select your nationality.");
        return;}

    if (address === "") {
        alert("Please enter your address.");
        return;}

    let photo = document.getElementById("profilePhoto");

    if (photo.files.length === 0) {
        alert("Please upload your profile photo.");
        return;}

    alert("Form submitted successfully!");
});
