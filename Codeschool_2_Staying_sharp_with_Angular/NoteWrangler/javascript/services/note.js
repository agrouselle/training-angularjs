(function(){
    angular.module('NoteWrangler')
        .factory('Note', function NoteFactory($resource){
            var apiUrl = 'http://localhost:3000/api';
            // return {
            //    all: function(){ return $http.get(apiUrl + '/notes'); },
            //    find: function(id){ return $http.get(apiUrl + '/notes/' + id); },
            //    create: function(data){ return $http.post(apiUrl + '/notes', data); },
            //    update: function(data){ return $http.put(apiUrl + '/notes/' + data.id, data)},
            //    delete: function(id){ return $http.delete(apiUrl + '/notes/' + id)}
            // };

           // OR
           return $resource(apiUrl + '/notes/:id', {}, {
               update: {method: 'PUT'}
           });
        });
}());