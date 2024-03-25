if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    e.preventDefault();
    console.log('Processing data...');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}