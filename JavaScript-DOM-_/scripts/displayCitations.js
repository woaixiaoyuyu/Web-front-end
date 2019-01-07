function displayCitations() {
    if(!document.getElementById) return false;
    if(!document.createTextNode) return false;
    if(!document.createElement) return false;
    var quotes = document.getElementsByTagName('blockquote');
    for(var i=0; i<quotes.length; i++){
        if(!quotes[i].getAttribute('cite')) continue;
        var url = quotes[i].getAttribute('cite');
        var quoteChildren = quotes[i].getElementsByTagName('*');
        if(quoteChildren.length<1) continue;
        var elem = quoteChildren[quoteChildren.length-1];
        var link = document.createElement('a');
        var link_txt = document.createTextNode('source');
        link.appendChild(link_txt);
        link.setAttribute('href', url);
        var superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addloadEvent(displayCitations);