document.querySelector("header").addEventListener("input", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    alert('Action completed!');
    console.log('Processing data...');
});