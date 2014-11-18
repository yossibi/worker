function boom() {
    for(var i=0; i<22;  i++){
   if( i%7 == 0 ){
    postMessage(i);
   // setTimeout("timedCount()",100);
    }}
}
boom();
