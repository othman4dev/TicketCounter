try {
    window.location.reload();
    alert('Action completed!');
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}