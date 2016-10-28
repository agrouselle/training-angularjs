(function(){
    angular.module('NoteWrangler')
        .controller('NoteShowController', ['$http', '$routeParams', function($http, $routeParams){
            var controller = this;
            controller.note = {};

            $http.get('/data/notes/' + $routeParams.id + '.json')
                .success(function(data){
                    controller.note = data;
                })
                .error(function(error){
                    console.log('Error in NoteShowController', error)
                });
        }]);
}());