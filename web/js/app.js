var modelViewMap = []; //Map <ModelId, View> (< Backbone model id, Raphael set >
var playerCounter = 0;
var defaultName = "NewPlayer";
var selectedTeamSize = 5;
var pitchXCoordinate = 200;
var optionsNames = ["Rústico", "Mágico", "Hacha", "Pecho frío", "Todo terreno"];
var IMGS_SUFFIX = "media/imgs/";
var optionsImgs =
    [IMGS_SUFFIX + "rustico.png",
    IMGS_SUFFIX + "magico.png",
    IMGS_SUFFIX + "mini_hacha.png",
    IMGS_SUFFIX + "pechoFrio.png",
    IMGS_SUFFIX + "todoTerreno.png"];

var setDragAndDrop = function(compSet, isEditing) {
    if(isEditing){
        compSet.drag(MyRaphaelUtils.editorMoveAll, MyRaphaelUtils.editorStartAll, MyRaphaelUtils.editorUpAll, compSet, compSet, compSet);
    }else{
        var clone_handler = function() {
            var x = compSet.clone();
            x.drag(MyRaphaelUtils.editorMoveAll, MyRaphaelUtils.editorStartAll, MyRaphaelUtils.editorUpAll, x, x, x);
            eve.once("drag.end." + x.items[0].id, MyRaphaelUtils.optionsUpAll);
            eve.once("drag.end." + x.items[1].id, MyRaphaelUtils.optionsUpAll);
        };
        compSet.mousemove(clone_handler);
    }
};

var createPlayerSVG = function() {
    playerCounter++;
    var newPlayerName = defaultName.concat(playerCounter);
    var playerFigure = paper.circle(pitchXCoordinate + 100, 100, 25).attr({fill:"red"});
    var playerText = paper.text(pitchXCoordinate + 100, 135, newPlayerName);
    playerText.attr({"font-size" : 17, "font-family" : 'Handlee'});
    var playerNumber = paper.text(pitchXCoordinate + 100, 100, playerCounter);
    playerNumber.attr({"font-size" : 14});
    var player = paper.set([playerFigure, playerText, playerNumber]);
    setDragAndDrop(player, true);
    return player;
};

$(function () {
    paper = Raphael('canvas_container', '798.28351', '904.6944');
    loadPitch(paper);
    optionsSet = paper.set();
    var paletteBorder = paper.rect(0,0,150,700,10);
    optionsSet.push(paletteBorder);
    for(var i=0; i<5; i++){
        var image = paper.image(optionsImgs[i], 50, 35+i*120, 52, 52);
        var playerOptionText = paper.text(75,50+i*120+45, optionsNames[i]);
        playerOptionText.attr({"font-size" : 17, "font-family" : 'Handlee', fill: "white"});
        var optionSet = paper.set([image, playerOptionText]);
        optionsSet.push(optionSet);
        setDragAndDrop(optionSet, false);
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
            "click .deleteButton" : "removePlayer",
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
            // Populate img tag
            //var img = document.createElement('img');
            //img.src = imgData;
            //document.getElementById('imageContainer').appendChild(img);
            // Download image

            //$('#downloadImageLink').attr("href", imgData).show();
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
            $('#players_panel').append(backboneView.render().el);
        },

        createNewModel: function(player){
            if (team.length < selectedTeamSize) {
                var playerNumber = paper.text(player.items[1].attr("x"), player.items[1].attr("y") + 15, playerCounter++);
                playerNumber.attr({"font-size":14});
                player.push(playerNumber);
                player.items[1].attr({"fill":"black"});
                var playerModel = new Player({name:player.items[1].attr("text"), number:playerCounter, svgText:player.items[1], svgNumber:player.items[2]});
                playerModel.set({"playerId":playerModel.cid});
                team.add(playerModel);
                modelViewMap[playerModel.get("playerId")] = player;
                var backboneView = new PlayerView({model:playerModel});
                $('#players_panel').append(backboneView.render().el);
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


