(function(){
    angular.module('NoteWrangler')
        .directive('nwCategorySelect', function(Category){
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'templates/directives/nw-category-select.html',
                scope: {
                    activeCategory: '='
                },
                controller: function($scope){
                    this.setActiveCategory = function(category){
                        $scope.activeCategory = category;
                    }

                    this.getActiveCategory = function(){
                        return $scope.activeCategory;
                    }

                    this.getNotesCountForCategory = function(category) {
                        var notes = $scope.$parent.notes;

                        if(!notes) {
                            return 0;
                        }

                        var count = 0;
                        for(var i=0, l = notes.length; i < l; i++ ) {
                            if(notes[i].category.id === category.id) {
                                count++;
                            }
                        }

                        return count;
                    }
                },
                link: function(scope, element, attrs){
                    scope.categories = []

                    Category.all()
                        .success(function(data){
                            scope.categories = data;
                        })
                        .catch(function(error){
                            console.log('Error:', error)
                        });
                }
            }
        })
}())