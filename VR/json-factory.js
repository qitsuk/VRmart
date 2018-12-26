var xhr = new XMLHttpRequest();
var url = "https://vrmart.qitsuk.dk/php/get_product.php";
var id;


xhr.open('GET', url + "?data=" + id, false);
xhr.send();
console.log(xhr.responseText);

var productInfo = JSON.parse(xhr.responseText);
