var reqnums = [];
var reqs = [];
var reqElems = document.getElementById('newsquadctr').children[1].getElementsByClassName('req');
var blue = '#4EF7F2';

function displayReqs() {
    for (i=0;i<reqnums.length;i++) {
        if (reqElems[i].innerText.slice(-3,-2) == '(') {
            reqElems[i].innerText = reqElems[i].innerText.slice(0,-2) + reqnums[i] + ')';
        } else {
            reqElems[i].innerText = reqElems[i].innerText.slice(0,-3) + reqnums[i] + ')';
        }
    }
}

function checkReqs() {
    for (i=0;i<reqreqs.length;i++) {
        if (reqreqs[i][0] == '=') {
            if (reqnums[i] == reqreqs[i][1]) {reqs[i] = true;reqElems[i].style.color = blue} else {reqs[i] = false;reqElems[i].style.color = 'inherit'}
        } else if (reqreqs[i][0] == '>=') {
            if (reqnums[i] >= reqreqs[i][1]) {reqs[i] = true;reqElems[i].style.color = blue} else {reqs[i] = false;reqElems[i].style.color = 'inherit'}
        } else if (reqreqs[i][0] == '<=') {
            if (reqnums[i] <= reqreqs[i][1]) {reqs[i] = true;reqElems[i].style.color = blue} else {reqs[i] = false;reqElems[i].style.color = 'inherit'}
        }
    }
    if (!reqs.includes(false)) {
        document.getElementById('initialsubmitbtn').classList.remove('nohover')
        document.getElementById('initialsubmitbtn').style.filter = 'brightness(100%)';
    } else {
        document.getElementById('initialsubmitbtn').classList.add('nohover')
        document.getElementById('initialsubmitbtn').style.filter = 'brightness(50%)';
    }
}

function rivellino8() {
    reqnums = [0,0,0,0,0,0,0,0,0,0,0]
    reqreqs = [['>=',1],['>=',3],['>=',1],['>=',3],['>=',1],['>=',1],['>=',7],['>=',7],['=',0],['=',100],['=',11]]

    var lgList = [];
    var nationList = [];

    for (i=0;i<11;i++) {
        if (sbc11[i].nation == "uy") {
            reqnums[0] += 1;
        }
        if (sbc11[i].nation == "ar") {
            reqnums[1] += 1;
        }
        if (sbc11[i].nation == "pe") {
            reqnums[2] += 1;
        }
        if (sbc11[i].nation == "mx") {
            reqnums[3] += 1;
        }
        if (sbc11[i].nation == "cz") {
            reqnums[4] += 1;
        }
        if (sbc11[i].nation == "de") {
            reqnums[5] += 1;
        }
        var lgs = lgList.indexOf(sbc11[i].lg)
        if (lgs == -1 && sbc11[i].lg != '') {
            lgList.push(sbc11[i].lg);
            reqnums[6] = lgList.length;
        }
        var nations = nationList.indexOf(sbc11[i].nation)
        if (nations == -1 && sbc11[i].nation != '') {
            nationList.push(sbc11[i].nation);
            reqnums[7] = nationList.length;
        }
        if (sbc11[i].lg == 6 || sbc11[i].type == "Hero") {
            reqnums[8] += 1;
        }
        reqnums[9] = totalChemistry
        if (sbc11[i].ovr != 0) {
            reqnums[10] += 1;
        }
    }

    checkReqs();

    displayReqs()

}

function rivellino10() {
    reqnums = [0,0,0,0,0,0,0,0,0]
    reqreqs = [['=',1],['=',1],['=',1],['=',1],['>=',6],['>=',6],['>=',1],['=',0],['=',11]]

    var lgList = [];
    var nationList = [];

    for (i=0;i<11;i++) {
        if (sbc11[i].fullName == "Eden Hazard") {
            reqnums[0] += 1;
        }
        if (sbc11[i].fullName == "Raphaël Guerreiro") {
            reqnums[1] += 1;
        }
        if (sbc11[i].fullName == "Juan Cuadrado") {
            reqnums[2] += 1;
        }
        if (sbc11[i].fullName == "Bernardo Silva") {
            reqnums[3] += 1;
        }
        var lgs = lgList.indexOf(sbc11[i].lg)
        if (lgs == -1 && sbc11[i].lg != '') {
            lgList.push(sbc11[i].lg);
            reqnums[4] = lgList.length;
        }
        var nations = nationList.indexOf(sbc11[i].nation)
        if (nations == -1 && sbc11[i].nation != '') {
            nationList.push(sbc11[i].nation);
            reqnums[5] = nationList.length;
        }
        if (sbc11[i].type != "RG" && sbc11[i].type != "NRG" && sbc11[i].type != "RS" && sbc11[i].type != "NRS" && sbc11[i].type != "RB" && sbc11[i].ovr != 0) {
            reqnums[6] += 1;
        }
        if (sbc11[i].lg == 6 || sbc11[i].type == "Hero") {
            reqnums[7] += 1;
        }
        if (sbc11[i].ovr != 0) {
            reqnums[8] += 1;
        }
    }

    checkReqs();

    displayReqs()

}

function checksbcreqs() {
    window[sbcName]();
}