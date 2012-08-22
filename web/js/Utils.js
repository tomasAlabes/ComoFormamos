var MyRaphaelUtils = {
    start:function () {
        // keep the relative coords at the start of the drag
        this.ox = 0;
        this.oy = 0;
        // animate attributes to a "being dragged" state
        this.animate({"opacity":0.5}, 500);
    },

    paletteStart:function () {
        // keep the relative coords at the start of the drag
        this.ox = 0;
        this.oy = 0;

        var newPaletteObj = this.clone();
        optionsSet.exclude(this);
        optionsSet.push(newPaletteObj);
        MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(newPaletteObj);

        this.animate({"opacity":0.5}, 500);
    },

    move: function (dx, dy) {
        // calculate translation coords
        var new_x = dx - this.ox;
        var new_y = dy - this.oy;
        // translate the obj
        // Transform will NOT transform the element itself, but it will transform the element's coordinate system.
        // "changing the transform attribute won't change the shape dimensions or position, but it will change the shape's coordinate system"
        // http://cancerbero.vacau.com/raphaeltut/
        this.transform('...T' + new_x + ',' + new_y);
        // save the new values for future drags
        this.ox = dx;
        this.oy = dy;
    },

    paletteUp: function(){
        if(!MyRaphaelUtils.isInsideCanvas(this)){
            this.remove();
            $.pnotify({
                title: 'Error!',
                text: 'Tiraste al jugador afuera de la cancha!',
                type: 'error'
            });
        }else{
            //Giving the new D&D behaviour
            this.undrag();
            MyRaphaelUtils.addDragAndDropCapabilityToSet(this);
            this.animate({"opacity":1}, 500);
            eve("playerDropped", this, this);
        }
    },

        up: function () {
            if(!MyRaphaelUtils.isInsideCanvas(this)){
                this.animate({transform:'...T' + (-this.ox) + ',' + (-this.oy)}, 1000, "bounce");
            }
            this.animate({"opacity": 1}, 500);

        },

        isInsideCanvas: function(obj){
            var canvasBBox = pitch.getBBox();
            var objectBBox = obj.getBBox();
            var objectPartiallyOutside = !Raphael.isPointInsideBBox(canvasBBox, objectBBox.x, objectBBox.y) || !Raphael.isPointInsideBBox(canvasBBox, objectBBox.x, objectBBox.y2) || !Raphael.isPointInsideBBox(canvasBBox, objectBBox.x2, objectBBox.y) || !Raphael.isPointInsideBBox(canvasBBox, objectBBox.x2, objectBBox.y2);
            //var elementsUnderPoint = paper.getElementsByPoint(event.clientX, event.clientY);
            //var objectUnderObject = elementsUnderPoint.length > 2; // Me and canvas
            return !(objectPartiallyOutside/* || objectUnderObject*/);
        },


        addDragAndDropCapabilityToSet: function(compSet) {
            compSet.drag(this.move, this.start, this.up, compSet, compSet, compSet);
        },

        addDragAndDropCapabilityToPaletteOption:function (compSet) {
            compSet.drag(this.move, this.paletteStart, this.paletteUp, compSet, compSet, compSet);
        }
};