try {
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}