function convertToGS(img) {
    // if(!Modernizr.canvas) return;
    img.color = img.src;
    img.grayscale = createGSCanvas(img);
    img.onmouseover = function () {
        this.src = this.color;
    }
    img.onmouseout= function () {
        this.src = this.grayscale;
    }
    img.onmouseout();
}

function createGSCanvas(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(img,0,0);

    var c = ctx.getImageData(0,0,img.width,img.height);
    for(var i=0; i<c.width*c.height; i++){
        var r = c.data[4*i];
        var g = c.data[4*i+1];
        var b = c.data[4*i+2];
        c.data[4*i] = c.data[4*i+1] = c.data[4*i+2] = Math.floor((r+g+b)/3);
    }
    ctx.putImageData(c,0,0,0,0,c.width,c.height);
    return canvas.toDataURL();
}

addloadEvent(convertToGS(document.getElementById('dog')));
