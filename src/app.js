if (document.readyState === 'complete') {
    console.log("checkStatus condition met");
    el.classList.add('active');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}