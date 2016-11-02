(function(){
    angular.module('NoteWrangler')
        .factory('User', function UserFactory($http){
            var apiUrl = 'http://localhost:3000/api';

            return {
                all: function(){ return $http.get(apiUrl + '/users'); }
            }
        });
}())