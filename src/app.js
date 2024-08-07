if (window.innerWidth > 500) {
    console.log("loadData condition met");
    el.classList.add('active');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}