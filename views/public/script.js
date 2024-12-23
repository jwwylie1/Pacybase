

let offerBox;

let filterSlot;

let coins;

var tradeOffers = [[],[]];
var tradeFilter = [];
var deleteFilter = [];

var drop = false;

var searchedName = '';

let filterType = '';
let filteredList = [];

function dropMenu() {
  if (drop == true) {
    document.getElementById('headerCtr').classList.add('dropUp');
    document.getElementById('headerCtr').classList.remove('dropDown');
    drop = false;
  } else {
    document.getElementById('headerCtr').classList.remove('dropUp');
    document.getElementById('headerCtr').classList.add('dropDown');
    drop = true;
  }
}

function searchFilter() {

  
  // Declare variables
  var input, filter, searchTable, searchRow, a, i, txtValue;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  searchTable = document.getElementById("searchTable");
  searchRow = searchTable.getElementsByClassName('searchRow');

  // Loop through all searchRowst items, and hide those who don't match the search query
  for (i = 0; i < searchRow.length; i++) {
    a = searchRow[i].getElementsByClassName("searchName")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchRow[i].style.display = "";
    } else {
      searchRow[i].style.display = "none";
    }
  }

  if (input.value == "") {
    searchTable.style.display = 'none';
  } else {
    searchTable.style.display = 'block';
  }
}

function packFilter() {

  
  // Declare variables
  var input, filter, searchTable, searchRow, a, i, txtValue;
  input = document.getElementById('packBar');
  filter = input.value.toUpperCase();
  searchTable = document.getElementById("packTable");
  searchRow = searchTable.getElementsByClassName('searchRow');

  // Loop through all searchRowst items, and hide those who don't match the search query
  for (i = 0; i < searchRow.length; i++) {
    a = searchRow[i].getElementsByClassName("displayName")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchRow[i].style.display = "";
    } else {
      searchRow[i].style.display = "none";
    }
  }

  if (input.value == "") {
    searchTable.style.display = 'none';
  } else {
    searchTable.style.display = 'inline-block';
  }
}

function dbSearchFilter() {
  // Declare variables
  var input, filter, searchTable, searchRow, a, i, txtValue;
  input = document.getElementById('dbsearchbar');
  filter = input.value.toUpperCase();
  searchTable = document.getElementById("dbctr");
  searchRow = searchTable.getElementsByClassName('dbcard');

  // Loop through all searchRowst items, and hide those who don't match the search query
  for (i = 0; i < searchRow.length; i++) {
    a = searchRow[i].getElementsByClassName("dbfullName")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchRow[i].style.display = "";
    } else {
      searchRow[i].style.display = "none";
    }
  }
}

function sbcSearchFilter() {
  // Declare variables
  var input, filter, searchTable, searchRow, a, i, txtValue;
  input = document.getElementById('sbcsearchbar');
  filter = input.value.toUpperCase();
  searchTable = document.getElementById("sbccards");
  searchRow = searchTable.getElementsByClassName('dbcard');

  // Loop through all searchRowst items, and hide those who don't match the search query
  for (i = 0; i < searchRow.length; i++) {
    a = searchRow[i].getElementsByClassName("dbfullName")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchRow[i].style.display = "";
    } else {
      searchRow[i].style.display = "none";
    }
  }
}



function showOfferType(box) {
  if (document.getElementById('offerType').style.display == 'block') {
    document.getElementById('offerType').style.display = 'none';
    document.getElementById('removeItem').style.display = "none";
    offerBox = '';
  } else {
    document.getElementById('offerType').style.display = 'block';
    document.getElementById('offerType').scrollIntoView();
    offerBox = box;
    if (offerBox[0] == 'h') {
      if (tradeOffers[0][parseInt(offerBox.slice(3,100))-1] != undefined) {
        document.getElementById('removeItem').style.display = "block";
      }
    } else {
      if (tradeOffers[1][parseInt(offerBox.slice(4,100))-1] != undefined) {
        document.getElementById('removeItem').style.display = "block";
      }
    }
  }
}

function chooseItem(type) {
  document.getElementById('offerType').style.display = 'none';
  document.getElementById('removeItem').style.display = "none";
  if (type=='card') {
    document.getElementById('searchBar').style.display = "block";
    document.getElementById('searchTable').style.display = "block";
    document.getElementById('searchBar').scrollIntoView();
  } else if (type=='coins') {
    document.getElementById('coinsAmount').style.display = "block";
    document.getElementById('coinsAmount').scrollIntoView();
  } else {
    document.getElementById('packnum').style.display = "inline-block";
    document.getElementById('packBar').style.display = "inline-block";
    document.getElementById('packTable').style.display = "inline-block";
    document.getElementById('packSelect').scrollIntoView();
  }
}

function fillPostBox(name, type, ovr, nation, pos, lg, club, id, color, img) {
  if (false/*type =="TOTY"|| type=="PSBC" || id==1734 || id==1506 || id==1503 || id==1497 || id==1500 || id==1408 || id==1296 || id==1297*/) {
    alert("That card is untradable.")
  } else {
    document.getElementById(offerBox).children[0].style.display = "none"; 
    document.getElementById('searchBar').value = '';
    searchFilter();
    cardLocal = document.getElementById(offerBox).children[1];
    if (name != 'COINS' && name != 'PACK1' && name != 'PACK2') {
      document.getElementById(offerBox).style.color = color;
      cardLocal.style.backgroundImage = "url('/files/imgs/cards/" + type + ".webp')";
      cardLocal.children[0].classList.remove('coinsNameT')
      cardLocal.children[0].classList.add('name')
      cardLocal.children[0].innerText = name;
      cardLocal.children[1].children[0].innerText = ovr;
      cardLocal.children[1].children[1].innerText = pos;
      cardLocal.children[1].children[2].children[0].src = "/files/imgs/flags/" + nation + ".png";
      cardLocal.children[1].children[3].children[0].src = "/files/imgs/clubs/" + + lg + '/' + club + ".png";
      cardLocal.children[2].removeAttribute('class');
      cardLocal.children[2].classList.add('card' + img);
      cardLocal.children[2].src = "/files/imgs/faces/" + id + ".webp";

      document.getElementById('searchBar').style.display = "none";
      document.getElementById('searchTable').style.display = "none";
      document.getElementById(offerBox + 'form').value = id;
    } else if (name == 'COINS') {
      
      coins = document.getElementById('coinsNumberInput').value; //get coin value

      mult = 10**(coins.length-3) //round numbers
      coins = Math.round(coins/mult)*mult

      if (coins < 10000) { //range coins 10k-500m
        coins = 10000
      } else if (coins > 500000000) {
        coins = 500000000
      }

      if (coins/1000 < 1000) {
        coinsShort = (coins/1000).toString() + 'K';
      } else {
        coinsShort = (coins/1000000).toString() + 'M';
      }

      document.getElementById(offerBox).style.color = '#fdfdfa';
      cardLocal.style.backgroundImage = "";
      cardLocal.children[1].children[0].innerText = '';
      cardLocal.children[1].children[1].innerText = '';
      cardLocal.children[1].children[2].children[0].src = "/files/imgs/blank.png";
      cardLocal.children[1].children[3].children[0].src = "/files/imgs/blank.png";
      cardLocal.children[2].src = "/files/imgs/blank.png";

      cardLocal.children[0].innerHTML = '<i class="fas fa-coins"></i> ' + coinsShort;
      cardLocal.children[0].classList.remove('name')
      cardLocal.children[0].classList.add('coinsNameT')

      document.getElementById('coinsAmount').style.display = 'none';
      document.getElementById('coinsNumberInput').value = '';
      document.getElementById(offerBox + 'form').value = Math.ceil(coins);
    } else if (name == 'PACK1') {
      document.getElementById(offerBox).style.color = '#fdfdfa';
      cardLocal.style.backgroundImage = "";
      cardLocal.children[1].children[0].innerText = '';
      cardLocal.children[1].children[1].innerText = '';
      cardLocal.children[1].children[2].children[0].src = "/files/imgs/blank.png";
      cardLocal.children[1].children[3].children[0].src = "/files/imgs/blank.png";
      cardLocal.children[2].src = "/files/imgs/blank.png";

      cardLocal.children[0].innerHTML = type;
      cardLocal.children[0].classList.remove('name')
      cardLocal.children[0].classList.add('packNameT')

      document.getElementById('packBar').style.display = "none";
      document.getElementById('packTable').style.display = "none";
    }
    
    if (offerBox[0] == 'h') {
      if (offerBox[3] == '4' && document.getElementById('newPostBox').classList[0] != 'rows3new') {
        document.getElementById('newPostBox').classList.remove('rows3new');
        document.getElementById('haveSide').classList.remove('rows3hw');
        document.getElementById('wantSide').classList.remove('rows3hw');
        document.getElementById('newPostBox').classList.add('rows2new');
        document.getElementById('haveSide').classList.add('rows2hw');
        document.getElementById('wantSide').classList.add('rows2hw');
        console.log(document.getElementById('newPostBox').classList[0])
      } else if (offerBox[3] == '8') {
        document.getElementById('newPostBox').classList.remove('rows2new');
        document.getElementById('haveSide').classList.remove('rows2hw');
        document.getElementById('wantSide').classList.remove('rows2hw');
        document.getElementById('newPostBox').classList.add('rows3new');
        document.getElementById('haveSide').classList.add('rows3hw');
        document.getElementById('wantSide').classList.add('rows3hw');
      }
      if (offerBox.slice(3,10) != 12) {
        document.getElementById('has' + parseInt(parseInt(offerBox.slice(3,100))+1)).style.display = "inline-block";
      }
      tradeOffers[0].push(parseInt(id));
    } else {
      if (offerBox[4] == '4' && document.getElementById('newPostBox').classList[0] != 'rows3new') {
        document.getElementById('newPostBox').classList.remove('rows3new');
        document.getElementById('haveSide').classList.remove('rows3hw');
        document.getElementById('wantSide').classList.remove('rows3hw');
        document.getElementById('newPostBox').classList.add('rows2new');
        document.getElementById('haveSide').classList.add('rows2hw');
        document.getElementById('wantSide').classList.add('rows2hw');
      } else if (offerBox[4] == '8') {
        document.getElementById('newPostBox').classList.remove('rows2new');
        document.getElementById('haveSide').classList.remove('rows2hw');
        document.getElementById('wantSide').classList.remove('rows2hw');
        document.getElementById('newPostBox').classList.add('rows3new');
        document.getElementById('haveSide').classList.add('rows3hw');
        document.getElementById('wantSide').classList.add('rows3hw');
      }
      if (offerBox.slice(4,10) != 12) {
        document.getElementById('want' + parseInt(parseInt(offerBox.slice(4,100))+1)).style.display = "inline-block";
      }
      tradeOffers[1].push(parseInt(id))
    }
  }
}


function fillTradeFilter(name, type, ovr, nation, pos, lg, club, id, color, img) {
  if (tradeFilter.length <3) {
    if (tradeFilter.length == 0) {
      filterSlot = 'filtercard1';
      document.getElementById('resetMsg').style.display = "none";
    } else if (tradeFilter.length == 1) {
      filterSlot = 'filtercard2';
    } else if (tradeFilter.length == 2) {
      filterSlot = 'filtercard3';
    }

    document.getElementById(filterSlot).style.color = color;
    cardLocal = document.getElementById(filterSlot);
    cardLocal.style.backgroundImage = "url('/files/imgs/cards/" + type + ".webp')";
    cardLocal.children[0].innerText = name;
    cardLocal.children[1].children[0].innerText = ovr;
    cardLocal.children[1].children[1].innerText = pos;
    cardLocal.children[1].children[2].children[0].src = "/files/imgs/flags/" + nation + ".png";
    cardLocal.children[1].children[3].children[0].src = "/files/imgs/clubs/" + lg + '/' + club + ".png";
    cardLocal.children[2].classList.add('filtercard' + img);
    cardLocal.children[2].src = "/files/imgs/faces/" + id + ".webp";
    cardLocal.children[3].innerText = id;

    document.getElementById('searchBar').value = "";
    document.getElementById('searchTable').style.display = "none";
    document.getElementById(filterSlot).classList.add('fadefilter'); //fade card in

    tradeFilter[parseInt(filterSlot.slice(-1))-1] = id;
  } else {
    alert('Only 3 Cards Allowed!')
  }
}

function checkFieldsNew() {
  if (document.getElementById('has1form').value == '' || document.getElementById('want1form').value == '' || document.getElementById('postUsername').value == '') {
    alert('Make sure you have entered a Username, at least 1 item on each side, and your device type.')
  } else {
    document.getElementById('pinctr').style.display = "block";
  }
}

function promptDelete(objectid) {
  document.getElementById('deletectr').style.display = "block";
  document.body.style.overflowY = "hidden";
  document.getElementById('postobjectid').value = objectid;
}

function ridsubmit() {
  if (document.getElementById('postpin').value.length == 4) {
    document.getElementById('pinbtn').style.display = "none";
  }
}

function filtertype(type) {
  if (type == "has") {
    document.getElementById('hastype').classList.remove('filtertype');
    document.getElementById('hastype').classList.add('filtertypeselect');
    document.getElementById('wanttype').classList.remove('filtertypeselect');
    document.getElementById('wanttype').classList.add('filtertype');
    filterType = 'has';
  } else if (type == "want") {
    document.getElementById('wanttype').classList.remove('filtertype');
    document.getElementById('wanttype').classList.add('filtertypeselect');
    document.getElementById('hastype').classList.remove('filtertypeselect');
    document.getElementById('hastype').classList.add('filtertype');
    filterType = 'want';
  }
}

function removeItem() {
  if (offerBox.slice(0,1) == 'h') {
    boxNum = parseInt(offerBox.slice(3,100));
    tradeOffers[0].splice(boxNum-1, 1);
    for (i=boxNum;i<=12;i++) {
      cardLocal = document.getElementById('has' + (i)).children[1];
      if (i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText != '' && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 1 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 2 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 3 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 4 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 5 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 6 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 7 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 8 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != 9 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) != '0') {
        document.getElementById('has' + i).style.color = document.getElementById('has' + (i+1)).style.color
        cardLocal.style.backgroundImage = document.getElementById('has' + (i+1)).children[1].style.backgroundImage;
        cardLocal.children[0].classList.remove('coinsNameT')
        cardLocal.children[0].classList.add('name')
        cardLocal.children[0].innerText = document.getElementById('has' + (i+1)).children[1].children[0].innerText;
        cardLocal.children[1].children[0].innerText = document.getElementById('has' + (i+1)).children[1].children[1].children[0].innerText;
        cardLocal.children[1].children[1].innerText = document.getElementById('has' + (i+1)).children[1].children[1].children[1].innerText;
        cardLocal.children[1].children[2].children[0].src = document.getElementById('has' + (i+1)).children[1].children[1].children[2].children[0].src;
        cardLocal.children[1].children[3].children[0].src = document.getElementById('has' + (i+1)).children[1].children[1].children[3].children[0].src;
        cardLocal.children[2].src = document.getElementById('has' + (i+1)).children[1].children[2].src;
      } else if (i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 1 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 2 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 3 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 4 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 5 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 6 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 7 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 8 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == 9 || i!=12 && document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2) == '0') {
        document.getElementById('has' + i).style.color = document.getElementById('has' + (i+1)).style.color
        cardLocal.style.backgroundImage = '';
        cardLocal.children[0].classList.remove('name')
        cardLocal.children[0].classList.add('coinsNameT')
        cardLocal.children[0].innerHTML = document.getElementById('has' + (i+1)).children[1].children[0].innerHTML;
        cardLocal.children[1].children[0].innerText = '';
        cardLocal.children[1].children[1].innerText = '';
        cardLocal.children[1].children[2].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[1].children[3].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[2].src = '/files/imgs/blank.png';
        //console.log(i + document.getElementById('has' + (i+1)).children[1].children[0].innerText.slice(1,2))
      } else {
        
        if (i!=12 && document.getElementById('has' + i).children[1].children[0].innerText != '') {
          //check if last item put in
          document.getElementById('has' + (i+1)).style.display = '';
        }
        cardLocal.style.backgroundImage = '';
        cardLocal.children[0].innerText = '';
        cardLocal.children[1].children[0].innerText = '';
        cardLocal.children[1].children[1].innerText = '';
        cardLocal.children[1].children[2].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[1].children[3].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[2].src = '/files/imgs/blank.png';
        document.getElementById('has' + (i)).children[0].style.display = '';
      }
      if (i!=12) {
        document.getElementById('has' + i + 'form').value = document.getElementById('has' + (i+1) + 'form').value
      } else {document.getElementById('has' + i + 'form').value = ''}
      }
  } else {
    boxNum = parseInt(offerBox.slice(4,100));
    tradeOffers[1].splice(boxNum-1, 1);
    for (i=boxNum;i<=12;i++) {
      cardLocal = document.getElementById('want' + (i)).children[1];
      if (i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText != '' && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 1 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 2 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 3 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 4 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 5 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 6 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 7 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 8 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != 9 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) != '0') {
        document.getElementById('want' + i).style.color = document.getElementById('want' + (i+1)).style.color
        cardLocal.style.backgroundImage = document.getElementById('want' + (i+1)).children[1].style.backgroundImage;
        cardLocal.children[0].classList.remove('coinsNameT')
        cardLocal.children[0].classList.add('name')
        cardLocal.children[0].innerText = document.getElementById('want' + (i+1)).children[1].children[0].innerText;
        cardLocal.children[1].children[0].innerText = document.getElementById('want' + (i+1)).children[1].children[1].children[0].innerText;
        cardLocal.children[1].children[1].innerText = document.getElementById('want' + (i+1)).children[1].children[1].children[1].innerText;
        cardLocal.children[1].children[2].children[0].src = document.getElementById('want' + (i+1)).children[1].children[1].children[2].children[0].src;
        cardLocal.children[1].children[3].children[0].src = document.getElementById('want' + (i+1)).children[1].children[1].children[3].children[0].src;
        cardLocal.children[2].src = document.getElementById('want' + (i+1)).children[1].children[2].src;
      } else if (i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 1 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 2 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 3 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 4 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 5 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 6 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 7 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 8 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == 9 || i!=12 && document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2) == '0') {
        document.getElementById('want' + i).style.color = document.getElementById('want' + (i+1)).style.color
        cardLocal.style.backgroundImage = '';
        cardLocal.children[0].classList.remove('name')
        cardLocal.children[0].classList.add('coinsNameT')
        cardLocal.children[0].innerHTML = document.getElementById('want' + (i+1)).children[1].children[0].innerHTML;
        cardLocal.children[1].children[0].innerText = '';
        cardLocal.children[1].children[1].innerText = '';
        cardLocal.children[1].children[2].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[1].children[3].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[2].src = '/files/imgs/blank.png';
        //console.log(i + document.getElementById('want' + (i+1)).children[1].children[0].innerText.slice(1,2))
      } else {
        
        if (i!=12 && document.getElementById('want' + i).children[1].children[0].innerText != '') {
          //check if last item put in
          document.getElementById('want' + (i+1)).style.display = '';
        }
        cardLocal.style.backgroundImage = '';
        cardLocal.children[0].innerText = '';
        cardLocal.children[1].children[0].innerText = '';
        cardLocal.children[1].children[1].innerText = '';
        cardLocal.children[1].children[2].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[1].children[3].children[0].src = '/files/imgs/blank.png';
        cardLocal.children[2].src = '/files/imgs/blank.png';
        document.getElementById('want' + (i)).children[0].style.display = '';
      }
      if (i!=12) {
        document.getElementById('want' + i + 'form').value = document.getElementById('want' + (i+1) + 'form').value
      } else {document.getElementById('want' + i + 'form').value = ''}
      }
  }
  document.getElementById('offerType').style.display = 'none';
  document.getElementById('removeItem').style.display = "none";
  document.getElementById('searchBar').style.display = "none";
  document.getElementById('searchTable').style.display = "none";
  offerBox = '';
}



function countTrades() {
  tradeCount = document.getElementById('hiddentradecount').innerText;
  count = 0;
  if (tradeCount > 200) {
    delay = 4000/tradeCount;
  } else {
    delay = 1000/tradeCount;
  }

  var interval = setInterval(function() {
    document.getElementById('tradecount').innerText = count + ' TRADE POSTS LIVE'
    if (tradeCount-count>1000) {
      count += 111;
    } else if (tradeCount-count > 100) {
      count += 11;
    } else {
      count += 1;
    }
    if (count > tradeCount) {
      clearInterval(interval)
    }
  }, delay);
}

function addFilter() {

  if (filterBox.children[1].children[1].children[3].innerText != '' && filterType == '') {
    alert('Make sure you select a Search Type')
  } else {

    filteredList = [];
    tradesNum = document.getElementById('tradeBody').children.length;
    filterBox = document.getElementById('filterBox')
    filterCards = [filterBox.children[1].children[1].children[3].innerText,filterBox.children[1].children[2].children[3].innerText,filterBox.children[1].children[3].children[3].innerText]

    for (i=tradesNum-1;i>=0;i--) { //loop thru all trade posts
      if (filterType == 'want') {
        cardOffers = document.getElementById('post' + i).children[1].children;
        for (j=1;j<=cardOffers.length-1;j++) { //loop thru each item in trade post
          if (cardOffers[j].children[0].children.length == 4) { //make sure item is card not coins
            cardChecked = cardOffers[j].children[0].children[3].innerText;
            if (cardChecked == filterCards[0] || cardChecked == filterCards[1] || cardChecked == filterCards[2]) {
              //filter detects match
              filteredList.push(i)
            }
          }
        }
      } else if (filterType == 'has') {
        cardOffers = document.getElementById('post' + i).children[2].children;
        for (j=1;j<=cardOffers.length-1;j++) { //loop thru each item in trade post
          //console.log(cardOffers)
          if (cardOffers[j].children[0].children.length == 4) { //make sure item is card not coins
            cardChecked = cardOffers[j].children[0].children[3].innerText;
            if (cardChecked == filterCards[0] || cardChecked == filterCards[1] || cardChecked == filterCards[2]) {
              //filter detects match
              filteredList.push(i)
            }
          }
        }
      } else {
        filteredList.push(i);
      }

      document.getElementById('post' + i).style.display = 'none'; //remove all posts
    }

    for (i=0;i<filteredList.length;i++) {
      document.getElementById('post' + filteredList[i]).style.display = ''; //add all filtered posts
    }

    if (filteredList.length == 0) {
      document.getElementById('notradesmsg').style.display = 'block';
      document.getElementById('notradesmsg').scrollIntoView();
    } else {
      document.getElementById('notradesmsg').style.display = 'none';
      document.getElementById('tradeBody').scrollIntoView();
    }

    document.getElementById('hastype').classList.remove('filtertypeselect');
    document.getElementById('hastype').classList.add('filtertype');
    document.getElementById('wanttype').classList.remove('filtertypeselect');
    document.getElementById('wanttype').classList.add('filtertype');

    /*for (i=1;i<=3;i++) {
      document.getElementById('cfi' + i).filterBox.children[1].children[i].children[1].children[0].innerText)
      console.log(filterBox.children[1].children[i].children[0].innerText)
    }*/

    filterType = '';
    filterCards = [];
    tradeFilter = [];

    document.getElementById('resetMsg').style.display = "";

  for (i=1;i<=3;i++) {
    removeFilter = document.getElementById('filtercard' + i);
    removeFilter.style.backgroundImage = "";
    removeFilter.children[0].innerText = '';
    removeFilter.children[1].children[0].innerText = '';
    removeFilter.children[1].children[1].innerText = '';
    removeFilter.children[1].children[2].children[0].src = "/files/imgs/blank.png";
    removeFilter.children[1].children[3].children[0].src = "/files/imgs/blank.png";
    removeFilter.children[2].classList.remove('filtercardstd');
    removeFilter.children[2].classList.remove('filtercarddyn');
    removeFilter.children[2].src = "/files/imgs/blank.png";
    removeFilter.children[3].innerText = '';
  }

  }

}

function loadlistimgs() {

  for (i=0;i<document.getElementById('searchTable').children.length;i++) {
    var bar = document.getElementById('searchTable').children[i];
    bar.children[0].children[0].src = bar.children[0].children[0].dataset.src
    bar.children[1].children[1].children[0].src = bar.children[1].children[1].children[0].dataset.src
  }
}

function sendPack(pack) {
  document.getElementById('packtype').value = pack;
  document.getElementById('packTable').style.display = 'none';
}


/*function searchDelete() {
  searchedName = document.getElementById('searchBarDelete').value;
  filteredList = [];
  tradesNum = document.getElementById('tradeBody').children.length;
  filterBox = document.getElementById('filterBox');

  for (i=0;i<=tradesNum-1;i++) {
    currentName = tradeBody.children[i].children[0].innerText.slice(3);
    console.log(currentName)
    if (searchedName.toUpperCase() == currentName.toUpperCase()) {
      document.getElementById('post' + (tradesNum-i-1)).style.display = 'block';
    } else {
      document.getElementById('post' + (tradesNum-i-1)).style.display = 'none';
    }
  }
}

function deletePost() {
  var deleteAns = prompt('Please enter your username again to confirm.');
  
  if (deleteAns.toUpperCase() == searchedName.toUpperCase()) {
    
  } else {
    alert('The usernames did not match. The post was not deleted.')
  }
}*/

setTimeout(countTrades, 1000);