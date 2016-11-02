(function(){
    angular.module('NoteWrangler')
        .controller('NoteShowController', ['$http', '$routeParams', 'Note', function($http, $routeParams, Note){
            // var controller = this;
            // controller.note = {};
            // $http.get('/data/notes/' + $routeParams.id + '.json')
            //     .success(function(data){
            //         controller.note = data;
            //     })
            //     .error(function(error){
            //         console.log('Error in NoteShowController', error)
            //     });

            // OR
            this.note = Note.get({id: $routeParams.id});
        }]);
}());