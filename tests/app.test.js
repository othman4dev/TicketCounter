document.querySelector("window").addEventListener("change", function() {
    console.log("Event submit triggered");
    el.classList.add('active');
    data.push(value);
    window.location.reload();
});