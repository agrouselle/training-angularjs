(function(){
    angular.module('NoteWrangler')
        .controller('NoteNewController', function($http){
            var controller = this;

            controller.note = {};

            this.saveNote = function(note){
                controller.errors = null;

                $http.post('/notes', {data:note})
                    .catch(function(error){
                        controller.errors = [{code: error.status, message: error.statusText}];
                    });
            }
        });
}());