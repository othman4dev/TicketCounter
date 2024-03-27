if (data.length > 0) {
    console.log("fetchData condition met");
    data.push(value);
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}