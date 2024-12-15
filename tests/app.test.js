if (e.key === 'Enter') {
    console.log("showMessage condition met");
    error.textContent = '';
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}