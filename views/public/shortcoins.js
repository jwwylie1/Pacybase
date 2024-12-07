tradesNum = document.getElementById('tradeBody').children.length;
let coinsNum;

function shortCoins() {

    for (i=tradesNum-1;i>=0;i--) { //loop thru all trades
        for (j=1;j<=2;j++) { //do have and want sides
            for (k=1;k<document.getElementById('post' + i).children[j].children.length;k++) {
                if (document.getElementById('post' + i).children[j].children[k].children[0].children.length == 2) { //check if item is coins
                    
                    coinsNum = document.getElementById('post' + i).children[j].children[k].children[0].children[1].innerText.slice(1);
                    var l = coinsNum.length-3;
                    while (l>0) {
                        coinsNum = coinsNum.slice(0,l) + ',' + coinsNum.slice(l)
                        l -= 3;
                    }
                    document.getElementById('post' + i).children[j].children[k].children[0].children[1].innerText = ' ' + coinsNum;
                    /*coinsNum = coinsNum/1000
                    
                    if (coinsNum >= 1000) {
                        coinsNum = coinsNum/1000
                        document.getElementById('post' + i).children[j].children[k].children[0].children[1].innerText = ' ' + coinsNum + 'M';
                    } else {
                        document.getElementById('post' + i).children[j].children[k].children[0].children[1].innerText = ' ' + coinsNum + 'K';
                    }*/
                }
            }
        }
    }

}

setTimeout(shortCoins, 200);