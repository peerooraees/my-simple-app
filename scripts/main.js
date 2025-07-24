function greetUser() {
    const name = document.getElementById('nameInput').value.trim();
    const greetingText = document.getElementById('greetingText');
    
    if (name === "") {
        greetingText.textContent = "Please enter your name!";
        greetingText.style.color = "red";
    } else {
        greetingText.textContent = `Hello, ${name}! Welcome to the Simple App.`;
        greetingText.style.color = "green";
    }
}
