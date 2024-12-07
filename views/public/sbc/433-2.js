var positionMax = ['GK','LB','CB','CB','RB','CM','CDM','CM','LW','ST','RW'];
var positionStrong = [[],['LWB'],[],[],['RWB'],['CDM','CAM'],['CM'],['CDM','CAM'],['LM','LF'],['CF'],['RM','RF']];
var positionWeak = [[],['LM','CB','RB'],['LB','RB','CDM'],['LB','RB','CDM'],['RM','CB','LB'],['LM','RM'],['CB','CAM'],['LM','RM'],['RW','LWB'],['LF','RF'],['LW','RWB']]

var totLinks = [2,2,4,4,2,5,4,5,2,4,2];
var linkCards = [[1,3],[1,4],[2,3],[2,6],[3,4],[3,7],[4,5],[4,7],[5,8],[6,7],[6,8],[6,9],[6,10],[7,8],[8,10],[8,11],[9,10],[10,11]];
var linkChem = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var posChem = [];
var recLinks = [];
var divChem = [];
var cardLinkChem = [];
var finalChem = [];

function calculateChem() {
    //POSITION
    calcPosChem();
    //LINKS
    getLinks();

    getRaw(0,[0,1]);
    getRaw(1,[2,3]);
    getRaw(2,[0,2,4,5]);
    getRaw(3,[1,4,6,7]);
    getRaw(4,[6,8]);
    getRaw(5,[3,9,10,11,12]);
    getRaw(6,[5,7,9,13]);
    getRaw(7,[8,10,13,14,15]);
    getRaw(8,[11,16]);
    getRaw(9,[12,14,16,17]);
    getRaw(10,[15,17]);

    finalChem();

    colorChem();

}