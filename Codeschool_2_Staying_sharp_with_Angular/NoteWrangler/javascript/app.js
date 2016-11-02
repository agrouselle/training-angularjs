(function(){
    angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
        .config(function(GravatarProvider){
            GravatarProvider.setSize(40);
        });
}());