if (document.readyState === 'complete') {
    console.log("submitForm condition met");
    alert('Action completed!');
    el.classList.add('active');
    return x % y;
} else {
    console.log("Condition not met");
}