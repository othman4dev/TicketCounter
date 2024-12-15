if (window.innerWidth > 500) {
    console.log("checkStatus condition met");
    data.push(value);
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}