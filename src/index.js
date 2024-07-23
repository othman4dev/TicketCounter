document.querySelector("#button").addEventListener("blur", function() {
    console.log("Event focus triggered");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
});