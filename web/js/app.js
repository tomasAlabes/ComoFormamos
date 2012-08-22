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
    var paletteYOffset = 30;
    var raphaData = [{"stroke":"#000000","fill":"#FFFFFF","type":"path","path":" M-273.116,167.96c-1.092,0.845-3.014-0.161-3.729,0.967c-0.334,0.527-1.562,0.979-0.549,1.325c0.979,0.334-1.116,0.928,0.478,1.063 c0.961,0.083,2.382,1.271,1.838,2.055c-0.612,0.885,0.427,0.892,0.524,1.497c0.089,0.546,1.383,0.562,1.86,0.188 c0.712-0.554,0.159-1.557,0.763-2.24c0.564-0.643,0.454-1.646,1.005-2.25c1.477-1.618,4.104-1.453,6.067-2.43 c0.751-0.372,1.268-0.983,2.203-1.037c1.615-0.091,3.554-1.952,4.588-1.519c1.554,0.65,2.808,4.206,4.717,5.892 c1.596,1.403,4.387,2.688,4.863,4.08c0.234,0.68,0.547,1.273,1.003,1.685c0.842,0.754,2.348,0.66,2.675-0.586 c0.321-1.219-0.159-2.709,0.906-3.583c0.93-0.761,0.997-1.854,1.119-2.92c0,0-0.52-1.514-1.289-0.999 c-0.974,0.65-1.422,1.772-2.354,2.371c-0.828,0.533-1.891,0.011-2.462-0.872c-0.896-1.381-1.888-2.719-2.767-4.11 c-0.641-1.014-1.74-1.688-1.882-3.036c-0.188-1.761-1.567-3.345-2.776-4.687c-0.728-0.808-1.989-1.454-2.227-2.455 c-0.326-1.384-0.181-3.149-0.896-4.305c-0.545-0.881,0.066-1.602-0.319-2.376c-0.452-0.905,0.354-1.243,0.847-1.775 c0.582-0.629-0.591-1.221-0.178-2.16c0.516-1.172,1.103-3.455,1.755-3.42c1.056,0.056,3.922,1.392,5.979,1.838 c1.115,0.242,2.564,0.063,3.366,0.761c1.05,0.911,3.111,1.269,3.875,0.328c0.458-0.562,1.008-1.44,0.521-2.298 c-0.457-0.805-1.34-1.438-1.994-0.847c-1.615,1.458-3.572-0.032-5.172-0.598c-1.097-0.388-2.301-0.91-2.979-1.766 c-0.677-0.854,0.271-2.187,0.108-3.229c-0.177-1.125-0.15-2.257,0.609-2.956c0.687-0.627,1.265-0.403,2.048-0.326 c0.842,0.084,0.069-2.305,1.183-2.748c0.893-0.355,0.823-1.939,0.711-2.9c-0.216-1.844-1.458-3.075-3.164-3.55 c-1.514-0.421-2.88,0.195-3.784,1.032c-0.903,0.838-1.894,2.134-2.279,2.449c-0.334,0.272-1.303-0.376-1.673,0.553 c-0.3,0.754-2.029-0.3-2.754-0.376c-2.226-0.235-3.934,1.538-5.912,2.283c-1.188,0.446-2.379,0.935-3.689,0.772 c-0.784-0.097-2.236,0.588-2.236,0.588c-2.101,0.756-4.279,1.304-6.186,2.519c-0.924,0.589-1.899,1.359-3.09,0.942 c-0.92-0.321-2.083,0.087-2.645,0.655c-0.658,0.667-1.354,1.811-0.242,2.406c0.708,0.381,1.088,1.086,1.736,0.694 c0.772-0.468,1.229-1.236,1.896-1.133c1.63,0.256,3.031-1.197,4.662-1.59c2.015-0.482,4.034-1.289,6.076-1.524 c5.753-0.667,4.871,1.721,3.336,6.341c-0.702,2.113-1.677,4.513-1.075,6.589c0.226,0.774,0.656,1.459,0.022,2.161 c-0.655,0.727-0.893,2.089-0.718,2.987c0.233,1.213,1.13,2.427,1.905,3.551c0.579,0.838,2.246,0.839,2.241,2.125 c-0.005,1.237,1.161,0.605,1.891,0.852c0.882,0.296,1.159,0.948,1.237,1.86c0.062,0.716,0.414,1.798-0.568,1.97 c-2.112,0.369-4.037,1.393-5.705,2.733C-270.866,166.342-272.021,167.112-273.116,167.96z"}];
    var playerFigure = paper.add(raphaData);
    playerFigure.transform("S0.8T325,"+(paletteYOffset-145)); // playerFigure.transform("T"+(pitchXCoordinate + 365)+",-"+80);
    var playerText = paper.text(65, paletteYOffset + playerFigure.getBBox().height, "jugador");
    playerText.attr({"font-size" : 16, "font-family" : 'Handlee', fill: "white"});
    var optionSet = paper.set([playerFigure, playerText]);
    optionsSet.push(optionSet);
    MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(optionSet);
    paletteYOffset+= 65;
    var imageTextTopMargin = 7;

    for(var optionName in paletteOptions){
        var paletteOption = paletteOptions[optionName];
        var image = paper.path(paletteOption.path).attr({"fill": paletteOption.color});
        image.transform("S1.3T50," + paletteYOffset);
        var playerOptionText = paper.text(65, paletteYOffset + image.getBBox().height + imageTextTopMargin, optionName);
        playerOptionText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
        optionSet = paper.set([image, playerOptionText]);
        optionsSet.push(optionSet);
        MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(optionSet);
        i++;
        paletteYOffset+= 65;
    }

    var axeRaphaData = [{"stroke":"none","fill":"#010103","type":"path","path":"M13.618,3.6h-0.15V3.45h-0.15V3.6h-0.15l-0.15,0.15l-0.15,1.2l-0.15,0.6l-0.15,0.6v0.6l-0.15,0.75l-0.15,1.2 l-0.15,0.6v0.6l-0.15,1.2l-0.3,1.05v0.75l-0.15,0.9v0.75v0.75l-0.15,0.15h0.15v0.15v0.15h0.15l0.15,0.15h0.15l0.75,0.15h0.3 l0.45,0.15h0.45h0.3h0.45l-0.15,0.75v0.6v0.6l-0.15,0.9l-0.15,0.75l-0.15,0.75l-0.15,0.75v0.6l-0.15,0.6v0.6v0.75v0.6v0.6v0.6v0.6 v0.45v0.45l0.15,0.3v0.45v0.45l0.15,0.3v0.9l0.3,1.05l0.15,1.05l0.15,0.6v0.45l0.15,0.6v0.6l0.15,0.6v0.6v0.75v0.6v0.6v0.75v0.6 l-0.15,0.6v0.75v0.6l-0.15,0.75v0.6l-0.3,1.35l-0.15,1.35l-0.15,1.5l-0.3,1.35l-0.15,1.35l-0.3,1.351l-0.15,1.199l-0.3,1.351 l-0.3,1.2l-0.3,1.35l-0.3,1.35l-0.3,1.5l-0.45,1.95l-0.3,1.05l-0.15,0.9l-0.15,0.75l-0.15,0.9l-0.3,1.649l-0.15,0.9l-0.15,1.05 l-0.15,0.6v0.75L9.568,69v0.6L9.418,70.2v0.6V72v1.2v1.05l-0.15,1.05v0.9v0.449l-0.15,0.45v0.45L8.968,78l-0.15,1.35v0.75l-0.15,0.3 V80.7V81v0.45l-0.15,0.75v1.35v0.6v0.75V85.5v0.3l0.15,0.3v0.3V86.7V87l0.15,0.3v0.3l0.15,0.3V88.2l0.15,0.3l0.15,0.149l0.15,0.15 v0.3l0.15,0.15l0.15,0.149l0.15,0.15l0.15,0.15l0.15,0.149l0.15,0.15l0.15,0.149l0.15,0.15h0.15l0.15,0.15l0.15,0.149l0.45,0.15 l0.15,0.149l0.3,0.15l0.6,0.3l0.45,0.15l0.6,0.149l0.6,0.301l0.3,0.149h0.3l0.3,0.15l0.45,0.149h0.3l0.3,0.15h0.3h0.45l0.3,0.15h0.3 h0.3l0.3-0.15h0.3h0.45l0.15-0.15h0.15h0.15l0.15-0.149h0.15l0.15-0.15V91.95h0.15V91.8v-0.15V91.5l0.15-0.15V91.2v-0.301v-0.3v-0.3 V90v-0.3v-0.301l-0.15-0.149V89.1V88.95V88.8l-0.15-0.45l-0.3-0.75l-0.3-0.75l-0.15-0.75l-0.15-0.45l-0.15-0.3v-0.45l-0.15-0.3 l-0.15-0.6l-0.15-0.75V82.5l-0.15-0.601v-0.75l-0.15-0.75v-0.75l-0.15-0.75v-0.75V77.25V76.5v-0.9v-0.75V73.95V73.2V72.6V72 l0.15-0.75v-0.601v-0.6l0.15-0.6l0.15-1.351l0.15-0.75V66.6l0.15-0.75l0.15-0.75l0.3-1.5l0.15-1.5l0.3-1.649l0.3-1.5l0.45-1.5 l0.3-1.5l1.65-7.801l0.45-2.25l0.45-2.25l0.3-1.2l0.15-1.05l0.15-1.05l0.3-1.2l0.15-1.05l0.15-1.05l0.15-0.9l0.15-1.05l0.15-1.05 l0.15-1.05l0.15-1.05v-0.9l0.15-1.05l0.15-1.05v-0.9l0.15-1.05l0.15-1.95l0.15-2.1v-1.5l0.15-0.75v-0.75v-0.9V18.3v-0.75h0.15 l0.3,0.15h0.15l0.15,0.15h0.15h0.15h0.15h0.3h0.15h0.15V17.7h0.15h0.15l0.15-0.15l0.15-0.15l0.15-0.15h0.15l0.15-0.15h0.15h0.15 h0.15h0.15h0.15l0.15,0.15l0.75,0.3l0.6,0.45l0.75,0.45l0.75,0.45l0.45,0.3l0.3,0.15l0.45,0.3l0.3,0.3l0.3,0.15l0.45,0.3l0.3,0.3 l0.301,0.3l0.75,0.75l0.6,0.6l1.5,1.35l0.6,0.6l0.75,0.6l0.601,0.6l0.6,0.75l0.15,0.3l0.3,0.3l0.3,0.3l0.3,0.3l0.301,0.45l0.3,0.45 l0.45,0.6l0.3,0.45l0.3,0.45l0.3,0.6l0.15,0.45l0.3,0.45l0.3,0.6l0.15,0.6l0.3,0.6l0.15,0.45l0.3,0.6v0.3l0.45-0.45l0.449-0.45 l0.601-0.6l0.45-0.75l0.6-0.6l0.3-0.45l0.3-0.3l0.301-0.45l0.3-0.3l0.149-0.45l0.301-0.45l0.3-0.45l0.45-0.6l0.3-0.45l0.3-0.6 l0.15-0.6l0.3-0.45l0.3-0.6l0.3-0.6l0.15-0.45L52.318,24l0.301-0.45l0.149-0.6l0.15-0.45l0.149-0.45l0.15-0.45l0.3-0.6l0.15-0.45 l0.149-0.45v-0.6l0.15-0.45l0.15-0.45l0.149-0.6l0.15-0.45v-0.6l0.149-0.45v-0.45l0.15-0.45v-0.45l0.15-0.45v-0.45V13.8v-0.45V12.9 l0.149-0.45V12v-0.45V11.1l-0.149-0.45V10.2V9.75v-0.9l-0.15-0.75V7.35l-0.15-0.75l-0.149-0.9l-0.15-0.75L54.119,4.2l-0.15-0.75 l-0.15-0.75l-0.149-0.6l-0.3-0.6l-0.15-0.45l-0.3-0.9V0l-0.3,0.15l-0.45,0.45l-0.45,0.3l-0.45,0.45l-0.45,0.3L50.369,2.1l-0.45,0.3 l-0.45,0.15l-0.3,0.3l-0.45,0.3l-0.45,0.3l-0.45,0.15l-0.449,0.3l-0.45,0.15l-0.3,0.15l-0.301,0.15L45.869,4.5l-0.601,0.3l-0.6,0.15 L44.068,5.1l-0.449,0.15L43.018,5.4l-0.6,0.15l-0.45,0.15h-0.45l-0.45,0.15h-0.3L39.869,6l-0.9,0.15h-0.9L37.168,6.3h-0.9h-0.75 l-0.75,0.15h-0.75h-0.6l-0.75-0.15h-0.6h-0.75h-0.6l-0.75-0.15L28.918,6h-1.05V5.7l0.15-0.3V4.8l0.15-0.15V4.5V4.35V4.2V4.05V3.9 h-0.15V3.75l-0.15-0.15h-0.15V3.45h-0.15h-0.15l-0.3-0.15h-0.3l-0.6-0.15L24.568,3l-0.9-0.15l-0.9-0.15l-1.35-0.3l-0.75-0.15h-0.6 l-0.9-0.15h-0.45l-0.45-0.15h-0.3h-0.15h-0.15h-0.15h-0.15V2.1h-0.15v0.15V2.4l-0.15,0.15V3v0.45l-0.15,0.9l-0.9-0.3l-1.35-0.3 l-1.2-0.15H13.618z"}];
    var axeFigure = paper.add(axeRaphaData).attr({fill: "brown"});
    axeFigure.transform("R45S0.5T30," + (paletteYOffset-30));
    var axeText = paper.text(65, paletteYOffset + axeFigure.getBBox().height + imageTextTopMargin, "hacha");
    axeText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
    var axeSet = paper.set([axeFigure, axeText]);
    optionsSet.push(axeSet);
    MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(axeSet);
    i++;
    paletteYOffset+= 65;

    var penguinRaphaData = [{"path":"M487.224,285.565c3.4,5.88,1.391,13.33-4.49,16.73l-49.68,28.67l34.47,2.77 c4.23,0.34,7.78,2.76,9.71,6.18c1.16,2.05,1.73,4.47,1.53,7.01c-0.54,6.77-6.42,11.78-13.189,11.24l-69.921-5.6l-61.52,35.52 l40.11,23.17l21.409,12.359l69.921-5.59c6.77-0.54,12.649,4.471,13.189,11.24c0.2,2.54-0.37,4.96-1.53,7.01 c-1.93,3.42-5.479,5.84-9.71,6.181l-34.46,2.76l49.67,28.67c5.881,3.4,7.891,10.86,4.49,16.74 c-3.39,5.88-10.859,7.87-16.74,4.479l-49.67-28.68l14.84,31.229c1.82,3.83,1.5,8.12-0.5,11.5c-1.199,2.03-3.01,3.73-5.3,4.82 c-6.13,2.92-13.42,0.34-16.33-5.79l-30.12-63.35l-61.52-35.53v46.32v24.729l39.8,57.76c3.851,5.591,2.45,13.19-3.14,17.04 c-2.09,1.44-4.47,2.15-6.83,2.171c-3.93,0.039-7.8-1.82-10.21-5.311l-19.62-28.47v57.37c0,6.79-5.46,12.25-12.25,12.25 s-12.25-5.46-12.25-12.25v-57.37l-19.62,28.47c-2.41,3.49-6.28,5.35-10.21,5.311c-2.36-0.021-4.74-0.73-6.83-2.171 c-5.59-3.85-6.99-11.449-3.14-17.04l39.8-57.76v-24.729v-46.32l-40.12,23.16l-21.41,12.37l-30.12,63.35 c-2.91,6.13-10.2,8.71-16.33,5.79c-2.29-1.09-4.1-2.79-5.3-4.82c-2-3.38-2.32-7.67-0.5-11.5l14.85-31.239l-49.68,28.689 c-5.88,3.391-13.34,1.4-16.73-4.479c-3.4-5.88-1.4-13.34,4.48-16.74l49.67-28.67l-34.46-2.76c-4.23-0.341-7.78-2.761-9.71-6.181 c-1.16-2.05-1.73-4.47-1.53-7.01c0.54-6.77,6.42-11.78,13.19-11.24l69.92,5.59l21.41-12.359l40.12-23.17l-61.53-35.52l-69.92,5.6 c-6.77,0.54-12.65-4.47-13.19-11.24c-0.2-2.54,0.37-4.96,1.53-7.01c1.93-3.42,5.48-5.84,9.71-6.18l34.47-2.75l-49.68-28.69 c-5.88-3.4-7.88-10.85-4.48-16.73c3.39-5.88,10.85-7.89,16.73-4.49l49.68,28.69l-14.85-31.24c-1.82-3.83-1.5-8.11,0.5-11.49 c1.2-2.03,3.01-3.74,5.3-4.83c6.13-2.92,13.42-0.33,16.33,5.8l30.12,63.34l61.53,35.53v-46.31v-24.73l-39.8-57.76 c-3.85-5.58-2.45-13.19,3.14-17.04c2.09-1.44,4.47-2.15,6.83-2.17c3.93-0.04,7.8,1.82,10.21,5.31l19.62,28.47v-57.37 c0-6.79,5.46-12.25,12.25-12.25s12.25,5.46,12.25,12.25v57.37l19.62-28.47c2.41-3.49,6.28-5.35,10.21-5.31 c2.36,0.02,4.74,0.73,6.83,2.17c5.59,3.85,6.99,11.46,3.14,17.04l-39.8,57.76v24.73v46.31l61.52-35.53l30.12-63.34 c2.91-6.13,10.2-8.72,16.33-5.8c2.29,1.09,4.101,2.8,5.3,4.83c2,3.38,2.32,7.66,0.5,11.49l-14.84,31.23l49.67-28.68 C476.364,277.674,483.834,279.684,487.224,285.565z","stroke":"none","fill":"#FFFFFF","type":"path"},{"path":"M498.554,279.034c6.9,11.95,2.66,27.68-9.28,34.58l-14.51,8.38c5.91,2.02,10.86,6.18,13.86,11.5 c2.41,4.27,3.58,9.32,3.17,14.47c-1.101,13.76-13.5,24.33-27.26,23.23l-65.86-5.27l-38.4,22.16l20.511,11.84l17.89,10.33 l65.86-5.26c13.76-1.101,26.159,9.47,27.26,23.229c0.41,5.15-0.76,10.2-3.17,14.47c-3,5.32-7.95,9.471-13.851,11.511l14.5,8.359 c11.95,6.9,16.181,22.63,9.28,34.601c-6.91,11.96-22.65,16.16-34.6,9.26l-14.511-8.37c1.2,6.14,0.07,12.5-3.029,17.75 c-2.5,4.23-6.29,7.771-10.95,9.98c-12.45,5.92-27.811,0.489-33.74-11.98l-28.38-59.68l-38.38-22.17v23.67v20.66l37.49,54.409 c7.83,11.37,4.87,27.391-6.49,35.221c-4.26,2.939-9.22,4.439-14.12,4.489c-6.1,0.061-12.17-2.149-16.88-6.239v16.75 c0,13.8-11.53,25.33-25.33,25.33s-25.33-11.53-25.33-25.33v-16.75c-4.71,4.09-10.78,6.3-16.88,6.239 c-4.89-0.05-9.86-1.55-14.12-4.489c-11.36-7.83-14.32-23.851-6.49-35.221l37.49-54.409v-20.66v-23.67l-20.51,11.84l-17.88,10.33 l-28.38,59.68c-5.93,12.47-21.28,17.9-33.74,11.98c-4.66-2.21-8.45-5.75-10.95-9.98c-3.1-5.25-4.23-11.62-3.03-17.75l-14.51,8.37 c-11.95,6.9-27.69,2.689-34.59-9.26c-6.9-11.95-2.69-27.69,9.27-34.601l14.5-8.359c-5.91-2.04-10.85-6.19-13.85-11.511 c-2.41-4.27-3.58-9.319-3.17-14.47c1.1-13.76,13.5-24.33,27.26-23.229l65.86,5.26l17.89-10.33l20.51-11.84l-38.4-22.16 l-65.86,5.27c-13.76,1.1-26.16-9.47-27.26-23.23c-0.41-5.15,0.76-10.2,3.17-14.47c3-5.32,7.95-9.48,13.86-11.5l-14.51-8.38 c-11.95-6.9-16.16-22.64-9.27-34.58c6.9-11.95,22.63-16.19,34.59-9.29l14.51,8.38c-1.2-6.13-0.07-12.49,3.03-17.74 c2.49-4.21,6.26-7.76,10.95-9.99c12.47-5.93,27.82-0.47,33.74,12l28.38,59.66l38.39,22.17v-23.66v-20.66l-37.49-54.41 c-7.83-11.37-4.87-27.39,6.49-35.22c4.26-2.94,9.23-4.44,14.12-4.49c6.1-0.06,12.17,2.15,16.88,6.24v-16.75 c0-13.8,11.53-25.33,25.33-25.33s25.33,11.53,25.33,25.33v16.75c4.71-4.09,10.78-6.3,16.88-6.24c4.9,0.05,9.86,1.55,14.12,4.49 c11.36,7.83,14.32,23.85,6.49,35.22l-37.49,54.41v20.66v23.66l38.38-22.17l28.38-59.66c5.92-12.47,21.271-17.93,33.74-12 c4.689,2.23,8.46,5.78,10.95,9.99c3.1,5.25,4.229,11.61,3.029,17.74l14.511-8.38 C475.914,262.844,491.644,267.074,498.554,279.034z M482.734,302.295c5.881-3.4,7.891-10.85,4.49-16.73 c-3.39-5.88-10.859-7.89-16.74-4.49l-49.67,28.68l14.84-31.23c1.82-3.83,1.5-8.11-0.5-11.49c-1.199-2.03-3.01-3.74-5.3-4.83 c-6.13-2.92-13.42-0.33-16.33,5.8l-30.12,63.34l-61.52,35.53v-46.31v-24.73l39.8-57.76c3.851-5.58,2.45-13.19-3.14-17.04 c-2.09-1.44-4.47-2.15-6.83-2.17c-3.93-0.04-7.8,1.82-10.21,5.31l-19.62,28.47v-57.37c0-6.79-5.46-12.25-12.25-12.25 s-12.25,5.46-12.25,12.25v57.37l-19.62-28.47c-2.41-3.49-6.28-5.35-10.21-5.31c-2.36,0.02-4.74,0.73-6.83,2.17 c-5.59,3.85-6.99,11.46-3.14,17.04l39.8,57.76v24.73v46.31l-61.53-35.53l-30.12-63.34c-2.91-6.13-10.2-8.72-16.33-5.8 c-2.29,1.09-4.1,2.8-5.3,4.83c-2,3.38-2.32,7.66-0.5,11.49l14.85,31.24l-49.68-28.69c-5.88-3.4-13.34-1.39-16.73,4.49 c-3.4,5.88-1.4,13.33,4.48,16.73l49.68,28.69l-34.47,2.75c-4.23,0.34-7.78,2.76-9.71,6.18c-1.16,2.05-1.73,4.47-1.53,7.01 c0.54,6.77,6.42,11.78,13.19,11.24l69.92-5.6l61.53,35.52l-40.12,23.17l-21.41,12.359l-69.92-5.59 c-6.77-0.54-12.65,4.471-13.19,11.24c-0.2,2.54,0.37,4.96,1.53,7.01c1.93,3.42,5.48,5.84,9.71,6.181l34.46,2.76l-49.67,28.67 c-5.88,3.4-7.88,10.86-4.48,16.74c3.39,5.88,10.85,7.87,16.73,4.479l49.68-28.689l-14.85,31.239c-1.82,3.83-1.5,8.12,0.5,11.5 c1.2,2.03,3.01,3.73,5.3,4.82c6.13,2.92,13.42,0.34,16.33-5.79l30.12-63.35l21.41-12.37l40.12-23.16v46.32v24.729l-39.8,57.76 c-3.85,5.591-2.45,13.19,3.14,17.04c2.09,1.44,4.47,2.15,6.83,2.171c3.93,0.039,7.8-1.82,10.21-5.311l19.62-28.47v57.37 c0,6.79,5.46,12.25,12.25,12.25s12.25-5.46,12.25-12.25v-57.37l19.62,28.47c2.41,3.49,6.28,5.35,10.21,5.311 c2.36-0.021,4.74-0.73,6.83-2.171c5.59-3.85,6.99-11.449,3.14-17.04l-39.8-57.76v-24.729v-46.32l61.52,35.53l30.12,63.35 c2.91,6.13,10.2,8.71,16.33,5.79c2.29-1.09,4.101-2.79,5.3-4.82c2-3.38,2.32-7.67,0.5-11.5l-14.84-31.229l49.67,28.68 c5.881,3.391,13.351,1.4,16.74-4.479c3.4-5.88,1.391-13.34-4.49-16.74l-49.67-28.67l34.46-2.76c4.23-0.341,7.78-2.761,9.71-6.181 c1.16-2.05,1.73-4.47,1.53-7.01c-0.54-6.77-6.42-11.78-13.189-11.24l-69.921,5.59l-21.409-12.359l-40.11-23.17l61.52-35.52 l69.921,5.6c6.77,0.54,12.649-4.47,13.189-11.24c0.2-2.54-0.37-4.96-1.53-7.01c-1.93-3.42-5.479-5.84-9.71-6.18l-34.47-2.77 L482.734,302.295z","stroke":"none","fill":"#FFFFFF","type":"path"}];
    var penguinFigure = paper.add(penguinRaphaData).attr({fill: "white"});
    penguinFigure.transform("S0.1T-243,113");
    var penguinText = paper.text(65, paletteYOffset + penguinFigure.getBBox().height + imageTextTopMargin, "pecho frio");
    penguinText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
    var penguinSet = paper.set([penguinFigure, penguinText]);
    optionsSet.push(penguinSet);
    MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(penguinSet);
    i++;
    paletteYOffset+= 65;

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
            var brandText = paper.text(165, 200, "ComoFormamos.com").transform("S3R-90");
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
            
            var addresses = ""; //between the speech mark goes the receptient. Seperate addresses with a ;
            var body = "1. Hace click derecho -> 'guardar como...' sobre la imagen y guardala donde quieras -> 2. Agregala como archivo adjunto a este mail -> 3. Compartila a tus amigos! No te olvides de avisar a que hora y donde se juntan!"; //write the message text between the speech marks or put a variable in the place of the speech marks
            var subject = "Asi vamos a formar en el partido!"; //between the speech marks goes the subject of the message
            var href = "mailto:" + addresses + "?" +
                     "subject=" + subject + "&" +
                     "body=" + body;
            var wndMail;
            wndMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=500,height=500");
            if(wndMail)
            {
                wndMail.close();    
            }
            
            window.location = imgData/*.replace("image/png", "image/octet-stream")*/;
            optionsSet.forEach(function(element){
                element.show();
            });
            brandText.remove();
        },

        pitchSizeChanged : function(){
            selectedTeamSize = $('#pitchType').attr('value');
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


