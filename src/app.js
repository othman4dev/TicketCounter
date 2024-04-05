document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event click triggered");
    error.textContent = '';
    data.push(value);
    window.location.reload();
});