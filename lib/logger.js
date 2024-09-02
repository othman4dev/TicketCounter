document.querySelector(".modal").addEventListener("mouseover", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    el.classList.add('active');
    window.location.reload();
});