document.querySelector("#button").addEventListener("change", function() {
    console.log("Event mouseover triggered");
    e.preventDefault();
    el.classList.add('active');
    console.log('Processing data...');
});