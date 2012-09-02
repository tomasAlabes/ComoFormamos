var modelViewMap = []; //Map <ModelId, View> (< Backbone model id, Raphael set >
var playerCounter = 0;
var selectedTeamSize = 5;

$(function () {
    /*jslint newcap:false */ //This done for the Raphael use
    paper = Raphael('canvas_container', '670', '600');
    /*jslint newcap:true */
    pitch = loadPitch(paper);
    loadPalette(paper);

    var Player = Backbone.Model.extend({
        defaults:{
            name: 'newPlayer',
            team: 'unknown',
            svgText: null,
            svgNumber: 1,
            playerId: this.id
        },

        initialize:function () {
            this.on("error", function(model, error){
                $.pnotify({
                    title: 'Error!',
                    text: error,
                    type: 'error'
                });
            });
        },

        validate:function (attrs) { //TODO entender este metodo para corregir el bug
            var number = attrs.number;
            if (number > 100) {
                return "El numero maximo es 100";

            } else if (number < 1) {
                return 'El numero no puede ser negativo ni cero!';
            }

            var name = attrs.name;
            if(name === ""){
                return 'Tu jugador tiene q tener un nombre!';
            }

        }
    });

    var PlayerView = Backbone.View.extend({
        defaults:{
            svgText : null
        },

        template:_.template($('#player-template').html()),

        initialize:function () {
            //_.bindAll(this, 'render');
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.removePlayer);
        },

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
            this.model.remove();
        },

        updatePlayerName: function(evt){
            var newName = $(evt.currentTarget).val();
            this.model.set({name: newName});
        },

        updatePlayerNumber: function(evt){
            var newNumber = $(evt.currentTarget).val();
            this.model.set({number: newNumber});
        },

        render: function(){
            $(this.el).html(this.template(this.model.toJSON()));
            this.model.get("svgText").attr({text: this.model.get("name")});
            this.model.get("svgNumber").attr({text: this.model.get("number")});
            return this;
        }
    });

    var Team = Backbone.Collection.extend({
        model: Player
    });

    var team = new Team();

    var AppView = Backbone.View.extend({
        el:$('body'),

        initialize: function(){
            //team.bind('add', this.addPlayer);
        },
        events:{
            "click #exportButton" : "exportToImage",
            "click #downloadButton" : "viewImage",
            "change #pitchType" : "pitchSizeChanged"
        },

        getPNGPitch: function(){
            optionsSet.forEach(function(element){
                element.hide();
            });
            var pitchXTranslationValue = 120;
            var brandText = paper.text(pitchXTranslationValue + 7, 200, "ComoFormamos.com").transform("S3R-90");
            var teamNameValue = $('#teamName').val();
            var teamName;
            if (teamNameValue !== "") {
                teamName = paper.text(430, 10, teamNameValue).attr({stroke:"white", "font-size":17, fill:"white"});
            }
            pitch.transform("...T"+(-pitchXTranslationValue)+",0");
            for (var key in modelViewMap) {
                modelViewMap[key].transform("...T"+(-pitchXTranslationValue)+",0");
            }

            var svg = $('#canvas_container').html();

            var canvas = document.createElement('canvas');
            canvas.setAttribute('width', svg.offsetWidth);
            canvas.setAttribute('height', svg.offsetHeight);
            canvas.setAttribute(
                'style',
                'position: absolute; ' +
                    'top: ' + (-svg.offsetHeight * 2) + 'px;' +
                    'left: ' + (-svg.offsetWidth * 2) + 'px;');

            canvg(canvas, svg);
            var imgData = canvas.toDataURL("image/png");
            optionsSet.forEach(function(element){
                element.show();
            });
            pitch.transform("...T"+(pitchXTranslationValue)+",0");
            for (key in modelViewMap) {
                modelViewMap[key].transform("...T"+(pitchXTranslationValue)+",0");
            }
            brandText.remove();
            if (teamNameValue !== "") {
                teamName.remove();
            }
            return imgData;
        },

        checkEmptyTeamName: function(){
            var teamName = $('#teamName').val();
            if(teamName === "" || teamName === "Mi equipo"){
                var enteredValue = prompt("Tu equipo no tiene un nombre, no queres ponerle uno?", "Mi equipo") || "";
                $('#teamName').val(enteredValue); //TODO nicer prompt?
            }
        },

        viewImage: function(){
            this.checkEmptyTeamName();
            var imgData = this.getPNGPitch();
            Lightview.show([{url:imgData, title: $('#teamName').val(), type: "image", options:{
                viewport: false,
                width:590,
                height:605
            }}]);

        },

        exportToImage: function(){
            var imgData = this.getPNGPitch();

            var addresses = ""; //between the speech mark goes the receptient. Seperate addresses with a ;
            var body = "Para agregar la imagen de tu formacion segui las intrucciones bajo la imagen aparece en la web!";
            var instructions = "1. Hace click derecho -> 'guardar como...' sobre la imagen y guardala donde quieras -> 2. Agregala como archivo adjunto a este mail -> 3. Compartila a tus amigos! No te olvides de avisar a que hora y donde se juntan!";
            var subject = "Asi vamos a formar en el partido!";
            var href = "mailto:" + addresses + "?" +
                     "subject=" + subject + "&" +
                     "body=" + body;
            var wndMail;
            wndMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=500,height=500");
            if(wndMail)
            {
                wndMail.close();    
            }
            //window.location = imgData/*.replace("image/png", "image/octet-stream")*/;
            Lightview.show([{url:imgData, title: $('#teamName').val(), caption: instructions, type: "image", options:{
                viewport: false,
                width:590,
                height:605
            }}]);
        },

        pitchSizeChanged : function(){
            selectedTeamSize = $('#pitchType').attr('value');
        },

        createNewModel: function(player){
            if (team.length < 11) {
                var item = player.items[1];
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
                player.destroy();
                player.clear();
                $.pnotify({
                    title: 'Error!',
                    text: 'Más de 11 jugadores? A que vas a jugar??',
                    type: 'error'
                });
            }
        }

    });

    function removePlayer(playerId){
        var player = _.find(team.models, function(model){ //TODO use Collection getById() or get()
            var id = model.get("playerId");
            return id === playerId;
        });
        team.remove(player);
        player.destroy();
    }

    function removeExistingPlayer(player){
        removePlayer(player.playerId);
        player.destroy();
    }

    var app = new AppView();
    eve.on("playerDropped", app.createNewModel);
    eve.on("playerDroppedOutOfRange", removeExistingPlayer);
});


