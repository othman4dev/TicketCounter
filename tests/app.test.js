if (document.readyState === 'complete') {
    console.log("renderList condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    return x % y;
} else {
    console.log("Condition not met");
}