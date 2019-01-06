function addloadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload !== 'function')
        window.onload = func;
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function prepareGallery() {
    if(!document.getElementById||!document.getElementsByTagName) return false;
    var gallery = document.getElementById('imagegallery');
    if(!gallery) return false;
    var links = gallery.getElementsByTagName('a');
    for(var i = 0; i<links.length; i++)
    {
        links[i].onclick = function () {
            return showPic(this)?false:true;
        }
    }
}

function showPic(whichpic) {
    var source = whichpic.getAttribute('href');
    if(!source) return false;
    var placeholder = document.getElementById('placeholder');
    if(placeholder.nodeName !== 'IMG') return false;
    placeholder.setAttribute('src', source);
    var text = whichpic.getAttribute('title');
    if(!text) text='';
    var description = document.getElementById('description');
    if(!description) return false;
    if(description.firstChild.nodeType ===3)
        description.firstChild.nodeValue = text;
    return true;
}

addloadEvent(prepareGallery);
