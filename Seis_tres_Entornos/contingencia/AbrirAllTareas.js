var aTags = document.getElementsByTagName("a");
var searchText = "TAREA";
var searchText2 = "ASSIGNMENT";
var found = [];
var found2 = [];
var found3 = [];
var contar = 0;
var contar2 = 0;
var contar3 = 0;

for (var i = 0; i < aTags.length; i++) {
if (aTags[i].getElementsByTagName("span")[1]) {
	found[contar] = aTags[i];
	contar++;
}
}

for (var i = 0; i < found.length; i++) {
if (found[i].childNodes.length==2 && found[i].childNodes[1].childNodes.length==2) {
	found2[contar2] = found[i];
	contar2++;
}
}

for (var i = 0; i < found2.length; i++) {
if (found2[i].childNodes[1].childNodes[1].innerText.replace(/ /g,"").toUpperCase() == searchText || found2[i].childNodes[1].childNodes[1].innerText.replace(/ /g,"").toUpperCase() == searchText2) {
	found3[contar3] = found2[i];
	contar3++;
}
}

for (var i = 0; i < found3.length; i++) {
    var textedit = "course/modedit.php?update=";
    var m_edicion = found3[i].getAttribute("href");
    var fin = m_edicion.indexOf("mod");
    var Textinicio = m_edicion.slice(0, fin);
    var Actid = m_edicion.slice(m_edicion.indexOf("id=")+3,m_edicion.length);
    m_edicion = Textinicio.concat(textedit, Actid)
    window.open(m_edicion)
}
