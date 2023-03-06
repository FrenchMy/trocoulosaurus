window.addEventListener("blur", () => {
    document.title = "Hooo noooon... reviens";
});
window.addEventListener("focus", () => {
    document.title = "AMUSAURUS";
});


/**
 * Basé fortement sur https://developer.mozilla.org/en-US/docs/Web/API/Document/drag_event
 */

let currentDraggedBlock;//on veut que cette référence soit globale

let dropZone = document.querySelector("#container");
const zone = document.querySelector(".konvajs-content canvas");

let rect;

let selected = [];
const poubelle = document.querySelector(".supprimer-canva");






document.addEventListener("DOMContentLoaded", function (argument) {
    
    /**
     * Évenement qui est lancé lors du début de drag de l'item
     * On récupère la référence à l'item cliqué avec event.target
     */
    document.addEventListener("dragstart", function (event) {
        rect = dropZone.getBoundingClientRect();
        //on garde la référence globale pour usage ultérieur
        currentDraggedBlock = event.target;
        //on ajoute une classe qui permet de changer le visuel
        currentDraggedBlock.classList.add("dragging");
    }, false);


    /**
    * Évenement qui est lancé lors de la fin de drag de l'item
    * On récupère la référence à l'item relaché avec la référence globale currentDraggedBlock
    */
    document.addEventListener("dragend", function (event) {
        //on enlève une classe qui change le visuel
        currentDraggedBlock.classList.remove("dragging");
        //on réinitialise la référence globale
        currentDraggedBlock = undefined;
    }, false);



    /**
    * Évenement qui est lancé lorsque qu'un element est sous l'item draggé
    * On bloque le comportement normal du navigateur afin d'éviter des bogues
    */
    document.addEventListener("dragover", function (event) {

        //utiliser cette fonction si besoin est

        event.preventDefault();

    }, false);


    /**
     * Évenement qui est lancé lorsque l'item draggé entre sur un autre élément
     * On récupère la référence à l'élément SOUS l'item draggé avec event.target
     */
    document.addEventListener("dragenter", function (event) {

        dropZone = event.target;
        //on s'assure que ce soit bien une zone de drop à l'aide de la classe (on pourrait aussi utilisedr un attribut data)
        if (dropZone.classList && dropZone.classList.contains("dropZone")) {
            //on ajoute une classe qui permet de changer le visuel sur la zone de drop
            dropZone.classList.add("over");
        };

    }, false);

    /**
    * Évenement qui est lancé lorsque l'item draggé sors de l'élément sur lequel il était entré
    * On récupère la référence à l'élément SOUS l'item draggé avec event.target
    */
    document.addEventListener("dragleave", function (event) {

        dropZone = event.target;
        //on s'assure que ce soit bien une zone de drop à l'aide de la classe (on pourrait aussi utilisedr un attribut data)
        if (dropZone.classList && dropZone.classList.contains("dropZone")) {
            //on enlève une classe qui permet de changer le visuel sur la zone de drop
            dropZone.classList.remove("over");
        };

    }, false);

    /**
    * Évenement qui est lancé lorsque l'item draggé est relâché sur un zone de drop
    * On récupère la référence à l'élément SOUS l'item relâché avec event.target
    */
    document.addEventListener("drop", function (event) {
        //On bloque le comportement normal du navigateur afin d'éviter des bogues (certains nsavigateurs pourraient traiter cela comme ouvrir dans un autre onglet)
        event.preventDefault();

        dropZone = event.target;
        

        //on s'assure que ce soit bien une zone de drop à l'aide de la classe (on pourrait aussi utilisedr un attribut data)
        if ( dropZone.tagName == "CANVAS" ) {
            //pour le placer comme nouvel enfant de la zone de drop
            //dropZone.appendChild(currentDraggedBlock);
            creerItem(currentDraggedBlock.src);
        };


    }, false);


    const items = document.querySelectorAll(".item");

    items.forEach(dessin => {
        dessin.addEventListener("click", function (event) {
            
            //On bloque le comportement normal du navigateur afin d'éviter des bogues (certains nsavigateurs pourraient traiter cela comme ouvrir dans un autre onglet)
            event.preventDefault();
    
            dropZone = event.target;
            creerItem(dessin.src);
    
    
        }, false);
    });

    poubelle.addEventListener("click", supprimerItem);



});

function creerItem(url) {
    let imageItem = new Image();
    imageItem.onload = function () {
        let item = new Konva.Image({
            x: 50,
            y: 50,
            image: imageItem,
            width: 200,
            height: 150,
            draggable: true,
        });

        layer.add(item);

        item.on("mousedown touchstart",function (e) {
            const elem = e.currentTarget;
            elem.zIndex(layer.getChildren().length - 1); 
            //on met au dernier index valide sur le layer
        });
    }
    imageItem.src = url;
}

let shapes;

function supprimerItem() {
    
    if (selected.length > 0) {

        console.log("ok");
        for (let i = 0; i < selected.length; i++) {
            const element = selected[i];
            tr.nodes([]);
            element.destroy();
        }

        
    } else {
        console.log("pas bon");
        console.log(selected.length);
    }
    
}


let stage = new Konva.Stage({
    container: 'container',
    width: 1536,
    height: 880,
});



let layer = new Konva.Layer();
stage.add(layer);

let tr = new Konva.Transformer({
    anchorFill: 'red',
    anchorStroke: 'black',
    anchorSize: 40,
    rotateAnchorOffset: 100,
});
layer.add(tr);





// add a new feature, lets add ability to draw selection rectangle
let selectionRectangle = new Konva.Rect({
    fill: 'rgba(0,0,255,0.5)',
    visible: false,
});
layer.add(selectionRectangle);

let x1, y1, x2, y2;
stage.on('mousedown touchstart', (e) => {
    // do nothing if we mousedown on any shape
    if (e.target !== stage) {
        return;
    }
    e.evt.preventDefault();
    x1 = stage.getPointerPosition().x;
    y1 = stage.getPointerPosition().y;
    x2 = stage.getPointerPosition().x;
    y2 = stage.getPointerPosition().y;

    selectionRectangle.visible(true);
    selectionRectangle.width(0);
    selectionRectangle.height(0);
});

stage.on('mousemove touchmove', (e) => {
    // do nothing if we didn't start selection
    if (!selectionRectangle.visible()) {
        return;
    }
    e.evt.preventDefault();
    x2 = stage.getPointerPosition().x;
    y2 = stage.getPointerPosition().y;

    selectionRectangle.setAttrs({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
    });
});


stage.on('mouseup touchend', (e) => {
    // do nothing if we didn't start selection
    if (!selectionRectangle.visible()) {
        return;
    }
    e.evt.preventDefault();
    // update visibility in timeout, so we can check it in click event
    setTimeout(() => {
        selectionRectangle.visible(false);
    });

    shapes = layer.getChildren(function(node){
        return node.getClassName() === 'Image';
     });

    let box = selectionRectangle.getClientRect();
    selected = shapes.filter((shape) =>
        Konva.Util.haveIntersection(box, shape.getClientRect())
    );
    
    if (selected.length > 0) {
        selected[0].moveToTop();
    }
    
    tr.nodes(selected);
    
});

// clicks should select/deselect shapes
stage.on('click tap', function (e) {
    // if we are selecting with rect, do nothing
    if (selectionRectangle.visible()) {
        return;
    }


    // if click on empty area - remove all selections
    if (e.target === stage || e.target.name().match("_anchor")) {
        tr.nodes([]);
        return;
    }


    // do we pressed shift or ctrl?
    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = tr.nodes().indexOf(e.target) >= 0;
    console.log(isSelected);

    if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        tr.nodes([e.target]);
        selected.push(e.target);
    } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = tr.nodes().slice(); // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1);
        tr.nodes(nodes);
        selected.pop();
     } 
     //else if (metaPressed && !isSelected) {
    //     // add the node into selection
    //     const nodes = tr.nodes().concat([e.target]);
    //     tr.nodes(nodes);
    // }
});