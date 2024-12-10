document.querySelector("form").addEventListener("scroll", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
});