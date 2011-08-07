/* Randomicimages
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var d = document;
var w = window;
var floor = Math.floor;
var random = Math.random;
var urls = ['images/image_00.jpg',
            'images/image_01.jpg', 
            'images/image_02.jpg', 
            'images/image_03.jpg', 
            'images/image_04.jpg', 
            'images/image_05.jpg',
            'images/image_06.jpg'
           ];
var n_urls = urls.length;
	
function randomize_urls() {
    if (n_urls) {
        var randomized = floor(random()*n_urls);
        return urls[randomized];
    }
    else {
        return 'images/404.jpg';
    }
}

w.onload = function () {
	    var image = document.getElementById('banner');
	    image.src = randomize_urls();
}