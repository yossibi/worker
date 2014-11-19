
function boom()
{
    for(var i=0; i>-1;  i++)
    {
   	if( i%7 == 0 )
   	{
    		postMessage(i);
		pausecomp(2000);
    	}
    }
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
