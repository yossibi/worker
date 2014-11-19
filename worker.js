
function boom() {
    for(var i=0; i<22;  i++){
   if( i%7 == 0 ){
    postMessage(i);
pausecomp(5000);
 
 
 
 //  setTimeout("boom()",1000);
    }}
}
boom();


 function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do {
	curDate = new Date(); 
	}
	while(curDate-date < millis);
}
