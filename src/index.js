if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    el.classList.add('active');
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}