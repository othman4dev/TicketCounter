document.querySelector("#button").addEventListener("mouseout", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});