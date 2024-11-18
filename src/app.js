const submitForm = (a, b, data) => {
    console.log("updateUI arrow function called");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    return a + b;
};