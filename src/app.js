if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    el.classList.add('active');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}