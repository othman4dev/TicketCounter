if (value !== '') {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}