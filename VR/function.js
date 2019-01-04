function objectListeners() {
    var sceneEl = document.querySelector('a-scene');
//#region Bread
    document.getElementById("bread_model").addEventListener('mouseenter', function () {
            var breadData = getProduct(1);
            var text = breadData[0].p_navn + "\n" + breadData[0].p_pris + " kr.\n" + breadData[0].p_beskrivelse;
            var breadBoxEl = document.createElement('a-entity');
            breadBoxEl.setAttribute("id", "breadBox");
            breadBoxEl.setAttribute('geometry', {
                primitive: 'box',
                height: 1.2,
                width: 0.01,
                depth: 5
            });
            breadBoxEl.setAttribute('position', {
                x: -13,
                y: 1.5,
                z: 2.5
            });
            breadBoxEl.setAttribute('material', {
                color: 'white'
            });

            var breadBoxTextEl = document.createElement('a-text');
            breadBoxTextEl.setAttribute("id", "breadText");
            breadBoxTextEl.setAttribute('text', {
                color: "black",
                value: text,
                font: 'dejavu',
                align: 'center'
            });
            breadBoxTextEl.setAttribute('position', {
                x: -12.9,
                y: 1.5,
                z: 2.5
            });
            breadBoxTextEl.setAttribute('rotation', {
                x: 0,
                y: 90,
                z: 0
            });
            if (document.getElementById('breadBox') == null) {
                sceneEl.appendChild(breadBoxEl);
                sceneEl.appendChild(breadBoxTextEl);
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
            height: 1.575,
            width: 0.01,
            depth: 5
        });
        orangeBox.setAttribute('position', {
            x: -9,
            y: 2,
            z: -7
        });
        orangeBox.setAttribute("rotation", {
            x: 0,
            y: 90,
            z: 0
        });
        orangeBox.setAttribute('material', {
            color: 'white'
        });

        var orangeBoxText = document.createElement('a-text');
        orangeBoxText.setAttribute("id", "orangeText");
        orangeBoxText.setAttribute('text', {
            color: "black",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        orangeBoxText.setAttribute('position', {
            x: -9,
            y: 2,
            z: -6.9
        });
        orangeBoxText.setAttribute('rotation', {
            x: 0,
            y: 0,
            z: 0
        });
        if (document.getElementById('orangeBox') == null) {
            sceneEl.appendChild(orangeBox);
            sceneEl.appendChild(orangeBoxText);
        } else {
            console.log('OrangeBox already exists. NOT spawning another.');
        }
    });
    //#endregion

    //#region Rødvin
    document.getElementById('rødvin').addEventListener('mouseenter', function() {
        var redWineData = getProduct(3);
        var text = redWineData[0].p_navn + "\n" + redWineData[0].p_pris + " kr.\n" + redWineData[0].p_beskrivelse;
        var redWineBox = document.createElement('a-entity');
        redWineBox.setAttribute("id", "redWineBox");
        redWineBox.setAttribute("geometry", {
            primitive: 'box',
            height: 4.2,
            width: 0.01,
            depth: 5
        });
        redWineBox.setAttribute('position', {
            x: 13,
            y: 2,
            z: 3
        });
        redWineBox.setAttribute("rotation", {
            x: 0,
            y: 0,
            z: 0
        });
        redWineBox.setAttribute('material', {
            color: 'white'
        });
        var redWineBoxText = document.createElement('a-text');
        redWineBoxText.setAttribute("id", "redWineText");
        redWineBoxText.setAttribute('text', {
            color: "black",
            value: text,
            font: 'dejavu',
            align: 'center'
        });
        redWineBoxText.setAttribute('position', {
            x: 12.9,
            y: 2,
            z: 3
        });
        redWineBoxText.setAttribute("rotation", {
            x: 0,
            y: -90,
            z: 0
        });
        if (document.getElementById('redWineBox') == null) {
            sceneEl.appendChild(redWineBox);
            sceneEl.appendChild(redWineBoxText);
        } else {
            console.log('RedWineBox already exists. NOT spawning another.');
        }
    })

    document.getElementById('bread_model').addEventListener('mouseleave', function() {
        setTimeout(removeBreadSign, 5000);
    });
    
    document.getElementById('oranges').addEventListener('mouseleave', function() {
        setTimeout(removeOrangeSign, 5000);
    });

    document.getElementById('rødvin').addEventListener('mouseleave', function() {
        setTimeout(removeRedWineSign, 10000);
    });
}

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