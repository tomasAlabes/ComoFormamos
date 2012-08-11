var modelViewMap = []; //Map <ModelId, View> (< Backbone model id, Raphael set >
var playerCounter = 0;
var defaultName = "Nuevo jugador";
var selectedTeamSize = 5;
var pitchXCoordinate = 200;

var createPlayerSVG = function() {
    playerCounter++;
    var newPlayerName = defaultName.concat(playerCounter);
    var playerFigure = paper.circle(pitchXCoordinate + 100, 100, 25).attr({fill:"red"});
    var playerText = paper.text(pitchXCoordinate + 100, 135, newPlayerName);
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


