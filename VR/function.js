function objectListeners() {


    document.getElementById("bread_model").addEventListener('mouseenter', function () {
        document.getElementById("bread_model").addEventListener('click', function () {
            var breadData = getProduct(1);
            var text = breadData[0].p_navn + "\n" + breadData[0].p_pris + " kr.\n" + breadData[0].p_beskrivelse;
            var sceneEl = document.querySelector('a-scene');
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
    });

    // Adding the signs
    // document.getElementById("bread_model").addEventListener('click', function () {
    //     var breadData = getProduct(1);
    //     var text = breadData[0].p_navn + "\n" + breadData[0].p_pris + " kr.\n" + breadData[0].p_beskrivelse;
    //     var sceneEl = document.querySelector('a-scene');
    //     var breadBoxEl = document.createElement('a-entity');
    //     breadBoxEl.setAttribute("id", "breadBox");
    //     breadBoxEl.setAttribute('geometry', {
    //         primitive: 'box',
    //         height: 1.2,
    //         width: 0.01,
    //         depth: 5
    //     });
    //     breadBoxEl.setAttribute('position', {
    //         x: -13,
    //         y: 1.5,
    //         z: 2.5
    //     });
    //     breadBoxEl.setAttribute('material', {
    //         color: 'white'
    //     });

    //     var breadBoxTextEl = document.createElement('a-text');
    //     breadBoxTextEl.setAttribute("id", "breadText");
    //     breadBoxTextEl.setAttribute('text', {
    //         color: "black",
    //         value: text,
    //         font: 'dejavu',
    //         align: 'center'
    //     });
    //     breadBoxTextEl.setAttribute('position', {
    //         x: -12.9,
    //         y: 1.5,
    //         z: 2.5
    //     });
    //     breadBoxTextEl.setAttribute('rotation', {
    //         x: 0,
    //         y: 90,
    //         z: 0
    //     });
    //     if (document.getElementById('breadBox') == null) {
    //         sceneEl.appendChild(breadBoxEl);
    //         sceneEl.appendChild(breadBoxTextEl);
    //     } else {
    //         console.log('BreadBox already exists. NOT spawning another.');
    //     }
    // });

    document.getElementById("oranges").addEventListener('click', function () {
        var orangeData = getProduct(2);
        var text = orangeData[0].p_navn + "\n" + orangeData[0].p_pris + " kr.\n" + orangeData[0].p_beskrivelse;
        var sceneEl = document.querySelector('a-scene');
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
}