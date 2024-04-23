var products = JSON.parse(localStorage.getItem('products')) || []
if (products.length > 0) {
    displayProducts()
}

function displayProducts() {
    var productsContainer = ''
    for (var i = 0; i < products.length; i++) {
        productsContainer += `
        <div class="col-4">
            <div class="product">
                <img src="images/${products[i].productImage}" class="w-100" alt="My ID">
                <div class="product-detail d-flex justify-content-between px-4">
                    <p>${products[i].productName}</p>
                    <p>${products[i].productPrice} $</p>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById('products').innerHTML = productsContainer
}

function getFormInputs(identifiers) {
    var formInputs = [];
    for (var i = 0; i < identifiers.length; i++) {
        formInputs.push(document.getElementById(identifiers[i]))
    }
    return formInputs
}

function setProduct(formInputs, identifiers) {
    var product = {}
    for (var i = 0; i < formInputs.length; i++) {
        product[identifiers[i]] = formInputs[i].value
    }
    return product
}

function addProduct() {
    var identifiers = ["productName", "productPrice", "productCategory", "productDescription", "productImage"]
    var formInputs = getFormInputs(identifiers)
    var product = setProduct(formInputs, identifiers)
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    clearForm(formInputs)
    displayProducts()
}

function clearForm(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = null;
    }
}