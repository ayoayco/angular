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
		this.sortItems = function(){
			if(this.sortString === "price") this.sortString = "-price";
			else this.sortString = "price";
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
					author: 'Ayo Ayco'
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco'
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'1.png'	
		},
		{
			name: 'Common Soul Gem of Oblivion',
			price: 5.50,
			description: 'Great Gem too.',
			specs: 'Specs Specs Specs.',
			reviews: [
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco'
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco'
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
					author: 'Ayo Ayco'
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco'
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
					author: 'Ayo Ayco'
				},
				{
					stars:5,
					body: 'Review Review Review.',
					author: 'Ayo Ayco'
				}
			],
			canPurchase: true,
			soldOut: false,
			images:'4.png'
		}
	]

})();