(function () {

    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController',['$http', function ($http) {
        var store = this;
        store.products = gems;

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
    
    var gems =  [
		        {
		            "name": "Petty Soul Gem",
		            "price": 2,
		            "description": "Best gem ever! Really!",
		            "specs": "specs specs specs specs .",
		            "reviews": [
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        },
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        }
		            ],
		            "canPurchase": true,
		            "soldOut": false,
		            "images": "1.png"
		        },
		        {
		            "name": "Common Soul Gem",
		            "price": 5.50,
		            "description": "Great Gem too.",
		            "specs": "specs specs specs specs .",
		            "reviews": [
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        },
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        }
		            ],
		            "canPurchase": true,
		            "soldOut": false,
		            "images": "2.png"
		        },
		        {
		            "name": "Sorcerer\'s Gem",
		            "price": 13.00,
		            "description": "Great Gem too.",
		            "specs": "specs specs specs specs .",
		            "reviews": [
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        },
				        {
				            "stars": 5,
				            "body": "Review Review Review.",
				            "author": "Ayo Ayco",
				            "createdOn": 12345643
				        }
		            ],
		            "canPurchase": true,
		            "soldOut": false,
		            "images": "3.png"
		        },
          {
              "name": "Fine
            Gem",
            "price": 7.25,
            "description": "Great Gem too.",
            "specs": "Specs Specs Specs .",
            "reviews": [
              {
                  "stars": 5,
                  "body": "Review
                Review Review.",
                "author": "Ayo Ayco",
                "createdOn": 12345643
        },
              {
                  "stars": 5,
                  "body": "Review Review Review.",
                  "author": "Ayo Ayco",
                  "createdOn": 12345643
              }
        ],
            "canPurchase": true,
            "soldOut": false,
            "images": "4.png"
            }

    ];

})();