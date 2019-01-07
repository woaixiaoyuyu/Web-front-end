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

function create(){
    var body = document.getElementsByTagName('body');
    var img = document.createElement('img');
    img.setAttribute('id', 'placeholder');
    img.setAttribute('src', "images/draw_map.jpg");
    img.setAttribute('alt', "My image gallery");
    var p =document.createElement('p');
    p.setAttribute('id', "description");
    var txt = document.createTextNode('Choose an image');
    p.appendChild(txt);
    body[0].appendChild(img);
    body[0].appendChild(p);
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

addloadEvent(create);
addloadEvent(prepareGallery);

function insert() {
    var gallery = document.getElementById('imagegallery');
    var placeholder =document.getElementById('placeholder');
    var description =document.getElementById('description');
    gallery.parentNode.insertBefore(placeholder, gallery);
    gallery.parentNode.insertBefore(description, gallery);
}

addloadEvent(insert);

function insertAfter(newElement, targetElement) {
    var target = document.getElementById(targetElement)
    var parent = document.getElementById(newElement).parentNode;
    if(parent.lastChild ===target)
        parent.appendChild(newElement);
    else
        parent.insertBefore(newElement, target.nextSibling);
}

addloadEvent(insertAfter);