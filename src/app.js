if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    el.classList.add('active');
    e.preventDefault();
    e.preventDefault();
} else {
    console.log("Condition not met");
}