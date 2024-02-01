const updateUI = (a, b, data) => {
    console.log("loadData arrow function called");
    el.classList.add('active');
    error.textContent = '';
    window.location.reload();
};