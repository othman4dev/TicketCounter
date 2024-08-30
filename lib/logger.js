document.querySelector("window").addEventListener("blur", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    window.location.reload();
    el.classList.add('active');
});