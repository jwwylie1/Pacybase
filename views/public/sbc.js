

var posFilter = [];
let nationFilter;
let lgFilter;
let clubFilter;
var typeFilter = [];
var ovrFilter = [];
var sbcFilteredList = [];

var posDown = false;
var nationDown = false;
var lgDown = false;
var clubDown = false;
var typeDown = false;
var ovrDown = false;
var swap = [false, 0];

var sbc11 = [
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
    {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''},
]

var totalChemistry = 0;
var totalCost = 0;

let editCardNum;

var posList = ['GK','LB','CB','RB','LWB','RWB','CDM','LM','RM','CM','CAM','LW','RW','LF','RF','CF','ST']

function removeItem(array, item) {
    var i = array.length;

    while (i--) {
        if (array[i] === item) {
            array.splice(array.indexOf(item), 1);
        }
    }
}

function editCircles() {
    if (posFilter.length > 0) {
        document.getElementById('poscircle').innerText = posFilter.length;
    }
}

function filterSbcCards() {

    editCircles()
    var input, filter, sbcTable, sbcCard, a, i, txtValue;
  sbcTable = document.getElementById("sbccards");
  sbcCard = sbcTable.getElementsByClassName('dbcard');

  for (i=0; i < sbcCard.length; i++) { //INITIALIZE CARD LIST
    sbcFilteredList.push(i);
  }

  // Loop through all searchRowst items, and hide those who don't match the search query
  if (posFilter.length > 0) {
    for (i = 0; i < sbcFilteredList.length; i++) { //POSITION FILTER
        cardPos = sbcCard[sbcFilteredList[i]].getElementsByClassName("dbcardbar")[0].children[1].textContent;
        if (!posFilter.includes(cardPos)) {
        sbcFilteredList.splice(i, 1, null)
        }
    }
}

  removeItem(sbcFilteredList, null);

  if (nationFilter != '' && nationFilter != null) { //NATION FILTER
    for (i = 0; i < sbcFilteredList.length; i++) {
        cardNation = sbcCard[sbcFilteredList[i]].getElementsByClassName("sbcnation")[0].textContent;
        if (nationFilter != cardNation) {
          sbcFilteredList.splice(i, 1, null)
        }
      }
  }

  removeItem(sbcFilteredList, null);

  if (lgFilter != '' && lgFilter != null) { //LEAGUE FILTER
    for (i = 0; i < sbcFilteredList.length; i++) {
        cardLeague = sbcCard[sbcFilteredList[i]].getElementsByClassName("sbcleague")[0].textContent;
        if (lgFilter != cardLeague) {
          sbcFilteredList.splice(i, 1, null)
        }
      }
  }

  removeItem(sbcFilteredList, null);

  if (clubFilter != '' && clubFilter != null) { //CLUB FILTER
    for (i = 0; i < sbcFilteredList.length; i++) {
        cardClub = sbcCard[sbcFilteredList[i]].getElementsByClassName("sbcclub")[0].textContent;
        if (clubFilter != cardClub) {
          sbcFilteredList.splice(i, 1, null)
        }
      }
  }

  removeItem(sbcFilteredList, null);

  if (typeFilter.length != 0) { //CARD TYPE FILTER
    for (i = 0; i < sbcFilteredList.length; i++) {
        cardType = sbcCard[sbcFilteredList[i]].getElementsByClassName("sbctype")[0].textContent;
        currentCard = sbcFilteredList[i];
        sbcFilteredList.splice(i, 1, null)
        for (j=0;j<typeFilter.length;j++) {
            if (cardType == typeFilter[j]) {
                sbcFilteredList.splice(i, 1, currentCard)
            }
        }
      }
  }

  removeItem(sbcFilteredList, null);

  if (ovrFilter.length != 0) { //OVERALL FILTER
    for (i = 0; i < sbcFilteredList.length; i++) {
        cardOvr = sbcCard[sbcFilteredList[i]].getElementsByClassName("dbcardbar")[0].children[0].textContent;
        if (cardOvr < ovrFilter[0] || cardOvr > ovrFilter[1]) {
          sbcFilteredList.splice(i, 1, null)
        }
      }
  }


  removeItem(sbcFilteredList, null);


  for (i=0;i<sbcCard.length;i++) {
      sbcCard[i].style.display = "none";
  }

  for (i=0;i<sbcFilteredList.length;i++) {
      sbcCard[sbcFilteredList[i]].style.display = "inline-block";
  }

}

function nationSearchFilter() {
    // Declare variables
    var input, filter, searchTable, searchRow, a, i, txtValue;
    input = document.getElementById('nationsbcsearchbar');
    filter = input.value.toUpperCase();
    searchTable = document.getElementById("nationselectctr");
    searchRow = searchTable.getElementsByClassName('nationfilteroption');
  
    // Loop through all searchRowst items, and hide those who don't match the search query
    for (i = 0; i < searchRow.length; i++) {
      a = searchRow[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        searchRow[i].style.display = "";
      } else {
        searchRow[i].style.display = "none";
      }
    }
  }

function lgSearchFilter() {
    // Declare variables
    var input, filter, searchTable, searchRow, a, i, txtValue;
    input = document.getElementById('lgsbcsearchbar');
    filter = input.value.toUpperCase();
    searchTable = document.getElementById("lgselectctr");
    searchRow = searchTable.getElementsByClassName('lgfilteroption');
  
    // Loop through all searchRowst items, and hide those who don't match the search query
    for (i = 0; i < searchRow.length; i++) {
      a = searchRow[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        searchRow[i].style.display = "";
      } else {
        searchRow[i].style.display = "none";
      }
    }
  }

  function clubSearchFilter() {
    // Declare variables
    var input, filter, searchTable, searchRow, a, i, txtValue;
    input = document.getElementById('clubsbcsearchbar');
    filter = input.value.toUpperCase();
    searchTable = document.getElementById("clubselect" + lgFilter);
    searchRow = searchTable.getElementsByClassName('clubfilteroption');
  
    // Loop through all searchRowst items, and hide those who don't match the search query
    for (i = 0; i < searchRow.length; i++) {
      a = searchRow[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        searchRow[i].style.display = "";
      } else {
        searchRow[i].style.display = "none";
      }
    }
  }

  function typeSearchFilter() {
    // Declare variables
    var input, filter, searchTable, searchRow, a, i, txtValue;
    input = document.getElementById('typesbcsearchbar');
    filter = input.value.toUpperCase();
    searchTable = document.getElementById("typeselectctr");
    searchRow = searchTable.getElementsByClassName('typefilteroption');
  
    // Loop through all searchRowst items, and hide those who don't match the search query
    for (i = 0; i < searchRow.length; i++) {
      a = searchRow[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        searchRow[i].style.display = "";
      } else {
        searchRow[i].style.display = "none";
      }
    }
  }


function sbcsquadhover(squad) {
    document.getElementsByClassName('sbcsquadbox')[squad].classList.add('sbcsquadbig')
    document.getElementsByClassName('sbcsquadbox')[squad].classList.remove('sbcsquadsmall')
  }
  
  function sbcsquadoff(squad) {
    document.getElementsByClassName('sbcsquadbox')[squad].classList.add('sbcsquadsmall')
    document.getElementsByClassName('sbcsquadbox')[squad].classList.remove('sbcsquadbig')
  }
  
  function showNewSquad() {
    document.getElementById('newsquadctr').style.display = "block";
    document.getElementById('sbcsbody').style.height = "35vw";
    document.getElementById('newsquadctr').style.overflowY = "";
  }
  
  function sbcback() {
    document.getElementById('newsquadctr').style.display = "none";
    document.getElementById('sbcsbody').style.height = "auto";
  }
  
  function sbccardback() {
    document.getElementById('sbccards').style.display = 'none';
  }

  function sbcsubmitback() {
    document.getElementById('sbcsubmitfinal').style.display = 'none';
  }

  function changePosColor() {
    for (i=0;i<17;i++) {
      if (!posFilter.includes(posList[i])) {
          document.getElementById(posList[i]+'option').classList.remove('rowspecial')
          document.getElementById(posList[i]+'option').classList.add('rowdark')
      } else {
          document.getElementById(posList[i]+'option').classList.remove('rowdark')
          document.getElementById(posList[i]+'option').classList.add('rowspecial')
      }
  }
}
  
  function showPosFilter() {
    if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        if (posFilter.length == 0) {
            document.getElementById('posselectctr').style.display = "block";
            posDown = true;
        } else {
            document.getElementById('poscircle').innerText = '';
            posFilter = [];
            changePosColor();
            filterSbcCards();
        }
    } else if (posDown==true&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        document.getElementById('posselectctr').style.display = "none";
        posDown = false;
    }
  }

  function showNationFilter() {
    if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        if (nationFilter==null || nationFilter=='') {
            document.getElementById('nationselectctr').style.display = "block";
            nationDown = true;
        } else {
            document.getElementById('circleflag').src = "/files/imgs/blank.png";
            nationFilter = '';
            filterSbcCards();
        }
    } else if (posDown==false&&nationDown==true&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        document.getElementById('nationselectctr').style.display = "none";
        nationDown = false;
    }
  }

  function showLeagueFilter() {
    if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        if (lgFilter==null || lgFilter=='') {
            document.getElementById('lgselectctr').style.display = "block";
            lgDown = true;
        } else {
            document.getElementById('circlelg').src = "/files/imgs/blank.png";
            document.getElementById('clubfilterctr').style.opacity = '.4';
            document.getElementById('clubcircle').classList.add('nohover');
            document.getElementById('circleclub').src = "/files/imgs/blank.png";
            document.getElementById('clubselect' + lgFilter).style.display = "none";
            clubFilter = '';
            lgFilter = '';
            filterSbcCards();
        }
    } else if (posDown==false&&nationDown==false&&lgDown==true&&clubDown==false&&typeDown==false&&ovrDown==false) {
        document.getElementById('lgselectctr').style.display = "none";
        lgDown = false;
    }
  }

  function showClubFilter() {
    if (lgFilter != '' && lgFilter != null) {
        if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
            if (clubFilter==null || clubFilter=='') {
                document.getElementById('clubselectctr').style.display = "block";
                document.getElementById('clubselect' + lgFilter).style.display = "block";
                clubDown = true;
            } else {
                document.getElementById('circleclub').src = "/files/imgs/blank.png";
                document.getElementById('clubselect' + lgFilter).style.display = "none";
                clubFilter = '';
                filterSbcCards();
            }
        } else if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==true&&typeDown==false&&ovrDown==false) {
            document.getElementById('clubselectctr').style.display = "none";
            clubDown = false;
        }
    }
  }

  function showOvrFilter() {
    if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        if (ovrFilter.length == 0) {
            document.getElementById('ovrselectctr').style.display = "block";
            ovrDown = true;
        } else {
            document.getElementById('ovrcircle').innerText = '';
            ovrFilter = [];
            filterSbcCards();
        }
    } else if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==true) {
        document.getElementById('ovrselectctr').style.display = "none";
        ovrDown = false;
    }
  }

  function showTypeFilter() {
    if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==false&&ovrDown==false) {
        if (typeFilter.length == 0) {
            document.getElementById('typeselectctr').style.display = "block";
            typeDown = true;
        } else {
            typeFilter = [];
            document.getElementById('circletype').src = "/files/imgs/blank.png"
            filterSbcCards();
        }
    } else if (posDown==false&&nationDown==false&&lgDown==false&&clubDown==false&&typeDown==true&&ovrDown==false) {
        document.getElementById('typeselectctr').style.display = "none";
        typeDown = false;
    }
  }

  function addPos(position) {
    if (posFilter.includes(position)) {
        posFilter.splice(posFilter.indexOf(position), 1);
    } else {
        posFilter.push(position)
    }
    changePosColor();
  }

  function sbcfilterpos() {
      document.getElementById('posselectctr').style.display = "none";
      posDown = false;
      filterSbcCards()
  }

  function filterNation(nat) {
      document.getElementById('nationselectctr').style.display = "none";
      document.getElementById('circleflag').src = "/files/imgs/flags/"+nat+".png";
      nationFilter = nat;
      nationDown = false;
      filterSbcCards();
  }

  function filterLeague(lg) {
    document.getElementById('lgselectctr').style.display = "none";
    document.getElementById('circlelg').src = "/files/imgs/clubs/"+lg+"/0.png";
    document.getElementById('lgsbcsearchbar').value = '';
    for (i=0;i<50;i++) {document.getElementById('lgselectctr').getElementsByClassName('lgfilteroption')[i].style.display = "block"}
    lgFilter = lg;
    lgDown = false;
    document.getElementById('clubfilterctr').style.opacity = '1';
    document.getElementById('clubcircle').classList.remove('nohover');
    filterSbcCards();
}

function filterClub(club) {
    document.getElementById('clubselectctr').style.display = "none";
    document.getElementById('circleclub').src = "/files/imgs/clubs/"+lgFilter+"/"+club+".png";
    document.getElementById('clubsbcsearchbar').value = '';
    for (i=0;i<document.getElementById('clubselect'+lgFilter).children.length;i++) {document.getElementById('clubselect'+lgFilter).children[i].style.display = ""}
    clubFilter = club;
    clubDown = false;
    filterSbcCards();
}

function filterSbcType(cards) {
    document.getElementById('typeselectctr').style.display = "none";
    if (cards.length > 20) {
        circletype = "allspecial";
    } else if (cards.length == 2 && cards[0] == "RG") {
        circletype = 'allgold';
    } else if (cards.length == 2 && cards[0] == "RS") {
        circletype = 'allsilver';
    } else if (cards[0] == "LTM1") {
        circletype = 'LTM';
    } else {circletype = cards[0]}

    document.getElementById('circletype').src = "/files/imgs/cards/"+circletype+".png";
    typeFilter = cards;
    typeDown = false;
    filterSbcCards();
}

function filterOvr() {
    document.getElementById('ovrselectctr').style.display = "none";
    //document.getElementById('circleflag').src = "/files/imgs/flags/"+nat+".png";
    if (document.getElementById('ovrmin').value == '' || document.getElementById('ovrmin').value < 64) {
        ovrFilter[0] = 64;
    } else {ovrFilter[0] = document.getElementById('ovrmin').value}
    if (document.getElementById('ovrmax').value == '' || document.getElementById('ovrmax').value > 99) {
        ovrFilter[1] = 99;
    } else {ovrFilter[1] = document.getElementById('ovrmax').value}

    document.getElementById('ovrcircle').innerText = ovrFilter[0] + '-' + ovrFilter[1];

    document.getElementById('ovrmin').value = '';
    document.getElementById('ovrmax').value = '';
    ovrDown = false;
    filterSbcCards();
}

function calculateRating() {
    var sum = 0;
    var cv = 0;
    for (i=0;i<11;i++) {
        sum += sbc11[i].ovr;
    }
    sumAvg = sum/11;
    for (i=0;i<11;i++) {
        if (sbc11[i].ovr > sumAvg) {
            cv += sbc11[i].ovr-sumAvg;
        }
    }
    totalrating = sum + cv;
    finalrating = Math.floor(totalrating/11);
    if (finalrating <2) {
        document.getElementById('ratingstars').innerHTML = "";
    } else if (finalrating >= 2 && finalrating <= 69) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star-half'></i>";
    } else if (finalrating >= 70 && finalrating <= 71) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i>";
    } else if (finalrating >= 72 && finalrating <= 73) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star-half'></i>";
    } else if (finalrating >= 74 && finalrating <= 75) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i>";
    } else if (finalrating >= 76 && finalrating <= 77) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i>";
    } else if (finalrating >= 78 && finalrating <= 79) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>";
    } else if (finalrating >= 80 && finalrating <= 81) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i>";
    } else if (finalrating >= 82 && finalrating <= 83) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>";
    } else if (finalrating >= 84 && finalrating <= 86) {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half'></i>";
    } else {
        document.getElementById('ratingstars').innerHTML = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>";
    }

    document.getElementById('ratingnum').innerText = finalrating;
    document.getElementById('sbcratingform').value = finalrating;
}

function calculateCost() {
    totalCost = 0;
    for (i=0;i<11;i++) {
        var cost = 0;
        var OVR = sbc11[i].ovr;
        var TYP = sbc11[i].type;
        if (TYP == '' || TYP == null) {cost=0}
        else if (TYP == 'NRG' || TYP == 'RG' && OVR <= 87) {cost=1}
        else if (sbc11[i].id == 0 && sbc11[i].id == 1) {cost=20}
        else if (TYP == 'RG' && OVR > 87) {cost=4}
        else if (TYP == 'IFG' && OVR <= 87 || TYP == 'OTW' && OVR <=87 || TYP=='POTM' && OVR <=85 || TYP=='RB') {cost=3}
        else if (TYP == 'IFG' && OVR>87 || TYP == 'OTW' && OVR>87 || TYP == 'POTM' && OVR>86 || TYP == 'Icon' && OVR<=88) {cost=5}
        else if (TYP == 'Icon' && OVR>88 && OVR<=92 || TYP == 'Hero') {cost=8}
        else if (TYP == 'MFI' || TYP == 'FI') {cost=15}
        else if (TYP == 'Icon' && OVR>92 || TYP == 'MOM') {cost=12}
        else if (TYP == 'SUD' || TYP == 'LIB' || TYP == 'RS' || TYP == 'NRS') {cost=2}
        else if (OVR <=74 && TYP != 'RS' && TYP != 'NRS' && TYP != 'RB') {cost=15}
        else if (TYP == 'TOTY') {cost=35} 
        else {
            if (OVR < 90) {cost=5}
            else {cost=8}
        }
        totalCost += cost;
    }
    document.getElementById('sbccost').value = totalCost
}

function addSbcCard(name, type, ovr, nation, pos, lg, club, id, color, fullName, img) {
    editCard = document.getElementById('card' + editCardNum);
    editCard.style.color = color;
    editCard.style.backgroundImage = "url('/files/imgs/cards/" + type + ".png')";
    editCard.children[0].classList.add('name')
    editCard.children[0].innerText = name;
    editCard.children[1].children[0].innerText = ovr;
    editCard.children[1].children[1].innerText = pos;
    editCard.children[1].children[2].children[0].src = "/files/imgs/flags/" + nation + ".png";
    editCard.children[1].children[3].children[0].src = "/files/imgs/clubs/" + + lg + '/' + club + ".png";
    editCard.children[2].removeAttribute('class');
    editCard.children[2].classList.add('sbccard' + img);
    editCard.children[2].src = "/files/imgs/faces/" + id + ".png";
    
    document.getElementById('sbccards').style.display = "none";
    sbc11[editCardNum-1].name = name;
    sbc11[editCardNum-1].type = type;
    sbc11[editCardNum-1].ovr = parseInt(ovr);
    sbc11[editCardNum-1].nation = nation;
    sbc11[editCardNum-1].pos = pos;
    sbc11[editCardNum-1].lg = lg;
    sbc11[editCardNum-1].club = club;
    sbc11[editCardNum-1].id = id;
    sbc11[editCardNum-1].color = color;
    sbc11[editCardNum-1].fullName = fullName;
    sbc11[editCardNum-1].img = img;

    calculateRating()
    calculateChem();
    calculateCost();

    document.getElementById('sbccard' + editCardNum).value = id;
}

function showsbccards(card, pos) {
    console.log(swap[0])
    if (sbc11[card-1].ovr == 0 && swap[0] == false) {
        document.getElementById('sbccards').style.display = 'block';
        if (pos == 'GK') {posFilter = ['GK'];
        } else if (pos == 'LB' || pos == 'LWB') {posFilter = ['LB', 'LWB'];
        } else if (pos == 'CB') {posFilter = ['CB'];
        } else if (pos == 'RB' || pos == 'RWB') {posFilter = ['RB', 'RWB'];
        } else if (pos == 'CDM') {posFilter = ['CDM', 'CM'];
        } else if (pos == 'CM') {posFilter = ['CDM', 'CM', 'CAM'];
        } else if (pos == 'CAM') {posFilter = ['CM', 'CAM', 'CF'];
        } else if (pos == 'LM') {posFilter = ['LM', 'LW'];
        } else if (pos == 'RM') {posFilter = ['RM', 'RW'];
        } else if (pos == 'LW') {posFilter = ['LM', 'LW', 'LF'];
        } else if (pos == 'RW') {posFilter = ['RM', 'RW', 'RF'];
        } else if (pos == 'CF') {posFilter = ['CAM', 'CF', 'ST'];
        } else if (pos == 'LF') {posFilter = ['LW', 'LF'];
        } else if (pos == 'RF') {posFilter = ['RW', 'RF'];
        } else if (pos == 'ST') {posFilter = ['CF', 'ST'];
        }

        editCardNum = card;
        
        changePosColor();
        filterSbcCards();
    } else if (swap[0] == false ) {
        swap = [true, sbc11[card-1]]
        document.getElementById('card' + (card)).classList.add('swapanim');
        swapNums = [card,0]
        document.getElementById('sbcdeletecardbtn').classList.add('rmcard' + card);
        document.getElementById('sbcdeletecardbtn').style.display = 'block';
    } else {
        swap.push(sbc11[card-1])
        swapNums[1] = card

        editCard = document.getElementById('card' + swapNums[1]);
        editCard.style.color = swap[1].color;
        editCard.style.backgroundImage = "url('/files/imgs/cards/" + swap[1].type + ".png')";
        editCard.children[0].classList.add('name')
        editCard.children[0].innerText = swap[1].name;
        editCard.children[1].children[0].innerText = swap[1].ovr;
        editCard.children[1].children[1].innerText = swap[1].pos;
        editCard.children[1].children[2].children[0].src = "/files/imgs/flags/" + swap[1].nation + ".png";
        editCard.children[1].children[3].children[0].src = "/files/imgs/clubs/" + + swap[1].lg + '/' + swap[1].club + ".png";
        editCard.children[2].removeAttribute('class');
        editCard.children[2].classList.add('sbccard' + swap[1].img);
        editCard.children[2].src = "/files/imgs/faces/" + swap[1].id + ".png";


        if (swap[2].ovr != 0) {
            editCard = document.getElementById('card' + swapNums[0]);
            editCard.style.color = swap[2].color;
            editCard.style.backgroundImage = "url('/files/imgs/cards/" + swap[2].type + ".png')";
            editCard.children[0].classList.add('name')
            editCard.children[0].innerText = swap[2].name;
            editCard.children[1].children[0].innerText = swap[2].ovr;
            editCard.children[1].children[1].innerText = swap[2].pos;
            editCard.children[1].children[2].children[0].src = "/files/imgs/flags/" + swap[2].nation + ".png";
            editCard.children[1].children[3].children[0].src = "/files/imgs/clubs/" + + swap[2].lg + '/' + swap[2].club + ".png";
            editCard.children[2].removeAttribute('class');
            editCard.children[2].classList.add('sbccard' + swap[2].img);
            editCard.children[2].src = "/files/imgs/faces/" + swap[2].id + ".png";
        } else {
            editCard = document.getElementById('card' + swapNums[0]);
            editCard.style.color = '';
            editCard.style.backgroundImage = "url('/files/imgs/blankcard.png')";
            editCard.children[0].classList.add('name')
            editCard.children[0].innerText = '';
            editCard.children[1].children[0].innerText = '';
            editCard.children[1].children[1].innerText = '';
            editCard.children[1].children[2].children[0].src = "/files/imgs/blank.png";
            editCard.children[1].children[3].children[0].src = "/files/imgs/blank.png";
            editCard.children[2].removeAttribute('class');
            editCard.children[2].src = "/files/imgs/blank.png";
        }

        sbc11[swapNums[1]-1] = swap[1];
        sbc11[swapNums[0]-1] = swap[2];
        document.getElementById('sbccard' + swapNums[0]).value = sbc11[swapNums[0]-1].id;
        document.getElementById('sbccard' + swapNums[1]).value = sbc11[swapNums[1]-1].id;

        calculateRating()
        calculateChem();
        calculateCost();

        document.getElementById('sbcdeletecardbtn').style.display = 'none';
        document.getElementById('sbcdeletecardbtn').removeAttribute('class');
        document.getElementById('card' + swapNums[0]).classList.remove('swapanim');

        swap[0] = false;
        console.log(sbc11)
    }
  }

function removeSbcCard() {
    sbc11[swapNums[0]-1] = {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''};
    
    editCard = document.getElementById('card' + swapNums[0]);
    editCard.style.color = '';
    editCard.style.backgroundImage = "url('/files/imgs/blankcard.png')";
    editCard.children[0].classList.add('name')
    editCard.children[0].innerText = '';
    editCard.children[1].children[0].innerText = '';
    editCard.children[1].children[1].innerText = '';
    editCard.children[1].children[2].children[0].src = "/files/imgs/blank.png";
    editCard.children[1].children[3].children[0].src = "/files/imgs/blank.png";
    editCard.children[2].removeAttribute('class');
    editCard.children[2].src = "/files/imgs/blank.png";

    calculateRating()
    calculateChem();
    calculateCost();

    document.getElementById('sbcdeletecardbtn').removeAttribute('class');
    document.getElementById('sbcdeletecardbtn').style.display = 'none';
    document.getElementById('card' + swapNums[0]).classList.remove('swapanim');
    document.getElementById('sbccard' + swapNums[0]).value = '';

    swap[0] = false;

}

function clearSquad() {
    var clearConf = confirm('Are you sure you want to clear your current squad?')
    if (clearConf == true) {
        for (i=0;i<11;i++) {
            sbc11[i] = {name:'', type:'', ovr:0, nation:'', pos:'', lg:'', club:'', id:'', color:'', fullName:'', img:''};
            document.getElementById('sbccard' + (i+1)).value = '';
            editCard = document.getElementById('card' + (i+1));
            editCard.style.color = '';
            editCard.style.backgroundImage = "url('/files/imgs/blankcard.png')";
            editCard.children[0].classList.add('name')
            editCard.children[0].innerText = '';
            editCard.children[1].children[0].innerText = '';
            editCard.children[1].children[1].innerText = '';
            editCard.children[1].children[2].children[0].src = "/files/imgs/blank.png";
            editCard.children[1].children[3].children[0].src = "/files/imgs/blank.png";
            editCard.children[2].removeAttribute('class');
            editCard.children[2].src = "/files/imgs/blank.png";
        }
        calculateRating()
        calculateChem();
        calculateCost();
    }
}

function colorChem() {
    for (i=0;i<11;i++) {
        document.getElementById('pos' + (i+1)).removeAttribute('class')
        document.getElementById('pos' + (i+1)).classList.add('sbcpos')
        document.getElementById('pos' + (i+1)).classList.add('chem' + posChem[i])
    }
    for (i=0;i<linkChem.length;i++) {
        document.getElementById('link' + (i+1)).removeAttribute('class');
        document.getElementById('link' + (i+1)).classList.add('sbclink')
        document.getElementById('link' + (i+1)).classList.add('link' + linkChem[i])
    }
}

function getLinks() {
    for (i=0;i<linkCards.length;i++) {
        var localLinks = 0;
        var main = sbc11[linkCards[i][0]-1];
        var sec = sbc11[linkCards[i][1]-1];
        if (main.ovr != 0 && sec.ovr != 0) {
            if (main.nation == sec.nation) {
                localLinks += 1;
            }
            if (main.lg == sec.lg || main.lg == 6 || sec.lg == 6) {
                localLinks += 1;
                if (main.club == sec.club || main.club == 0 && sec.lg != 6 || sec.club == 0 && main.lg != 6) {
                    localLinks += 1;
                }
            }
        }
        linkChem[i] = localLinks;
    }
}

function calcPosChem() {
    posChem = [0,0,0,0,0,0,0,0,0,0,0]
    for (i=0;i<11;i++) {
        if (sbc11[i].pos == positionMax[i]) {
            posChem[i] = 3;
        } else {
            for (j=0;j<positionStrong[i].length;j++) {
                if (sbc11[i].pos == positionStrong[i][j]) {
                    posChem[i] = 2;
                }
            }
            if (posChem[i] == 0) {
                for (j=0;j<positionWeak.length;j++) {
                    if (sbc11[i].pos == positionWeak[i][j]) {
                        posChem[i] = 1;
                    }
                }
            }
        }
    }
}

function getRaw(main,comps) {
    recLinks[main] = 0;
    if (sbc11[main].ovr !=0) {
        for (i=0;i<comps.length;i++) {
            recLinks[main] += linkChem[comps[i]]
        }
    }
}

function finalChem() {
    totalChemistry = 0;
    for (i=0;i<recLinks.length;i++) {
        if (sbc11[i].ovr == 0) {
            recLinks[i] = 0;
        }
        divChem[i] = recLinks[i]/totLinks[i];
        if (divChem[i] <= 0.3) {
            cardLinkChem[i] = 0;
        } else if (divChem[i] <= 0.95) {
            cardLinkChem[i] = 1;
        } else if (divChem[i] <= 1.65) {
            cardLinkChem[i] = 2
        } else {
            cardLinkChem[i] = 3
        }

        if (sbc11[i].ovr == 0) {
            finalChem[i] = 0;
        } else {
            if (posChem[i] == 0) {
                if (cardLinkChem[i] == 0) {finalChem[i] = 1}
                else if (cardLinkChem[i] == 1) {finalChem[i] = 2}
                else if (cardLinkChem[i] == 2) {finalChem[i] = 3}
                else if (cardLinkChem[i] == 3) {finalChem[i] = 3}
            } else if (posChem[i] == 1) {
                if (cardLinkChem[i] == 0) {finalChem[i] = 2}
                else if (cardLinkChem[i] == 1) {finalChem[i] = 4}
                else if (cardLinkChem[i] == 2) {finalChem[i] = 6}
                else if (cardLinkChem[i] == 3) {finalChem[i] = 6}
            } else if (posChem[i] == 2) {
                if (cardLinkChem[i] == 0) {finalChem[i] = 3}
                else if (cardLinkChem[i] == 1) {finalChem[i] = 6}
                else if (cardLinkChem[i] == 2) {finalChem[i] = 9}
                else if (cardLinkChem[i] == 3) {finalChem[i] = 10}
            } else {
                if (cardLinkChem[i] == 0) {finalChem[i] = 4}
                else if (cardLinkChem[i] == 1) {finalChem[i] = 7}
                else if (cardLinkChem[i] == 2) {finalChem[i] = 10}
                else if (cardLinkChem[i] == 3) {finalChem[i] = 10}
            }
        }

        document.getElementById('poschem' + (i+1)).innerText = finalChem[i];

        totalChemistry += finalChem[i]

    }

    if (totalChemistry > 100) {
        totalChemistry = 100;
    }
    
    document.getElementById('chemnum').innerText = totalChemistry;
    document.getElementById('sbcchemform').value = totalChemistry;
    document.getElementById('chembar').style.width = totalChemistry + '%';

}

function checkSubmit() {
    if (reqs.includes(false) || reqs.length == 0) {
        alert('You are missing requirements!')
    } else {
        document.getElementById('sbcsubmitfinal').style.display = "block";
    }
}

function showSquad(sqd) {
    document.getElementById('newsquadctr').style.display = 'block';
    var minicard = document.getElementById('sbcsbody').getElementsByClassName('squadrow')[sqd].children[3].getElementsByClassName('minisquadcard');
    /*editCardNum = 1;
    addSbcCard(minicard[0].children[1].textContent, minicard[0].children[2].textContent, minicard[0].children[3].textContent, minicard[0].children[4].textContent, minicard[0].children[5].textContent, minicard[0].children[6].textContent, minicard[0].children[7].textContent, minicard[0].children[8].textContent, minicard[0].children[9].textContent, minicard[0].children[10].textContent, minicard[0].children[11].textContent)
    editCardNum = 2;
    addSbcCard(minicard[1].children[1].textContent, minicard[1].children[2].textContent, minicard[1].children[3].textContent, minicard[1].children[4].textContent, minicard[1].children[5].textContent, minicard[1].children[6].textContent, minicard[1].children[7].textContent, minicard[1].children[8].textContent, minicard[1].children[9].textContent, minicard[1].children[10].textContent, minicard[1].children[11].textContent)*/
    for (p=0;p<11;p++) {
        editCardNum = p+1;
        addSbcCard(minicard[p].children[1].textContent, minicard[p].children[2].textContent, minicard[p].children[3].textContent, minicard[p].children[4].textContent, minicard[p].children[5].textContent, minicard[p].children[6].textContent, minicard[p].children[7].textContent, minicard[p].children[8].textContent, minicard[p].children[9].textContent, minicard[p].children[10].textContent, minicard[p].children[11].textContent)
    }
}