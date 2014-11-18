var i = 0;

function boom() {
    for(i=0; i!==-1;  i++){
   if( i%7 == 0 )
    postMessage(i);
    }
    setTimeout("timedCount()",100);
}
boom();
