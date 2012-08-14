var modelViewMap = []; //Map <ModelId, View> (< Backbone model id, Raphael set >
var playerCounter = 0;
var defaultName = "Nuevo jugador";
var selectedTeamSize = 5;
var pitchXCoordinate = 200;

var createPlayerSVG = function() {
    playerCounter++;
    var newPlayerName = defaultName.concat(playerCounter);
    //var playerFigure = paper.circle(pitchXCoordinate + 100, 100, 25).attr({fill:"red"});
    var raphaData = [{"stroke":"#000000","fill":"#FFFFFF","type":"path","path":" M-273.116,167.96c-1.092,0.845-3.014-0.161-3.729,0.967c-0.334,0.527-1.562,0.979-0.549,1.325c0.979,0.334-1.116,0.928,0.478,1.063 c0.961,0.083,2.382,1.271,1.838,2.055c-0.612,0.885,0.427,0.892,0.524,1.497c0.089,0.546,1.383,0.562,1.86,0.188 c0.712-0.554,0.159-1.557,0.763-2.24c0.564-0.643,0.454-1.646,1.005-2.25c1.477-1.618,4.104-1.453,6.067-2.43 c0.751-0.372,1.268-0.983,2.203-1.037c1.615-0.091,3.554-1.952,4.588-1.519c1.554,0.65,2.808,4.206,4.717,5.892 c1.596,1.403,4.387,2.688,4.863,4.08c0.234,0.68,0.547,1.273,1.003,1.685c0.842,0.754,2.348,0.66,2.675-0.586 c0.321-1.219-0.159-2.709,0.906-3.583c0.93-0.761,0.997-1.854,1.119-2.92c0,0-0.52-1.514-1.289-0.999 c-0.974,0.65-1.422,1.772-2.354,2.371c-0.828,0.533-1.891,0.011-2.462-0.872c-0.896-1.381-1.888-2.719-2.767-4.11 c-0.641-1.014-1.74-1.688-1.882-3.036c-0.188-1.761-1.567-3.345-2.776-4.687c-0.728-0.808-1.989-1.454-2.227-2.455 c-0.326-1.384-0.181-3.149-0.896-4.305c-0.545-0.881,0.066-1.602-0.319-2.376c-0.452-0.905,0.354-1.243,0.847-1.775 c0.582-0.629-0.591-1.221-0.178-2.16c0.516-1.172,1.103-3.455,1.755-3.42c1.056,0.056,3.922,1.392,5.979,1.838 c1.115,0.242,2.564,0.063,3.366,0.761c1.05,0.911,3.111,1.269,3.875,0.328c0.458-0.562,1.008-1.44,0.521-2.298 c-0.457-0.805-1.34-1.438-1.994-0.847c-1.615,1.458-3.572-0.032-5.172-0.598c-1.097-0.388-2.301-0.91-2.979-1.766 c-0.677-0.854,0.271-2.187,0.108-3.229c-0.177-1.125-0.15-2.257,0.609-2.956c0.687-0.627,1.265-0.403,2.048-0.326 c0.842,0.084,0.069-2.305,1.183-2.748c0.893-0.355,0.823-1.939,0.711-2.9c-0.216-1.844-1.458-3.075-3.164-3.55 c-1.514-0.421-2.88,0.195-3.784,1.032c-0.903,0.838-1.894,2.134-2.279,2.449c-0.334,0.272-1.303-0.376-1.673,0.553 c-0.3,0.754-2.029-0.3-2.754-0.376c-2.226-0.235-3.934,1.538-5.912,2.283c-1.188,0.446-2.379,0.935-3.689,0.772 c-0.784-0.097-2.236,0.588-2.236,0.588c-2.101,0.756-4.279,1.304-6.186,2.519c-0.924,0.589-1.899,1.359-3.09,0.942 c-0.92-0.321-2.083,0.087-2.645,0.655c-0.658,0.667-1.354,1.811-0.242,2.406c0.708,0.381,1.088,1.086,1.736,0.694 c0.772-0.468,1.229-1.236,1.896-1.133c1.63,0.256,3.031-1.197,4.662-1.59c2.015-0.482,4.034-1.289,6.076-1.524 c5.753-0.667,4.871,1.721,3.336,6.341c-0.702,2.113-1.677,4.513-1.075,6.589c0.226,0.774,0.656,1.459,0.022,2.161 c-0.655,0.727-0.893,2.089-0.718,2.987c0.233,1.213,1.13,2.427,1.905,3.551c0.579,0.838,2.246,0.839,2.241,2.125 c-0.005,1.237,1.161,0.605,1.891,0.852c0.882,0.296,1.159,0.948,1.237,1.86c0.062,0.716,0.414,1.798-0.568,1.97 c-2.112,0.369-4.037,1.393-5.705,2.733C-270.866,166.342-272.021,167.112-273.116,167.96z"}];
    var playerFigure = paper.add(raphaData);
    playerFigure.transform("T"+(pitchXCoordinate + 365)+",-"+80);
    var playerText = paper.text(pitchXCoordinate + 100, 130, newPlayerName);
    playerText.attr({"font-size" : 17, "font-family" : 'Handlee'});
    var playerNumber = paper.text(pitchXCoordinate + 100, 100, playerCounter);
    playerNumber.attr({"font-size" : 14});
    var player = paper.set([playerFigure, playerText, playerNumber]);
    MyRaphaelUtils.addDragAndDropCapabilityToSet(player);
    return player;
};

$(function () {
    paper = Raphael('canvas_container', '598.28351', '600');
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
        var optionSet = paper.set([image, playerOptionText]);
        optionsSet.push(optionSet);
        MyRaphaelUtils.addDragAndDropCapabilityToPaletteOption(optionSet);
        i++;
        paletteYOffset+= 80;
    }
    $('#newPlayerButton').removeAttr("disabled");

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
            "click #newPlayerButton" : "createNewPlayer",
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

        updateCreatePlayerButton: function() {
            if (team.length >= selectedTeamSize) {
                $('#newPlayerButton').attr({disabled:"true"});
            } else {
                $('#newPlayerButton').removeAttr("disabled");
            }
        },

        createNewPlayer: function(){
            var raphaelPlayer = createPlayerSVG();
            var playerModel = new Player({name: raphaelPlayer.items[1].attr("text"), number:playerCounter, svgText:raphaelPlayer.items[1], svgNumber: raphaelPlayer.items[2]});
            playerModel.set({"playerId": playerModel.cid});
            team.add(playerModel);
            modelViewMap[playerModel.get("playerId")] = raphaelPlayer;
            var backboneView = new PlayerView({model: playerModel});
            $('#playersCreated').append(backboneView.render().el);
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
            return id == playerId;
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


