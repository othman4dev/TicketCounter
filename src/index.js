try {
    e.preventDefault();
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}