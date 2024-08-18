try {
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}