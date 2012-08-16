/*! ComoFormamos - v0.1.0 - 2012-08-15
* http://comoformamos.appspot.com/
* Copyright (c) 2012 Tomas Alabes; Licensed MIT */

var paletteOptions = {
    "estrellita" : "M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z",
    "motorcito": "M17.41,20.395l-0.778-2.723c0.228-0.2,0.442-0.414,0.644-0.643l2.721,0.778c0.287-0.418,0.534-0.862,0.755-1.323l-2.025-1.96c0.097-0.288,0.181-0.581,0.241-0.883l2.729-0.684c0.02-0.252,0.039-0.505,0.039-0.763s-0.02-0.51-0.039-0.762l-2.729-0.684c-0.061-0.302-0.145-0.595-0.241-0.883l2.026-1.96c-0.222-0.46-0.469-0.905-0.756-1.323l-2.721,0.777c-0.201-0.228-0.416-0.442-0.644-0.643l0.778-2.722c-0.418-0.286-0.863-0.534-1.324-0.755l-1.96,2.026c-0.287-0.097-0.581-0.18-0.883-0.241l-0.683-2.73c-0.253-0.019-0.505-0.039-0.763-0.039s-0.51,0.02-0.762,0.039l-0.684,2.73c-0.302,0.061-0.595,0.144-0.883,0.241l-1.96-2.026C7.048,3.463,6.604,3.71,6.186,3.997l0.778,2.722C6.736,6.919,6.521,7.134,6.321,7.361L3.599,6.583C3.312,7.001,3.065,7.446,2.844,7.907l2.026,1.96c-0.096,0.288-0.18,0.581-0.241,0.883l-2.73,0.684c-0.019,0.252-0.039,0.505-0.039,0.762s0.02,0.51,0.039,0.763l2.73,0.684c0.061,0.302,0.145,0.595,0.241,0.883l-2.026,1.96c0.221,0.46,0.468,0.905,0.755,1.323l2.722-0.778c0.2,0.229,0.415,0.442,0.643,0.643l-0.778,2.723c0.418,0.286,0.863,0.533,1.323,0.755l1.96-2.026c0.288,0.097,0.581,0.181,0.883,0.241l0.684,2.729c0.252,0.02,0.505,0.039,0.763,0.039s0.51-0.02,0.763-0.039l0.683-2.729c0.302-0.061,0.596-0.145,0.883-0.241l1.96,2.026C16.547,20.928,16.992,20.681,17.41,20.395zM11.798,15.594c-1.877,0-3.399-1.522-3.399-3.399s1.522-3.398,3.399-3.398s3.398,1.521,3.398,3.398S13.675,15.594,11.798,15.594zM27.29,22.699c0.019-0.547-0.06-1.104-0.23-1.654l1.244-1.773c-0.188-0.35-0.4-0.682-0.641-0.984l-2.122,0.445c-0.428-0.364-0.915-0.648-1.436-0.851l-0.611-2.079c-0.386-0.068-0.777-0.105-1.173-0.106l-0.974,1.936c-0.279,0.054-0.558,0.128-0.832,0.233c-0.257,0.098-0.497,0.22-0.727,0.353L17.782,17.4c-0.297,0.262-0.568,0.545-0.813,0.852l0.907,1.968c-0.259,0.495-0.437,1.028-0.519,1.585l-1.891,1.06c0.019,0.388,0.076,0.776,0.164,1.165l2.104,0.519c0.231,0.524,0.541,0.993,0.916,1.393l-0.352,2.138c0.32,0.23,0.66,0.428,1.013,0.6l1.715-1.32c0.536,0.141,1.097,0.195,1.662,0.15l1.452,1.607c0.2-0.057,0.399-0.118,0.596-0.193c0.175-0.066,0.34-0.144,0.505-0.223l0.037-2.165c0.455-0.339,0.843-0.747,1.152-1.206l2.161-0.134c0.152-0.359,0.279-0.732,0.368-1.115L27.29,22.699zM23.127,24.706c-1.201,0.458-2.545-0.144-3.004-1.345s0.143-2.546,1.344-3.005c1.201-0.458,2.547,0.144,3.006,1.345C24.931,22.902,24.328,24.247,23.127,24.706z",
    "magico": "M23.043,4.649l-0.404-2.312l-1.59,1.727l-2.323-0.33l1.151,2.045l-1.032,2.108l2.302-0.463l1.686,1.633l0.271-2.332l2.074-1.099L23.043,4.649zM26.217,18.198l-0.182-1.25l-0.882,0.905l-1.245-0.214l0.588,1.118l-0.588,1.118l1.245-0.214l0.882,0.905l0.182-1.25l1.133-0.56L26.217,18.198zM4.92,7.672L5.868,7.3l0.844,0.569L6.65,6.853l0.802-0.627L6.467,5.97L6.118,5.013L5.571,5.872L4.553,5.908l0.647,0.786L4.92,7.672zM10.439,10.505l1.021-1.096l1.481,0.219l-0.727-1.31l0.667-1.341l-1.47,0.287l-1.069-1.048L10.16,7.703L8.832,8.396l1.358,0.632L10.439,10.505zM17.234,12.721c-0.588-0.368-1.172-0.618-1.692-0.729c-0.492-0.089-1.039-0.149-1.425,0.374L2.562,30.788h6.68l9.669-15.416c0.303-0.576,0.012-1.041-0.283-1.447C18.303,13.508,17.822,13.09,17.234,12.721zM13.613,21.936c-0.254-0.396-0.74-0.857-1.373-1.254c-0.632-0.396-1.258-0.634-1.726-0.69l4.421-7.052c0.064-0.013,0.262-0.021,0.543,0.066c0.346,0.092,0.785,0.285,1.225,0.562c0.504,0.313,0.908,0.677,1.133,0.97c0.113,0.145,0.178,0.271,0.195,0.335c0.002,0.006,0.004,0.011,0.004,0.015L13.613,21.936z",
    "artista": "M15.653,7.25c-3.417,0-8.577,0.983-8.577,3.282c0,1.91,2.704,3.229,1.691,3.889c-1.02,0.666-2.684-1.848-4.048-1.848c-1.653,0-2.815,1.434-2.815,2.926c0,4.558,6.326,8.25,13.749,8.25c7.424,0,13.443-3.692,13.443-8.25C29.096,10.944,23.077,7.25,15.653,7.25zM10.308,13.521c0-0.645,0.887-1.166,1.98-1.166c1.093,0,1.979,0.521,1.979,1.166c0,0.644-0.886,1.166-1.979,1.166C11.195,14.687,10.308,14.164,10.308,13.521zM14.289,22.299c-1.058,0-1.914-0.68-1.914-1.518s0.856-1.518,1.914-1.518c1.057,0,1.914,0.68,1.914,1.518S15.346,22.299,14.289,22.299zM19.611,21.771c-1.057,0-1.913-0.681-1.913-1.519c0-0.84,0.856-1.521,1.913-1.521c1.059,0,1.914,0.681,1.914,1.521C21.525,21.092,20.67,21.771,19.611,21.771zM20.075,10.66c0-0.838,0.856-1.518,1.914-1.518s1.913,0.68,1.913,1.518c0,0.839-0.855,1.518-1.913,1.518C20.934,12.178,20.075,11.499,20.075,10.66zM24.275,19.482c-1.057,0-1.914-0.681-1.914-1.519s0.857-1.518,1.914-1.518c1.059,0,1.914,0.68,1.914,1.518S25.334,19.482,24.275,19.482zM25.286,15.475c-1.058,0-1.914-0.68-1.914-1.519c0-0.838,0.856-1.518,1.914-1.518c1.057,0,1.913,0.68,1.913,1.518C27.199,14.795,26.343,15.475,25.286,15.475z",
    "temperamental": "M17.5,19.508V8.626h-3.999v10.881c-1.404,0.727-2.375,2.178-2.375,3.869c0,2.416,1.959,4.375,4.375,4.375s4.375-1.959,4.375-4.375C19.876,21.686,18.905,20.234,17.5,19.508zM20.5,5.249c0-2.757-2.244-5-5.001-5s-4.998,2.244-4.998,5v12.726c-1.497,1.373-2.376,3.314-2.376,5.4c0,4.066,3.31,7.377,7.376,7.377s7.374-3.311,7.374-7.377c0-2.086-0.878-4.029-2.375-5.402V5.249zM20.875,23.377c0,2.963-2.41,5.373-5.375,5.373c-2.962,0-5.373-2.41-5.373-5.373c0-1.795,0.896-3.443,2.376-4.438V5.251c0-1.654,1.343-3,2.997-3s3,1.345,3,3v13.688C19.979,19.934,20.875,21.582,20.875,23.377zM22.084,8.626l4.5,2.598V6.029L22.084,8.626z"
};

var loadPitch = function (paper) {

    var pitchToImport = [{"path":"M415,567.5H20c-11.047,0-20-8.001-20-17.874 V17.874C0,8.001,8.953,0,20,0h395c11.047,0,20,8.001,20,17.874v531.752C435,559.499,426.047,567.5,415,567.5z","stroke":"none","fill":"#008000","type":"path","opacity":0.75},{"path":"M17.5,529.518h400v-22.343h-400V529.518z M17.5,484.833h400V462.49h-400V484.833z M17.5,440.146h400v-22.342h-400V440.146z M17.5,395.463h400V373.12h-400V395.463z M17.5,350.777h400v-22.344h-400V350.777z M17.5,306.093h400V283.75h-400V306.093z M17.5,261.407h400v-22.342h-400V261.407z M17.5,216.723h400V194.38h-400V216.723z M17.5,172.038h400v-22.343h-400V172.038z M17.5,127.353h400V105.01h-400V127.353z M17.5,82.667h400V60.324h-400V82.667z M17.5,37.982h400V15.639h-400V37.982z","stroke":"none","fill":"#008000","type":"path","opacity":0.125},{"path":"M15,507.594h2.5v39.799v4.469h5h44.531v2.234H67.5v-2.234h40h220h40v2.234h0.469v-2.234 H417.5v-44.268h2.5v-0.419h-2.5V60.325h2.5v-0.419h-2.5V15.64h-49.531v-2.234H367.5v2.234h-300v-2.234h-0.469v2.234H17.5v44.266H15 v0.419h2.5v446.85H15V507.594z M17.969,551.441v-3.631c2.078,0.213,3.824,1.772,4.062,3.631H17.969z M17.969,547.393V284.029H167.5 c0.168,24.538,22.504,44.405,50,44.405s49.836-19.867,50-44.405h149.531c0,87.22,0,176.918,0,263.362 c-2.344,0.217-4.289,1.955-4.531,4.051h-85v-80.016h-70c-9.121-10.871-23.633-17.874-40-17.874c-16.363,0-30.875,7.003-40,17.874 h-5h-65v80.016h-85C22.258,549.348,20.312,547.607,17.969,547.393z M17.969,283.471V20.109c2.344-0.217,4.289-1.955,4.531-4.05h85 v80.014h65h5c9.125,10.875,23.637,17.874,40,17.874c16.367,0,30.879-7,40-17.874h5h65V16.059h85 c0.242,2.095,2.188,3.833,4.531,4.05v263.362H267.5c-0.164-24.538-22.504-44.406-50-44.406s-49.832,19.868-50,44.406H17.969z M17.969,19.689v-3.631h4.062C21.793,17.916,20.047,19.477,17.969,19.689z M107.969,551.441v-79.597H172.5h90h64.531v79.597H267.5 v-26.394h-100v26.394H107.969z M107.969,95.654V16.059H167.5v26.392h100V16.059h59.531v79.595H107.969z M167.969,551.441v-25.975 h99.062v25.975H167.969z M167.969,284.029h48.594c0.129,0.36,0.492,0.559,0.938,0.559s0.81-0.199,0.938-0.559h48.594 c-0.172,24.29-22.312,43.987-49.531,43.987S168.141,308.318,167.969,284.029z M167.969,283.471 c0.172-24.29,22.312-43.987,49.531-43.987c27.219,0,49.359,19.697,49.531,43.987h-48.594c-0.129-0.359-0.492-0.559-0.938-0.559 s-0.809,0.199-0.938,0.559H167.969z M167.969,42.032V16.059h99.062v25.973H167.969z M178.125,471.427 c9.055-10.595,23.328-17.454,39.375-17.454s30.32,6.859,39.375,17.454H178.125z M178.125,96.073h78.75 c-9.055,10.595-23.328,17.455-39.375,17.455S187.18,106.668,178.125,96.073z M216.562,498.238c0,0.492,0.387,0.838,0.938,0.838 s0.938-0.346,0.938-0.838s-0.387-0.838-0.938-0.838S216.562,497.746,216.562,498.238z M216.562,69.262 c0,0.492,0.387,0.838,0.938,0.838s0.938-0.346,0.938-0.838c0-0.492-0.387-0.838-0.938-0.838S216.562,68.77,216.562,69.262z M412.969,551.441c0.238-1.857,1.984-3.418,4.062-3.631c0,1.189,0,2.439,0,3.631H412.969z M412.969,16.059h4.062v3.631 C414.953,19.477,413.207,17.916,412.969,16.059z","stroke":"none","fill":"#FFFFFF","type":"path"}];
    var pitch = paper.add(pitchToImport);
    pitch.transform("T150,0");
    return pitch;

};



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
var modelViewMap = []; //Map <ModelId, View> (< Backbone model id, Raphael set >
var playerCounter = 0;
var selectedTeamSize = 5;

$(function () {
    /*jslint newcap:false */ //This done for the Raphael use
    paper = Raphael('canvas_container', '598.28351', '600');
    /*jslint newcap:true */
    pitch = loadPitch(paper);
    optionsSet = paper.set();
    var paletteBorder = paper.rect(0,0,120,pitch.getBBox().height,10);
    optionsSet.push(paletteBorder);
    var i = 1;
    var paletteYOffset = 35;
    var raphaData = [{"stroke":"#000000","fill":"#FFFFFF","type":"path","path":" M-273.116,167.96c-1.092,0.845-3.014-0.161-3.729,0.967c-0.334,0.527-1.562,0.979-0.549,1.325c0.979,0.334-1.116,0.928,0.478,1.063 c0.961,0.083,2.382,1.271,1.838,2.055c-0.612,0.885,0.427,0.892,0.524,1.497c0.089,0.546,1.383,0.562,1.86,0.188 c0.712-0.554,0.159-1.557,0.763-2.24c0.564-0.643,0.454-1.646,1.005-2.25c1.477-1.618,4.104-1.453,6.067-2.43 c0.751-0.372,1.268-0.983,2.203-1.037c1.615-0.091,3.554-1.952,4.588-1.519c1.554,0.65,2.808,4.206,4.717,5.892 c1.596,1.403,4.387,2.688,4.863,4.08c0.234,0.68,0.547,1.273,1.003,1.685c0.842,0.754,2.348,0.66,2.675-0.586 c0.321-1.219-0.159-2.709,0.906-3.583c0.93-0.761,0.997-1.854,1.119-2.92c0,0-0.52-1.514-1.289-0.999 c-0.974,0.65-1.422,1.772-2.354,2.371c-0.828,0.533-1.891,0.011-2.462-0.872c-0.896-1.381-1.888-2.719-2.767-4.11 c-0.641-1.014-1.74-1.688-1.882-3.036c-0.188-1.761-1.567-3.345-2.776-4.687c-0.728-0.808-1.989-1.454-2.227-2.455 c-0.326-1.384-0.181-3.149-0.896-4.305c-0.545-0.881,0.066-1.602-0.319-2.376c-0.452-0.905,0.354-1.243,0.847-1.775 c0.582-0.629-0.591-1.221-0.178-2.16c0.516-1.172,1.103-3.455,1.755-3.42c1.056,0.056,3.922,1.392,5.979,1.838 c1.115,0.242,2.564,0.063,3.366,0.761c1.05,0.911,3.111,1.269,3.875,0.328c0.458-0.562,1.008-1.44,0.521-2.298 c-0.457-0.805-1.34-1.438-1.994-0.847c-1.615,1.458-3.572-0.032-5.172-0.598c-1.097-0.388-2.301-0.91-2.979-1.766 c-0.677-0.854,0.271-2.187,0.108-3.229c-0.177-1.125-0.15-2.257,0.609-2.956c0.687-0.627,1.265-0.403,2.048-0.326 c0.842,0.084,0.069-2.305,1.183-2.748c0.893-0.355,0.823-1.939,0.711-2.9c-0.216-1.844-1.458-3.075-3.164-3.55 c-1.514-0.421-2.88,0.195-3.784,1.032c-0.903,0.838-1.894,2.134-2.279,2.449c-0.334,0.272-1.303-0.376-1.673,0.553 c-0.3,0.754-2.029-0.3-2.754-0.376c-2.226-0.235-3.934,1.538-5.912,2.283c-1.188,0.446-2.379,0.935-3.689,0.772 c-0.784-0.097-2.236,0.588-2.236,0.588c-2.101,0.756-4.279,1.304-6.186,2.519c-0.924,0.589-1.899,1.359-3.09,0.942 c-0.92-0.321-2.083,0.087-2.645,0.655c-0.658,0.667-1.354,1.811-0.242,2.406c0.708,0.381,1.088,1.086,1.736,0.694 c0.772-0.468,1.229-1.236,1.896-1.133c1.63,0.256,3.031-1.197,4.662-1.59c2.015-0.482,4.034-1.289,6.076-1.524 c5.753-0.667,4.871,1.721,3.336,6.341c-0.702,2.113-1.677,4.513-1.075,6.589c0.226,0.774,0.656,1.459,0.022,2.161 c-0.655,0.727-0.893,2.089-0.718,2.987c0.233,1.213,1.13,2.427,1.905,3.551c0.579,0.838,2.246,0.839,2.241,2.125 c-0.005,1.237,1.161,0.605,1.891,0.852c0.882,0.296,1.159,0.948,1.237,1.86c0.062,0.716,0.414,1.798-0.568,1.97 c-2.112,0.369-4.037,1.393-5.705,2.733C-270.866,166.342-272.021,167.112-273.116,167.96z"}];
    var playerFigure = paper.add(raphaData);
    playerFigure.transform("T325,"+(paletteYOffset-130)); // playerFigure.transform("T"+(pitchXCoordinate + 365)+",-"+80);
    var playerText = paper.text(65, paletteYOffset + playerFigure.getBBox().height + 5, "jugador");
    playerText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
    var optionSet = paper.set([playerFigure, playerText]);
    optionsSet.push(optionSet);
    MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(optionSet);
    paletteYOffset+= 80;

    for(var optionName in paletteOptions){
        var image = paper.path(paletteOptions[optionName]).attr({"fill":"white"});
        image.transform("S1.5T50," + paletteYOffset);
        var imageTextTopMargin = 5;
        var playerOptionText = paper.text(65, paletteYOffset + image.getBBox().height + imageTextTopMargin, optionName);
        playerOptionText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
        optionSet = paper.set([image, playerOptionText]);
        optionsSet.push(optionSet);
        MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(optionSet);
        i++;
        paletteYOffset+= 80;
    }

    var Player = Backbone.Model.extend({
        defaults:{
            name: 'newPlayer',
            team: 'unknown',
            svgText: null,
            svgNumber: 1,
            playerId: this.id
        },

        initialize:function () {
            this.bind("error", function (model, error) {
                alert(error);
            });
        },
        validate:function (attrs) {
            var number = attrs.number;
            if (number > 100) {
                return "Number can't be greater than 100.";
            } else if (number < 1) {
                return "Number must be grater than 0.";
            }
        }
    });

    var PlayerView = Backbone.View.extend({
        defaults:{
            svgText : null
        },

        template:_.template($('#player-template').html()),

        events:{
            "click .deleteImg" : "removePlayer",
            "change .playerName" : "updatePlayerName",
            "change .playerNumber" : "updatePlayerNumber"
        },

        removePlayer: function(){
            $(this.el).html("");
            modelViewMap[this.model.get("playerId")].remove();
            modelViewMap[this.model.get("playerId")] = null;
            team.remove(this.model);
        },

        updatePlayerName: function(evt){
            var newName = $(evt.currentTarget).val();
            this.model.set({name: newName});
        },

        updatePlayerNumber: function(evt){
            var newNumber = $(evt.currentTarget).val();
            this.model.set({number: newNumber});
        },

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.on('change', this.render);
            this.model.on('destroy', this.removePlayer);
        },
        render: function(){
            $(this.el).html(this.template(this.model.toJSON()));
            this.model.get("svgText").attr({text: this.model.get("name")});
            this.model.get("svgNumber").attr({text: this.model.get("number")});
            return this;
        }
    });

    var Team = Backbone.Collection.extend({
        model: Player,

        initialize: function(){
            this.bind("add", function(evt){
                if(this.length >= selectedTeamSize){
                    $('#newPlayerButton').attr({disabled:"true"});
                }
            });
            this.bind('remove', function (model) {
                if (team.length < selectedTeamSize) {
                    $('#newPlayerButton').removeAttr("disabled");
                }
            });
        }
    });

    var team = new Team();

    var AppView = Backbone.View.extend({
        el:$('body'),

        initialize: function(){
            //team.bind('add', this.addPlayer);
        },
        events:{
            "click #exportButton" : "exportToImage",
            "change #pitchType" : "pitchSizeChanged"
        },

        exportToImage: function(evt){
            optionsSet.forEach(function(element){
                element.hide();
            });
            var svg = $('#canvas_container').html();

            var canvas = document.createElement('canvas');
            canvas.setAttribute('width', svg.offsetWidth);
            canvas.setAttribute('height', svg.offsetHeight);
            canvas.setAttribute(
                'style',
                'position: absolute; ' +
                    'top: ' + (-svg.offsetHeight * 2) + 'px;' +
                    'left: ' + (-svg.offsetWidth * 2) + 'px;');
            //document.body.appendChild(canvas);
            canvg(canvas, svg);
            var imgData = canvas.toDataURL("image/png");
            window.location = imgData/*.replace("image/png", "image/octet-stream")*/;
            optionsSet.forEach(function(element){
                element.show();
            });
        },

        pitchSizeChanged : function(){
            selectedTeamSize = $('#pitchType').attr('value');
            this.updateCreatePlayerButton();
        },

        createNewModel: function(player){
            if (team.length < selectedTeamSize) {
                var item = player.items[1];
                var itemBBox = item.getBBox();
                var itemX = item.attr("x");
                var itemY = item.attr("y");
                var playerNumber = paper.text(item.matrix.x(itemX, itemY), item.matrix.y(itemX, itemY) + 15, playerCounter++);
                playerNumber.attr({"font-size":14});
                player.push(playerNumber);
                item.attr({"fill":"black"});
                var playerModel = new Player({name:item.attr("text"), number:playerCounter, svgText:item, svgNumber:player.items[2]});
                playerModel.set({"playerId":playerModel.cid});
                team.add(playerModel);
                modelViewMap[playerModel.get("playerId")] = player;
                var backboneView = new PlayerView({model:playerModel});
                $('#playersCreated').append(backboneView.render().el);
            }else{
                player.remove();
                player.clear();
            }
        }

    });

    function removePlayer(playerId){
        var player = _.find(team.models, function(model){ //TODO use Collection getById() or get()
            var id = model.get("playerId");
            return id === playerId;
        });
        team.remove(player);
    }

    function removeExistingPlayer(player){
        removePlayer(player.playerId);
        player.remove();
    }

    var app = new AppView();
    eve.on("playerDropped", app.createNewModel);
    eve.on("playerDroppedOutOfRange", removeExistingPlayer);
});

