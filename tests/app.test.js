if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}