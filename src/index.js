if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}