var board=new Array();
var score=0;
$(document).ready(function(){
    newgame();
});
function newgame(){
    init(); 
}
function init(){
    for(var i=0; i<4 ; i++)
    for(var j=0; j<4 ; j++){
        
        var gridCell = $("#grid-cell-"+i+"-"+j);
        gridCell.css("top", getPosTop(i,j));
        gridCell.css("left", getPosLeft(i,j));
    }

}
 function getPosTop(i,j){
     return 20 + i*120;
 }

 function getPosLeft(i,j){
     return 20 + j*120;
 }
