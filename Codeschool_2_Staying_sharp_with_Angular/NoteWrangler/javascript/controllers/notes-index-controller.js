(function(){
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($scope, Note){
            var controller = this;
            $scope.notes = [];

            // Note.all()
            //     .success(function(data){
            //         controller.notes = data;
            //     })
            //     .error(function(error){
            //        console.log('Error in NotesIndexController', error);
            //     });

            // OR
            $scope.notes = Note.query();
        });
}());