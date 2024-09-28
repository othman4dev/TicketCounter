if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    error.textContent = '';
    alert('Action completed!');
    data.push(value);
} else {
    console.log("Condition not met");
}