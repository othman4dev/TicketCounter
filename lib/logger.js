try {
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} catch (error) {
    console.error("Error:", error);
}