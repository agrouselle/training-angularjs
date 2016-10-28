(function(){
    angular.module('NoteWrangler')
        .controller('NoteCreateController', function($http){
            var controller = this;

            this.saveNote = function(note){
                controller.errors = null;

                $http.post('/notes', {data:note})
                    .catch(function(note){
                        controller.errors = note.data.errors;
                    });
            }
        });
}());