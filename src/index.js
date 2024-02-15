if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}