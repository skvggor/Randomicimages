/* Randomicimages
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var Randomicimages = Randomicimages || {};

Randomicimages = {
    urls: (function(){
        var path;
        path = 'images/';

        return [
            path + 'image_00.jpg',
            path + 'image_01.jpg',
            path + 'image_02.jpg',
            path + 'image_03.jpg',
            path + 'image_04.jpg',
            path + 'image_05.jpg',
            path + 'image_06.jpg'
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