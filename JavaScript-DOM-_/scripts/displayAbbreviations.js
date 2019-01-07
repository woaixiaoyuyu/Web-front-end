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
    document.getElementsByTagName('body')[0].appendChild(header);
    document.getElementsByTagName('body')[0].appendChild(dlist);

}

addloadEvent(displayAbbreviations);