(function(){
    angular.module('NoteWrangler')
        .controller('NotesEditController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
            var controller = this;
            controller.note = {};

            if($routeParams.id){
                $http.get('/data/notes/' + $routeParams.id + '.json')
                    .success(function(data){
                        controller.note = data;
                    })
                    .catch(function(data){
                        console.log('Error in NotesEditController: ' + data);
                    });
            }

            $scope.updateNote = function(note){
                controller.errors = null;

                $http({method:'PUT', url:'/notes', data: note})
                    .catch(function(error){
                        controller.errors = [{code: error.status, message: error.statusText}];
                    });
            }

            $scope.createNote = function(note){
                controller.errors = null;

                $http.post('/notes', {data:note})
                    .catch(function(error){
                        controller.errors = [{code: error.status, message: error.statusText}];
                    });
            }

            $scope.saveNote = function(note){
                if(note.id)
                    this.updateNote(note);
                else
                    this.createNote(note);
            }

        }]);
}());