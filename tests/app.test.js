if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    window.location.reload();
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}