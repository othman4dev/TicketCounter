document.querySelector(".footer").addEventListener("change", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
});