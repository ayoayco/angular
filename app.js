(function(){

	var app = angular.module('gemStore', []);


	app.controller('StoreController', function(){
		this.products = gems; 
		this.sortString = "price";
		this.sortItems = function(){
			if(this.sortString === "price") this.sortString = "-price";
			else this.sortString = "price";
		}
	});


	var gems = [
		{
			name: 'Dodecahedron',
			price: '2',
			description: 'Best gem ever! Really!',
			canPurchase: true,
			soldOut: false,
			images:'1.png'	
		},
		{
			name: 'Pentagonal Gem',
			price: '5.95',
			description: 'Great Gem too.',
			canPurchase: true,
			soldOut: false,
			images:'2.png'
		},
		{
			name: 'Sorcerer\'s Gem',
			price: '5.95',
			description: 'Great Gem too.',
			canPurchase: true,
			soldOut: false,
			images:'3.png'
		},
		{
			name: 'Pentagonal Gem',
			price: '5.95',
			description: 'Great Gem too.',
			canPurchase: true,
			soldOut: false,
			images:'4.png'
		}
	]

})();