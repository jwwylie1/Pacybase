const packsList = [
    {name:"PACK OFFER", index: 0},
    {name:"Gold Pack", index:1},
    {name:"Rare Gold Pack", index:2},
    {name:"80+ Gold Pack", index:3},
    {name:"TOTW Pack", index:4},
    {name:"Gold Mega Pack", index:5},
    {name:"Special Pack", index:6},

]

for (i=0;i<packsList.length;i++) {
    packsList[i].id = packsList[i].index + 9000
}
    
    
module.exports = packsList;