document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    window.location.reload();
    data.push(value);
});