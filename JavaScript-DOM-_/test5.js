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

function create() {
    var para = document.createElement('p');
    var testdiv = document.getElementById('testdiv');
    testdiv.appendChild(para);
    var txt = document.createTextNode('Hello world!');
    para.appendChild(txt);
    // var info = 'nodename: ';
    // info += para.nodeName;
    // info += ' nodetype: ';
    // info += para.nodeType;
    // alert(info);
}

addloadEvent(create);
