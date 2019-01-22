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
        if (document.getElementById('breadBox') == null && boxShowing === false) {
            headEl.appendChild(breadBoxEl);
            headEl.appendChild(breadBoxTextEl);
            boxShowing = true;
            if (breadBoxEl !== null) {
                console.log("The breadbox exists!");
                window.addEventListener("keydown", addButtons(event, "b"));
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
                window.addEventListener("keydown", addButtons("o"));
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
                window.addEventListener("keydown", addButtons("rw"));
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
                window.addEventListener("keydown", addButtons("ww"));
            }
        } else {
            console.log('WhiteWineBox already exists. NOT spawning another.');
        }
    });
    //#endregion
    function addButtons(e, grocery) {
        e = e || window.event;
        e.preventDefault();
        if (e.keyCode === 81 || e.keyCode === 27) {
            removeBreadSign();
        }
    }
}
//#endregion

//#region RemoveBoxes Functions
function removeBreadSign() {
    if ((document.getElementById("breadBox") && document.getElementById("breadText")) !== null) {
        var text = document.getElementById("breadText");
        var box = document.getElementById("breadBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
        window.removeEventListener("keydown", addButtons);
    }
}
function removeOrangeSign() {
    if ((document.getElementById("orangeBox") && document.getElementById("orangeText")) !== null) {
        var text = document.getElementById("orangeText");
        var box = document.getElementById("orangeBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
        window.removeEventListener("keydown");
    }
}

function removeRedWineSign() {
    if ((document.getElementById("redWineBox") && document.getElementById("redWineText")) !== null) {
        var text = document.getElementById("redWineText");
        var box = document.getElementById("redWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
        window.removeEventListener("keydown");
    }
}

function removeWhiteWineSign() {
    if ((document.getElementById("whiteWineBox") && document.getElementById("whiteWineBoxText") !== null)) {
        var text = document.getElementById("whiteWineBoxText");
        var box = document.getElementById("whiteWineBox");
        text.parentNode.removeChild(text);
        box.parentNode.removeChild(box);
        boxShowing = false;
        window.removeEventListener("keydown");
    }
}
$(document).ready(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
    }, 12000);

});
//#endregion

