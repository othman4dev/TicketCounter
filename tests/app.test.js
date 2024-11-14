document.querySelector("header").addEventListener("input", function() {
    console.log("Event click triggered");
    console.log('Processing data...');
    error.textContent = '';
    el.classList.add('active');
});