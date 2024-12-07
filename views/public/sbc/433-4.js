var positionMax = ['GK','LB','CB','CB','RB','CM','CAM','CM','LW','ST','RW'];
var positionStrong = [[],['LWB'],[],[],['RWB'],['CDM','CAM'],['CM','CF'],['CDM','CAM'],['LM','LF'],['CF'],['RM','RF']];
var positionWeak = [[],['LM','CB','RB'],['LB','RB','CDM'],['LB','RB','CDM'],['RM','CB','LB'],['LM','RM'],['CDM'],['LM','RM'],['RW','LWB'],['LF','RF'],['LW','RWB']]

var totLinks = [2,3,4,4,3,4,3,4,3,3,3];
var linkCards = [[1,3],[1,4],[2,3],[2,6],[2,9],[3,4],[3,6],[4,5],[4,8],[5,8],[5,11],[6,7],[6,9],[7,8],[7,10],[8,11],[9,10],[10,11]];
var linkChem = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
    getRaw(1,[2,3,4]);
    getRaw(2,[0,2,5,6]);
    getRaw(3,[1,5,7,8]);
    getRaw(4,[7,9,10]);
    getRaw(5,[3,6,11,12]);
    getRaw(6,[11,13,14]);
    getRaw(7,[8,9,13,15]);
    getRaw(8,[4,12,16]);
    getRaw(9,[14,16,17]);
    getRaw(10,[10,15,17]);

    finalChem();

    colorChem();

}