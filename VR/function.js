var basket = Array();
var boxShowing = false;
var breadData = getProduct(1);
var orangeData = getProduct(2);
var redWineData = getProduct(3);
var whiteWineData = getProduct(4);

function objectListeners() {
    var headEl = document.getElementById("head");
    //#region Bread
    document.getElementById("bread_model").addEventListener('mouseenter', function () {
        var text = breadData[0].p_navn + "\n" + breadData[0].p_pris + " kr.\n" + breadData[0].p_beskrivelse;
        var breadBoxEl = document.createElement('a-entity');
        breadBoxEl.setAttribute("id", "breadBox");
        breadBoxEl.setAttribute('geometry', {
            primitive: 'box',
            height: 0.4,
            width: 0.01,
            depth: 1.5
        });
        breadBoxEl.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.9
        });
        breadBoxEl.setAttribute('material', {
            color: 'black',
            opacity: 0.75
        });
        breadBoxEl.setAttribute("rotation", {
            x: 0,
            y: -90,
            z: 0
        });
        var breadBoxTextEl = document.createElement('a-text');
        breadBoxTextEl.setAttribute("id", "breadText");
        breadBoxTextEl.setAttribute('text', {
            color: "white",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        breadBoxTextEl.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.8
        });
        breadBoxTextEl.setAttribute('rotation', {
            x: 0,
            y: 0,
            z: 0
        });
        breadBoxTextEl.setAttribute("scale", {
            x: 0.25,
            y: 0.25,
            z: 0.25
        });
        if (document.getElementById('breadBox') === null && boxShowing === false) {
            headEl.appendChild(breadBoxEl);
            headEl.appendChild(breadBoxTextEl);
            boxShowing = true;
            if (breadBoxEl !== null) {
                console.log("The breadbox exists!");
                window.addEventListener("keydown", function (e) {
                    if (e.keyCode === 81 || e.keyCode === 27) {
                        removeBreadSign();
                    }
                    if (boxShowing === false) {
                        console.log("Nothing to add");
                    } else {
                        if (e.keyCode === 69 || e.keyCode === 32) {
                            basket.push(breadData[0].p_id);
                            alert("Du har tilføjet 1 brød til din kurv.");
                            console.log(basket.length);
                        }
                    }
                    e.preventDefault();
                });
            }
        } else {
            console.log('BreadBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Oranges
    document.getElementById("oranges").addEventListener('mouseenter', function () {
        var text = orangeData[0].p_navn + "\n" + orangeData[0].p_pris + " kr.\n" + orangeData[0].p_beskrivelse;
        var orangeBox = document.createElement('a-entity');
        orangeBox.setAttribute("id", "orangeBox");
        orangeBox.setAttribute('geometry', {
            primitive: 'box',
            height: 0.5,
            width: 0.01,
            depth: 1.4
        });
        orangeBox.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.9
        });
        orangeBox.setAttribute("rotation", {
            x: 0,
            y: -90,
            z: 0
        });
        orangeBox.setAttribute('material', {
            color: 'black',
            opacity: 0.75
        });
        var orangeBoxText = document.createElement('a-text');
        orangeBoxText.setAttribute("id", "orangeText");
        orangeBoxText.setAttribute('text', {
            color: "white",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        orangeBoxText.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.8
        });
        orangeBoxText.setAttribute('rotation', {
            x: 0,
            y: 0,
            z: 0
        });
        orangeBoxText.setAttribute("scale", {
            x: 0.25,
            y: 0.25,
            z: 0.25
        });
        if (document.getElementById('orangeBox') == null && boxShowing === false) {
            headEl.appendChild(orangeBox);
            headEl.appendChild(orangeBoxText);
            boxShowing = true;
            if (orangeBox !== null) {
                window.addEventListener("keydown", function (e) {
                    if (e.keyCode === 81 || e.keyCode === 27) {
                        removeOrangeSign();
                    }
                    if (boxShowing === false) {
                        console.log("Nothing to add");
                    } else {
                        if (e.keyCode === 69 || e.keyCode === 32) {
                            basket.push(orangeData[0].p_id);
                            alert("Du har tilføjet 1 appelsin til din kurv.");
                            console.log(basket.length);
                        }
                    }
                    e.preventDefault();
                });
            }
        } else {
            console.log('OrangeBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Rødvin
    document.getElementById('rødvin').addEventListener('mouseenter', function () {
        var text = redWineData[0].p_navn + "\n" + redWineData[0].p_pris + " kr.\n" + redWineData[0].p_beskrivelse;
        var redWineBox = document.createElement('a-entity');
        redWineBox.setAttribute("id", "redWineBox");
        redWineBox.setAttribute("geometry", {
            primitive: 'box',
            height: 1.1,
            width: 0.01,
            depth: 1.4
        });
        redWineBox.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.9
        });
        redWineBox.setAttribute("rotation", {
            x: 0,
            y: -90,
            z: 0
        });
        redWineBox.setAttribute('material', {
            color: 'black',
            opacity: 0.75
        });
        var redWineBoxText = document.createElement('a-text');
        redWineBoxText.setAttribute("id", "redWineText");
        redWineBoxText.setAttribute('text', {
            color: "white",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        redWineBoxText.setAttribute('position', {
            x: 0,
            y: 0,
            z: -0.8
        });
        redWineBoxText.setAttribute("scale", {
            x: 0.25,
            y: 0.25,
            z: 0.25
        });
        if (document.getElementById('redWineBox') == null && boxShowing === false) {
            headEl.appendChild(redWineBox);
            headEl.appendChild(redWineBoxText);
            boxShowing = true;
            if (redWineBox !== null) {
                window.addEventListener("keydown", function (e) {
                    if (e.keyCode === 81 || e.keyCode === 27) {
                        removeRedWineSign();
                    }
                    if (boxShowing === false) {
                        console.log("Nothing to add");
                    } else {
                        if (e.keyCode === 69 || e.keyCode === 32) {
                            basket.push(breadData[0].p_id);
                            alert("Du har tilføjet 1 flaske rødvin til din kurv.");
                            console.log(basket.length);
                        }
                    }
                    e.preventDefault();
                });
            }
        } else {
            console.log('RedWineBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Hvidvin
    document.getElementById("hvidvin").addEventListener('mouseenter', function () {
        var text = whiteWineData[0].p_navn + "\n" + whiteWineData[0].p_pris + " kr.\n" + whiteWineData[0].p_beskrivelse;
        var whiteWineBox = document.createElement("a-entity");
        whiteWineBox.setAttribute("id", "whiteWineBox");
        whiteWineBox.setAttribute("geometry", {
            primitive: 'box',
            height: 1.1,
            width: 0.01,
            depth: 1.4
        });
        whiteWineBox.setAttribute("position", {
            x: 0,
            y: 0,
            z: -0.9
        });
        whiteWineBox.setAttribute("rotation", {
            x: 0,
            y: -90,
            z: 0
        });
        whiteWineBox.setAttribute("material", {
            color: "black",
            opacity: 0.75
        });
        var whiteWineText = document.createElement('a-text');
        whiteWineText.setAttribute("id", "whiteWineBoxText");
        whiteWineText.setAttribute("text", {
            color: "white",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        whiteWineText.setAttribute("position", {
            x: 0,
            y: 0,
            z: -0.8
        });
        whiteWineText.setAttribute("scale", {
            x: 0.25,
            y: 0.25,
            z: 0.25
        });
        if (document.getElementById('whiteWineBox') == null && boxShowing === false) {
            headEl.appendChild(whiteWineBox);
            headEl.appendChild(whiteWineText);
            boxShowing = true;
            if (whiteWineBox !== null) {
                window.addEventListener("keydown", function (e) {
                    if (e.keyCode === 81 || e.keyCode === 27) {
                        removeWhiteWineSign();
                    }
                    if (boxShowing === false) {
                        console.log("Nothing to add");
                    } else {
                        if (e.keyCode === 69 || e.keyCode === 32) {
                            basket.push(breadData[0].p_id);
                            alert("Du har tilføjet 1 flaske hvidvin til din kurv.");
                            console.log(basket.length);
                        }
                    }
                    e.preventDefault();
                });
            }
        } else {
            console.log('WhiteWineBox already exists. NOT spawning another.');
        }
    });
    //#endregion
    window.addEventListener("keydown", function (e) {
        if (!boxShowing) {
            var text = "";
            var totalPrice = 0.0;
            if (e.keyCode === 16) {
                boxShowing = true;
                var basketBoxEl = document.createElement("a-entity");
                basketBoxEl.setAttribute("id", "basketBox");
                basketBoxEl.setAttribute("geometry", {
                    primitive: "box",
                    height: 1.1,
                    width: 0.01,
                    depth: 1.4
                });
                basketBoxEl.setAttribute("position", {
                    x: 0,
                    y: 0,
                    z: -0.9
                });
                basketBoxEl.setAttribute("rotation", {
                    x: 0,
                    y: -90,
                    z: 0
                });
                basketBoxEl.setAttribute("material", {
                    color: "black",
                    opacity: 0.75
                });
                if (document.getElementById("basketBox") === null) {
                    headEl.appendChild(basketBoxEl);
                } else {
                    console.log("Basket already showing!");
                }
                if (basket.length === 0) {
                    text = "Du har endnu ikke nogen varer i din kurv.";
                } else {
                    for (var i = 0; i < basket.length; i++) {
                        totalPrice += eval(getProduct(basket[i])[0].p_pris);
                        text += getProduct(basket[i])[0].p_navn;
                        text += "\t" + getProduct(basket[i])[0].p_pris + "kr.";
                        text += "\n";
                        text += "\n";
                    }
                    text += "Total: \t \t \t" + totalPrice + "kr.";
                }
                console.log(text);
            }
        } else {
            removeBasketBox();
        }
        e.preventDefault();
    });

    // #region Basket Overview


    // #endregion
}
//#endregion

//#region RemoveBoxes Functions
function removeBasketBox() {
    if (document.getElementById("basketBox") !== null) {
        var box = document.getElementById("basketBox");
        box.parentNode.removeChild(box);
        boxShowing = false;
    }
}

function removeBreadSign() {
    if ((document.getElementById("breadBox") && document.getElementById("breadText")) !== null) {
        var text = document.getElementById("breadText");
        var box = document.getElementById("breadBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
    }
}
function removeOrangeSign() {
    if ((document.getElementById("orangeBox") && document.getElementById("orangeText")) !== null) {
        var text = document.getElementById("orangeText");
        var box = document.getElementById("orangeBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
    }
}

function removeRedWineSign() {
    if ((document.getElementById("redWineBox") && document.getElementById("redWineText")) !== null) {
        var text = document.getElementById("redWineText");
        var box = document.getElementById("redWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
    }
}

function removeWhiteWineSign() {
    if ((document.getElementById("whiteWineBox") && document.getElementById("whiteWineBoxText") !== null)) {
        var text = document.getElementById("whiteWineBoxText");
        var box = document.getElementById("whiteWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
    }
}
$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 12000);

});
//#endregion