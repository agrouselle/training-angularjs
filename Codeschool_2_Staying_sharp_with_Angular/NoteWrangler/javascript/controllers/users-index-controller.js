(function(){
    angular.module('NoteWrangler')
        .controller('UsersIndexController', function($scope, Gravatar, User){
            $scope.users = [];
            User.all()
                .success(function(data){
                   $scope.users = data;
                });

            $scope.gravatarUrl = function(email){
                return Gravatar.generate(email);
            }
        });
}());