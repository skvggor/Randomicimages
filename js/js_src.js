/* Randomicimages
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var Randomicimages = Randomicimages || {};

Randomicimages = {
    urls: (function(){
        return [
            'images/image_00.jpg',
            'images/image_01.jpg',
            'images/image_02.jpg',
            'images/image_03.jpg',
            'images/image_04.jpg',
            'images/image_05.jpg',
            'images/image_06.jpg'
        ];
    })(),

    randomizeUrls: function() {
        var urlsLength;
        urlsLength = this.urls.length;

        if (urlsLength) {
            var randomized;
            randomized = Math.floor(Math.random()*urlsLength);
            return this.urls[randomized];
        }
        else {
            return 'images/404.jpg';
        }
    }
};

window.onload = function() {
    var image = document.getElementById('banner');
    image.src = Randomicimages.randomizeUrls();
};