if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    el.classList.add('active');
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}