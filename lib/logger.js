document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    console.log('Processing data...');
    el.classList.add('active');
});