(function(){
    angular.module('NoteWrangler')
        .controller('NotesEditController', ['$scope', '$http', '$routeParams', 'Note',
            function($scope, $http, $routeParams, Note){

            var controller = this;
            controller.note = {};

            if($routeParams.id){
                controller.note = Note.get({id: $routeParams.id});
                    // .catch(handleErrors);
            }

            $scope.saveNote = function(note){
                if(note.id)
                    this.updateNote(note);
                else
                    this.createNote(note);
            }

            $scope.updateNote = function(note){
                // controller.errors = null;
                Note.update({id: note.id}, note); //.catch(handleErrors);
            }

            $scope.createNote = function(note){
                // controller.errors = null;
                Note.save(note);
            }

            $scope.deleteNote = function(note){
                // controller.errors = null;
                console.log(Note.delete(note)); //.catch(handleErrors);
            }

            var handleErrors = function(error){
                console.log('Error in NotesEditController: ' + error);
                controller.errors = [{code: error.status, message: error.statusText}];
            }

        }]);
}());