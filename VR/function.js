var basket = Array();

function objectListeners() {
    var headEl = document.getElementById("head");

    //#region Bread
    document.getElementById("bread_model").addEventListener('mouseenter', function () {
        var breadData = getProduct(1);
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
        if (document.getElementById('breadBox') == null) {
            headEl.appendChild(breadBoxEl);
            headEl.appendChild(breadBoxTextEl);
            if (breadBoxEl !== null) {
                console.log("The breadbox exists!");
                window.addEventListener("keydown", function(e) {
                    if (e.keyCode === 81 || e.keyCode === 27) {
                        removeBreadSign();
                    }
                    if (e.keyCode === 69 || e.keyCode === 32) {
                        basket.push(breadData[0].p_id);
                        alert("Varen er nu tilføjet til din kurv.");
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
        var orangeData = getProduct(2);
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
        if (document.getElementById('orangeBox') == null) {
            headEl.appendChild(orangeBox);
            headEl.appendChild(orangeBoxText);
        } else {
            console.log('OrangeBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Rødvin
    document.getElementById('rødvin').addEventListener('mouseenter', function () {
        var redWineData = getProduct(3);
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
        if (document.getElementById('redWineBox') == null) {
            headEl.appendChild(redWineBox);
            headEl.appendChild(redWineBoxText);
        } else {
            console.log('RedWineBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Hvidvin
    document.getElementById("hvidvin").addEventListener('mouseenter', function () {
        var whiteWineData = getProduct(4);
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
        if (document.getElementById('whiteWineBox') == null) {
            headEl.appendChild(whiteWineBox);
            headEl.appendChild(whiteWineText);
        } else {
            console.log('WhiteWineBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region MouseLeave Events
    // document.getElementById('bread_model').addEventListener('mouseleave', function () {
    //     setTimeout(removeBreadSign, 5000);
    // });

    document.getElementById('oranges').addEventListener('mouseleave', function () {
        setTimeout(removeOrangeSign, 5000);
    });

    document.getElementById('rødvin').addEventListener('mouseleave', function () {
        setTimeout(removeRedWineSign, 10000);
    });
    document.getElementById('hvidvin').addEventListener('mouseleave', function () {
        setTimeout(removeWhiteWineSign, 10000);
    });


}
//#endregion

//#region RemoveBoxes Functions
function removeBreadSign() {
    if ((document.getElementById("breadBox") && document.getElementById("breadText")) !== null) {
        var text = document.getElementById("breadText");
        var box = document.getElementById("breadBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
    }
}
function removeOrangeSign() {
    if ((document.getElementById("orangeBox") && document.getElementById("orangeText")) !== null) {
        var text = document.getElementById("orangeText");
        var box = document.getElementById("orangeBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
    }
}

function removeRedWineSign() {
    if ((document.getElementById("redWineBox") && document.getElementById("redWineText")) !== null) {
        var text = document.getElementById("redWineText");
        var box = document.getElementById("redWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
    }
}

function removeWhiteWineSign() {
    if ((document.getElementById("whiteWineBox") && document.getElementById("whiteWineBoxText") !== null)) {
        var text = document.getElementById("whiteWineBoxText");
        var box = document.getElementById("whiteWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
    }
}
$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 12000);

});
//#endregion

