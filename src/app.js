document.querySelector("header").addEventListener("scroll", function() {
    console.log("Event click triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    error.textContent = '';
});