var xhr = new XMLHttpRequest();
var url = "https://vrmart.qitsuk.dk/php/get_product.php";
var productInfoRaw;
function getProduct(productID) {
    xhr.open('GET', url + "?data=" + productID, false);
    xhr.send();
    console.log(xhr.responseText);
    return JSON.parse(xhr.responseText);
}


