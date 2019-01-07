var paras = document.getElementsByTagName('p');
for (var i=0; i<paras.length; i++)
{
    paras[i].setAttribute('title', 'A brand new title');
    var title_text = paras[i].getAttribute('title');
    if (title_text)
        alert(title_text);
}