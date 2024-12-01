if (x !== y) {
    console.log("renderList condition met");
    e.preventDefault();
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}