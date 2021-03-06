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

function showPic(whichpic) {
    if(!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if(!document.getElementById('description')) return false;
    if(whichpic.getAttribute('title'))
        var text = whichpic.getAttribute('title');
    else var text = '';
    var description = document.getElementById('description');
    if(description.firstChild.nodeType===3)
        description.firstChild.nodeType = text;
    return false;
}

function preparePlaceholder() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById('imagegallery')) return false
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','images/background.png');
    placeholder.setAttribute('alt','my image gallery');
    var description = document.createElement('h2');
    description.setAttribute('id','description');
    var desctext = document.createTextNode('Choose an image');
    description.appendChild(desctext);
    var gallery = document.getElementById('imagegallery');
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

addloadEvent(preparePlaceholder);

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var gallery= document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for(var i=0; i<links.length; i++){
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

addloadEvent(prepareGallery);

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName('tr');
    for(var i=0; i<rows.length; i++){
        rows[i].oldClassName = rows.className;
        rows[i].onmouseover = function () {
            addClass(this,'highlight');
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }
    }
}

addloadEvent(highlightRows);

function displayAbbreviations() {
    if(!document.getElementById) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    var abbrevitions = document.getElementsByTagName('abbr');
    if(abbrevitions.length<1) return false;
    var defs = new Array();
    for(var i=0; i<abbrevitions.length; i++){
        var current_abbr = abbrevitions[i];
        if(current_abbr.childNodes.length<1) return false;
        var definition = current_abbr.getAttribute('title');
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;

    }
    var dlist = document.createElement('dl');
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_txt = document.createTextNode(key);
        dtitle.appendChild(dtitle_txt);
        var ddsec = document.createElement('dd');
        var ddsec_txt = document.createTextNode(definition);
        ddsec.appendChild(ddsec_txt);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddsec);
    }
    if(dlist.childNodes.length<1) return false;
    var header = document.createElement('h2');
    var header_txt = document.createTextNode('Abbreviations');
    header.appendChild(header_txt);
    document.getElementsByTagName('article')[0].appendChild(header);
    document.getElementsByTagName('article')[0].appendChild(dlist);

}

addloadEvent(displayAbbreviations);

function displayAjaxLoading(element) {
    while (element.hasChildNodes()) element.removeChild(element.lastChild);
    var content = document.createElement('img');
    content.setAttribute('src','images/ajax-loader.gif');
    content.setAttribute('alt','Loading……');
    element.appendChild(content);
}

function submitFormWithAjax(whichform,thetarget) {
    var request = new XMLHttpRequest();
    if(!request) return false;
    displayAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for(var i=0; i<whichform.elements.length; i++){
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
    }
    var data = dataParts.join('$');
    request.open('POST',whichform.getAttribute('action'),true);
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.onreadystatechange = function () {
        if(request.readyState===4){
            if(request.status===200 ||request.status===0){
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    thetarget.innerHTML = matches[1];
                }
                else{
                    thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
                }
            }
            else{
                thetarget.innerHTML = '<p>' + request.statusText + '</p>';
            }
        }
    };
    request.send(data);
    return true;
}

function prepareForms() {
    for(var i=0; i<document.forms.length; i++){
        var thisform = document.forms[i];
        // resetFields(thisform);
        thisform.onsubmit = function () {
            // if(!validateForm(this)) return false;
            var article = document.getElementsByTagName('article')[0];
            if(submitFormWithAjax(this,article)) return false;
            return true;
        }
    }
}

addloadEvent(prepareForms);
