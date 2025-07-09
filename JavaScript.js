document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && email && message)
    {
      alert(`Thanks, ${name}! Your message has been submitted.`);
      this.reset(); // Clear the form
    } 
    else
    {
      alert("Please fill in all fields before submitting.");
    }
});