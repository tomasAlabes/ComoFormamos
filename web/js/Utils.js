var MyRaphaelUtils = {
    editorStartAll:function () {
        // storing original coordinates
        for (var i in this.items) {
            try {
                this.items[i].attr({opacity:0.5});
            } catch (ex) {
            }
            if (this.items[i].type == "path") {
                this.items[i].ox = this.items[i].getBBox().x;
                this.items[i].oy = this.items[i].getBBox().y;
            }
            else {
                this.items[i].ox = this.items[i].attr("cx") || this.items[i].attr("x");
                this.items[i].oy = this.items[i].attr("cy") || this.items[i].attr("y");
            }
        }
    },

    editorMoveAll:function (dx, dy) {
        for (var i in this.items) {
            if (this.items[i].attr("cx")) { // ellipse
                this.items[i].attr({cx: this.items[i].ox + dx, cy: this.items[i].oy + dy});
            } else if (this.items[i].attr("x")) { //circle
                this.items[i].attr({x: this.items[i].ox + dx, y: this.items[i].oy + dy});
            } else { // path
                this.items[i].translate(this.items[i].ox - this.items[i].getBBox().x + dx, this.items[i].oy - this.items[i].getBBox().y + dy);
            }
        }
    },

    editorUpAll:function (evt) {
        if (evt.clientX > 400  && evt.clientY > 0) {
            for (var i in this.items) {
                this.items[i].attr({opacity:1});
            }
        }else{
            eve("playerDroppedOutOfRange", this, this);
        }
    },

    optionsUpAll:function (evt) {
        if (evt.clientX > 400 && evt.clientY > 0) {
            for (var i in this.items) {
                this.items[i].attr({opacity:1});
            }
            eve("playerDropped", this, this);
        }
    }
};