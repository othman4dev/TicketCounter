document.querySelector("document").addEventListener("focus", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
});