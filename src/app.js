if (value !== '') {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}