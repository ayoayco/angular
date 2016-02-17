(function () {

    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController',['$http', function ($http) {
        var store = this;
        store.products = [];

        $http.get('http://ayoayco.com/angular/products.json').then(function(data){
            store.products = data;
        }, function () {
            alert("Loading Products JSON Failed.");
        });

        store.sortItems = function () {
            if (this.sortString === "price") this.sortString = "-price";
            else this.sortString = "price";
        };
    }]);

    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
})();