'use strict';

(function (window, document) {
    var canvas = document.createElement('canvas');
    var video = document.querySelector('video');
    var ctx = canvas.getContext('2d');

    // Change the size here
    canvas.width = parseInt(video.style.width);
    canvas.height =  parseInt(video.style.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL('image/jpeg');
    console.log(dataURL);

    window.open(dataURL);
})(window, document)
