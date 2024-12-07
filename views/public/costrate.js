sbcNum = document.getElementById('sbcsbody').getElementsByClassName('squadrow').length;

console.log(sbcNum)

function costValue() {
    var bestScore = document.getElementById('sbcsbody').getElementsByClassName('squadrow')[0].children[4].children[1].textContent;
    for (i=0;i<sbcNum;i++) { //loop thru all trades
        var currentScore = document.getElementById('sbcsbody').getElementsByClassName('squadrow')[i].children[4].children[1].textContent;
        var scoreDiff = currentScore - bestScore;
        var newScore = 100-scoreDiff;
        if (newScore < 0) {newScore=0};

        if (newScore >=50) {
            g=255;
            r=-5.1*newScore+510
        } else {
            r=255;
            g=5.1*newScore;
        }

        document.getElementById('sbcsbody').getElementsByClassName('squadrow')[i].children[4].children[1].innerText = newScore;
        document.getElementById('sbcsbody').getElementsByClassName('squadrow')[i].children[4].children[1].style.color = 'rgb('+r+','+g+', 50)';
        document.getElementById('sbcsbody').getElementsByClassName('squadrow')[i].children[4].children[1].style.display = '';
    }

}

setTimeout(costValue, 200);