var msTime = new Date();

tradesNum = document.getElementById('tradeBody').children.length;

function getDays(month, days) {
    monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    var totalDays = 0;
    for (j=0;j<month;j++) {
        totalDays += monthDays[j]
    }
    totalDays += days

    return totalDays
}

function addTime() {

    for (i=tradesNum-1;i>=0;i--) { //loop thru all trades
        var docTimeRaw = document.getElementById('post' + i).getElementsByClassName('bottomPostCtr')[0];
        var docTime = [parseInt(docTimeRaw.children[0].textContent), getDays(parseInt(docTimeRaw.children[1].textContent),parseInt(docTimeRaw.children[2].textContent)), parseInt(docTimeRaw.children[3].textContent), parseInt(docTimeRaw.children[4].textContent)]
        var realTime = [msTime.getUTCFullYear(), getDays(msTime.getUTCMonth(),msTime.getUTCDate()), msTime.getUTCHours(), msTime.getUTCMinutes()]
        var timeDifs = [realTime[0]-docTime[0],realTime[1]-docTime[1],realTime[2]-docTime[2],realTime[3]-docTime[3]]

        var minuteDiff = (realTime[0]-docTime[0])*525600 + (realTime[1]-docTime[1])*1440 + (realTime[2]-docTime[2])*60 + (realTime[3]-docTime[3])

        if (minuteDiff >= 1440) {
            var days = Math.floor(minuteDiff/1440)
            var hours = Math.floor((minuteDiff/1440 - days)*24);
            docTimeRaw.children[5].innerText = days + 'd ' + hours + 'h';
        } else if (minuteDiff >= 60) {
            var hours = Math.floor(minuteDiff/60);
            var minutes = Math.floor((minuteDiff/60 - hours)*60);
            docTimeRaw.children[5].innerText = hours + 'h ' + minutes + 'm';
        } else {
            var minutes = Math.floor(minuteDiff)
            docTimeRaw.children[5].innerText = minutes + 'm';
        }
    }

}

setTimeout(addTime, 200);