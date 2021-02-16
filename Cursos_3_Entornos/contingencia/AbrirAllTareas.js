var aTags = document.getElementsByTagName("a");
var searchText = "ICONLARGEACTIVITYICON";
var searchText2 = "iconlarge activityicon";
var found = [];
var found2 = [];
var found3 = [];
var contar = 0, contar2 = 0, contar3 = 0;
var CountAssign = 0, CountForum = 0, CountFolder = 0, CountQuiz = 0, CountPage = 0;
var assign = [];
var forum = [];
var folder = [];
var quiz = [];
var page = [];

for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].getElementsByTagName("img")[0]) {
        found[contar] = aTags[i];
        contar++;
    }
}

for (var i = 0; i < found.length; i++) {
        found2[contar2] = found[i].childNodes[0].className;
        contar2++;
}

for (var i = 0; i < found2.length; i++) {
    if (found2[i] == searchText2) {
        found3[contar3] = found[i];
        contar3++;
    }
}

for (var i = 0; i < found3.length; i++) {
    var srcicon = found3[i].getElementsByTagName("img")[0].getAttribute("src");
    if(srcicon.indexOf("assign")>=0){
        assign[CountAssign] = found3[i];
        CountAssign++;
    }
    else if(srcicon.indexOf("forum")>=0){
        forum[CountForum] = found3[i];
        CountForum++;
    }
    else if(srcicon.indexOf("folder")>=0){
        folder[CountFolder] = found3[i];
        CountFolder++;
    }
    else if(srcicon.indexOf("quiz")>=0){
        quiz[CountQuiz] = found3[i];
        CountQuiz++;
    }
    else if(srcicon.indexOf("page")>=0){
        page[CountPage] = found3[i];
        CountPage++;
    }
}

alert("Tareas: " + CountAssign + " Foros: " + CountForum +" (informativos: 3, colaborativos: " + (CountForum-3) + ") Guías: " + CountFolder + " Quiz: " + CountQuiz);

for (var i = 0; i < assign.length; i++) {
    var textedit = "course/modedit.php?update=";
    var m_edicion = assign[i].getAttribute("href");
    var fin = m_edicion.indexOf("mod");
    var Textinicio = m_edicion.slice(0, fin);
    var Actid = m_edicion.slice(m_edicion.indexOf("id=")+3,m_edicion.length);
    m_edicion = Textinicio.concat(textedit, Actid)
    window.open(m_edicion)
}


// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/assign/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/forum/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/folder/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/page/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/hvp/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/choice/1612468801/icon
// https://campus129.unad.edu.co/ecbti90/theme/image.php/classic/quiz/1612468801/icon
