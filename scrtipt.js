const joinBtn = document.querySelector('.join_btn'); 
const emailInput = document.querySelector('.email_input'); 

joinBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const emailValue = emailInput.value;

    if (emailValue === "") {
        alert("Please enter your email address!");
    } else {
        alert("Success! Your email " + emailValue + " has been sent.");
        emailInput.value = ""; 
    }
});