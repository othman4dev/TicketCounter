document.querySelector("form").addEventListener("mouseout", function() {
    console.log("Event blur triggered");
    console.log('Processing data...');
    data.push(value);
    el.classList.add('active');
});