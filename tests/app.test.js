document.querySelector("window").addEventListener("input", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});