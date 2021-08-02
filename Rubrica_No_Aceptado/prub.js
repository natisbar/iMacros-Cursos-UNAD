var contar = 0;
for(var i=2; i<=200; i++){
    if(document.getElementById("res_"+i)!=null){
        contar++;
    }
}

for(i=2; i<=contar+1; i++){
    let assignmentField = document.getElementById("res_"+i);
    assignmentField.value = 1;
    document.getElementById("bguarda_"+i).click();
}


var contar = 0; for(var i=2; i<=200; i++){if(document.getElementById("res_"+i)!=null){contar++;}}for(i=2; i<=contar+1; i++){let assignmentField = document.getElementById("res_"+i);assignmentField.value = 0;document.getElementById("bguarda_"+i).click();}