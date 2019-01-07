//已过时
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try {
                return new ActiveXObject("Msxmol2.XMLHTTP.6.0");
            }
            catch (e) {
            }
            try {
                return new ActiveXObject("Msxmol2.XMLHTTP.3.0");
            }
            catch (e) {
            }
            try {
                return new ActiveXObject("Msxmol2.XMLHTTP");
            }
            catch (e) {
            }
            return false;
        }
    return new XMLHttpRequest();
}

//如今 new XMLHttpRequest() 即可