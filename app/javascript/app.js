// Generated by CoffeeScript 1.4.0
(function(){$(function(){var e;$("#content header .edit").click(function(){if($(this).text()==="save"){$(this).text("edit");return e.preview()}$(this).text("save");return e.edit()});e=new EpicEditor({container:"contentbody",theme:{base:"/themes/base/epiceditor.css",preview:"/themes/preview/style.css",editor:"/themes/editor/github.css"}});e.load();e.importFile("some-file","#Imported markdown\nFancy, huh?");return e.preview()});window.noted=blank(function(){return console.log("hey")})}).call(this);