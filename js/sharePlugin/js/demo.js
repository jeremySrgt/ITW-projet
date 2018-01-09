$(function (){

	var url = 'perso.esiee.fr/~surgetj/ITWPROJET/html/index.html';

	var options = {

		twitter: {
			text: 'ITW study project',
			via: 'ITW'
		},

		facebook : true,
		googlePlus : true
	};

	$('.share').shareButtons(url, options);


/*

	// You can also share to pinterest and tumblr:

	var options = {

		// Pinterest requires a image to be "pinned"

		pinterest: {
			media: 'http://example.com/image.jpg',
			description: 'My lovely picture'
		},

		// Tumblr takes a name and a description

		tumblr: {
			name: 'jQuery Social Buttons Plugin!',
			description: 'There is a new article on tutorialzine.com page! Check out!'
		}
	};

*/

});
