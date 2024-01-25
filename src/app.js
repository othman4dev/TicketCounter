if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    el.classList.add('active');
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}