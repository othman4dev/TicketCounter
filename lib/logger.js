if (a > b) {
    console.log("fetchData condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}