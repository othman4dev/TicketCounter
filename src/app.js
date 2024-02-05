document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    alert('Action completed!');
    el.classList.add('active');
    console.log('Processing data...');
});