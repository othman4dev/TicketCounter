document.querySelector(".container").addEventListener("change", function() {
    console.log("Event input triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
});