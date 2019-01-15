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

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild ===targetElement) parent.appendChild(newElement);
    else parent.insertBefore(newElement,targetElement.nextSibling);
}

function addClass(element,value) {
    if(!element.className) element.className = value;
    else{
        var newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}

function highlightPage() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var headers = document.getElementsByTagName('header');
    if(headers.length ===0) return false;
    var navs = headers[0].getElementsByTagName('nav');
    if(navs.length ===0) return false;
    var links = navs[0].getElementsByTagName('a');
    for(var i=0; i<links.length; i++){
        var linkurl;
        for(var i=0; i<links.length; i++){
            linkurl = links[i].getAttribute('href');
            if(window.location.href.indexOf(linkurl) !==-1){
                links[i].className = 'here';
                var linktext = links[i].lastChild.nodeValue.toLowerCase();
                document.getElementById('autumn').setAttribute('alt','Too hard');
                document.getElementById('autumn').setAttribute('id',linktext);
            }
        }
    }
}

addloadEvent(highlightPage);

function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(elem.movement){
        clearTimeout(elem.movement)
    }
    if(!elem.style.left) elem.style.left = '0px';
    if(!elem.style.top) elem.style.top = '0px';
    var dist = 0;
    if(xpos===final_x && ypos===final_y) return true;
    if(xpos<final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if(xpos>final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist;
    }
    if(ypos<final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos += dist;
    }
    if(ypos>final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos+'px';
    elem.style.top = ypos+'px';
    var repeat = 'moveElement("'+elementID+'",'+final_x+','+final_y+','+interval+')';
    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('intro')) return false;
    var quote = document.getElementById('quote');

    var slideshow = document.createElement('div');
    slideshow.setAttribute('id', 'slideshow');
    var preview = document.createElement('img');
    preview.setAttribute('src', 'images/slideshow.png');
    preview.setAttribute('id', 'preview');
    preview.setAttribute('alt', 'A glimpse of what awaits you');
    slideshow.appendChild(preview);
    insertAfter(slideshow, quote);

    var links = document.getElementsByTagName('a');
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute('href');
            if (destination.indexOf('index.html') !== -1) {
                moveElement('preview', 0, 0, 5);
            }
            if (destination.indexOf('about.html') !== -1) {
                moveElement('preview', -130, 0, 5);
            }
            if (destination.indexOf('photos.html') !== -1) {
                moveElement('preview', -260, 0, 5);
            }
            if (destination.indexOf('live.html') !== -1) {
                moveElement('preview', -390, 0, 5);
            }
            if (destination.indexOf('contact.html') !== -1) {
                moveElement('preview', -530, 0, 5);
            }
        }
    }
}

addloadEvent(prepareSlideshow);

function showSection(id) {
    var sections = document.getElementsByTagName('section');
    for(var i=0; i<sections.length; i++){
        if(sections[i].getAttribute('id')!==id) sections[i].style.display = 'none';
        else sections[i].style.display = 'block';
    }
}

function prepareInternalnav() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var articles = document.getElementsByTagName('article');
    if(articles.length ===0) return false;
    var navs = articles[0].getElementsByTagName('nav');
    if(navs.length ===0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName('a');
    for(var i=0; i<links.length; i++){
        var sectionId = links[i].getAttribute('href').split('#')[1];
        if(!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }
    }
}

addloadEvent(prepareInternalnav);