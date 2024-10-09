if (value !== '') {
    console.log("getLocalStorage condition met");
    console.log('Processing data...');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}