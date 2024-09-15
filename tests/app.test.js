try {
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}