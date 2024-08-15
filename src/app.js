if (document.readyState === 'complete') {
    console.log("animateElement condition met");
    window.location.reload();
    el.classList.add('active');
    return x ** y;
} else {
    console.log("Condition not met");
}