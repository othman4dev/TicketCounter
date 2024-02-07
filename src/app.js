if (document.readyState === 'complete') {
    console.log("animateElement condition met");
    data.push(value);
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}