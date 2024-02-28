try {
    data.push(value);
    e.preventDefault();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}