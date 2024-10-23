if (data.length > 0) {
    console.log("setSessionStorage condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}