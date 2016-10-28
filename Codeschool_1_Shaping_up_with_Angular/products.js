(function(){
    var app = angular.module('store-products', []);

    app.directive('productTitle', function(){
        return {
            restrict: 'E',   // E for element. We're declaring a HTML element.
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productDescription', function(){
        return {
            restrict: 'A',   // A for attribute. We're declaring an attribute for existing HTML elements.
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;

                this.selectTab = function(tab){
                    this.tab = tab;
                };

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();