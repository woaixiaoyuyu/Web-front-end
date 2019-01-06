function showPic(whicpic) {
    var source = whicpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    var text = whicpic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}
