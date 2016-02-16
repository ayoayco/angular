(function(){

	var app = angular.module('gemStore', []);

	app.controller("panelCtrl", function(){
		this.tab = 1;
		this.setTab = function(tabnum){
			this.tab = tabnum;
		};
		this.isSelected = function(tabnum){
			return this.tab === tabnum;
		};
	});

	app.controller('StoreController', function(){
		this.products = gems; 
		this.sortItems = function () {
		    if (this.sortString === "price") this.sortString = "-price";
		    else this.sortString = "price";
		};
	});

	app.controller('ReviewController', function () {
	    this.review = {};
	    this.addReview = function (product) {
	        this.review.createdOn = Date.now();
	        product.reviews.push(this.review);
	        this.review = {};
	    };
	});

	app.directive('storeTitle', function () {
	    return {
	        restrict: 'E',
            templateUrl: 'store-title.html'
	    }
	});

	app.directive('productReviewForm', function(){
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

	var gems = [
		{
			name: 'Petty Soul Gem',
			price: 2,
			description: 'Best gem ever! Really!',
			specs: 'Specs Specs Specs.',
			reviews: [
				{
				    stars:5,
				    body: 'Review Review Review.',
				    author: 'Ayo Ayco',
				    createdOn: 12345643
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
				    createdOn: 12345643
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'1.png'	
		},
		{
			name: 'Common Soul Gem',
			price: 5.50,
			description: 'Great Gem too.',
			specs: 'Specs Specs Specs.',
			reviews: [
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
				    createdOn: 12345643
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
					createdOn: 12345643
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'2.png'
		},
		{
			name: 'Sorcerer\'s Gem',
			price: 13.00,
			description: 'Great Gem too.',
			specs: 'Specs Specs Specs.',
			reviews: [
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
					createdOn: 12345643
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
					createdOn: 12345643
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'3.png'
		},
		{
			name: 'Fine Gem',
			price: 7.25,
			description: 'Great Gem too.',
			specs: 'Specs Specs Specs.',
			reviews: [
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
					createdOn: 12345643
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco',
					createdOn: 12345643
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'4.png'
		}
	]

})();