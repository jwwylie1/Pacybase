var positionMax = ['GK','LB','CB','CB','RB','CM','CM','CM','LW','ST','RW'];
var positionStrong = [[],['LWB'],[],[],['RWB'],['CDM','CAM'],['CDM','CAM'],['CDM','CAM'],['LM','LF'],['CF'],['RM','RF']];
var positionWeak = [[],['LM','CB','RB'],['LB','RB','CDM'],['LB','RB','CDM'],['RM','CB','LB'],['LM','RM'],['LM','RM'],['LM','RM'],['RW','LWB'],['LF','RF'],['LW','RWB']]

var totLinks = [2,2,4,4,2,3,5,3,2,3,2];
var linkCards = [[1,3],[1,4],[2,3],[2,6],[3,4],[3,7],[4,5],[4,7],[5,8],[6,7],[6,9],[7,8],[7,10],[8,11],[9,10],[10,11]];
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
    getRaw(5,[3,9,10]);
    getRaw(6,[5,7,9,11,12]);
    getRaw(7,[8,11,13]);
    getRaw(8,[10,14]);
    getRaw(9,[12,14,15]);
    getRaw(10,[13,15]);

    finalChem();

    colorChem();

}