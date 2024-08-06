document.querySelector("form").addEventListener("scroll", function() {
    console.log("Event mouseover triggered");
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
});