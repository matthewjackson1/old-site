function enlargeImg(ima, width) {
	myImage = document.getElementById(ima);
    	myImage.style.width = width;
    
    myImage.style.cssFloat="none";
    
    	
}

function reduceImg(ima, width) {
	myImage = document.getElementById(ima);
    	myImage.style.width = width;
    	myImage.style.cssFloat="left";
}

