document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        let productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});
