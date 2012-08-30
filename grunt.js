/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        meta:{
            version:'0.1.0',
            banner:'/*! ComoFormamos - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://comoformamos.appspot.com/\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'Tomas Alabes; Licensed MIT */'
        },
        lint:{
            afterConcat:['grunt.js', '<config:concat.dist.dest>'],
            beforeConcat:['grunt.js',  'web/js/**/*.js']
        },
//    qunit: {
//      files: ['test/**/*.html']
//    },
        concat:{
            dist:{
                src:['<banner:meta.banner>', 'web/js/loader/options.js', 'web/js/loader/dragFunctions.js', 'web/js/loader/editorLoader.js', 'web/js/app.js'],
                dest:'web/generated/ComoFormamos.js'
            }
        },
        min:{
            dist:{
                src:['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest:'web/generated/ComoFormamos.min.js'
            }
        },
        watch:{
            files:'<config:lint.files>',
            tasks:'lint qunit'
        },
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                browser:true,
                devel: true
            },
            globals:{
                $:true,
                Backbone:true,
                Raphael:true,
                eve:true,
                Lightview: true,
                _:true,
                canvg:true,
                paper:true,
                pitch:true,
                optionsSet:true
            }
        },
        uglify:{}
    });

    // Default task.
    grunt.registerTask('default', 'concat lint:afterConcat min');

};
