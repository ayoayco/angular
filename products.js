(function () {
    var app = angular.module('store-products', []);

    app.directive("productPanel", function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panel.html',
            controller: function () {
                this.tab = 1;
                this.setTab = function (tabnum) {
                    this.tab = tabnum;
                };
                this.isSelected = function (tabnum) {
                    return this.tab === tabnum;
                };
            },
            controllerAs: 'panel'
        };
    });

    app.directive('productReviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-review-form.html'
        }
    });

    app.directive('productDetail', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-detail.html'
        }
    });

    app.directive('productDetailNav', function () {
        return {
            restrict: 'E',
            templateUrl: "product-detail-nav.html"
        }
    })

    app.directive('productThumbnail', function () {
        return {
            restrict: 'E',
            templateUrl: "product-thumbnail.html"
        }
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        }
    });

})();