var tradesNum = document.getElementById('tradeBody').children.length;
var passList = [];

for (i=tradesNum-1;i>=0;i--) { //loop thru all trades
    passList.push(document.getElementById('post' + i).children[0].innerText.slice(2))
    document.getElementById('post' + i).children[0].innerHTML = 'yussy';
}

console.log(passList);