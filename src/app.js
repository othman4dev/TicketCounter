document.querySelector(".footer").addEventListener("mouseout", function() {
    console.log("Event mouseover triggered");
    console.log('Processing data...');
    alert('Action completed!');
    el.classList.add('active');
});