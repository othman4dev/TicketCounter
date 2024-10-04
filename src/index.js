try {
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}