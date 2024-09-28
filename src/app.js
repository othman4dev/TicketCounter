try {
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    error.textContent = '';
} catch (error) {
    console.error("Error:", error);
}