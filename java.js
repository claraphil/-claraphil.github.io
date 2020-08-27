 var vidB = document.getElementById("videoBpoc");
var vidC = document.getElementById("videoCop");
var logo = document.getElementById("logo");
var cop = document.getElementById("cop");
var videocop = 	document.getElementById("videoCop");
var videopoc = 	document.getElementById("videoBpoc");
var bpoc = document.getElementById("bpoc");
var punkteB = 0;
var punkteC = 0;




$("a").click(function (event) {
    if ($(this).hasClass("disabled")) {
        event.preventDefault();
    }
    $(this).addClass("disabled");
});

//__________________________________________________________



function whatiwant(){
logo.style.display = "none"; 
	document.getElementById("pfre1").style.display = "block"; 
	
	bpoc.style.width = "30%";
	videopoc.style.height = "60vh";
videocop.style.height = "70vh";
	cop.style.width = "69%";
	logo.style.right = "30%";
}


function change(){
bpoc.style.width = "69%";
cop.style.width = "30%";
videocop.style.height = "60vh";
videopoc.style.height = "70vh";
logo.style.right = "69%";
logo.style.marginRight = "-100px";

setTimeout(function(){ document.getElementById("Btext1").style.display = "block"; }, 1000);
//setTimeout(function(){ logo.style.display = "none"; }, 1000);
//setTimeout(function(){ document.getElementById("pfli1").style.display = "block"; }, 1000);
logo.src = "./images/poclogo.mp4";
logo.loop = false;	

	
cop.style.opacity = "0.3";
document.getElementById("overlay1").style.display = "none";
document.getElementById("overlay2").style.display = "none";
document.getElementById("startpfeil").style.display = "none";

}

//______________ BPOC 1
function B1(){
	vidB.play();
	document.getElementById("bt1.1").style.fontWeight = "600";
	document.getElementById("bt1.2").style.opacity = "0";
	punkteC = punkteC +2;
	
vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli1").style.display = "block"; 
		
	};
}

function B2(){
	document.getElementById("bt1.2").style.fontWeight = "600";
	document.getElementById("bt1.1").style.opacity = "0";
	 vidB.play();
	punkteB = punkteB +2; 
	
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli1").style.display = "block"; 
		
	};
	
}



function pfeil1(){
	document.getElementById("pfli1").style.display = "none"; 
	logo.src ="./images/coplogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;
	logo.style.marginRight = "0px";
	//document.getElementById("pfre1").style.display = "block";
	
	bpoc.style.width = "30%";
	videopoc.style.height = "60vh";
videocop.style.height = "70vh";
	
	cop.style.width = "69%";
	logo.style.right = "30%";
	document.getElementById("Btext1").style.display = "none";
	setTimeout(function(){ document.getElementById("Ctext1").style.display = "block"; }, 1000);
	bpoc.style.opacity = "0.3";
	cop.style.opacity = "1";
	
}



//______________COP1



function C1(){
	vidC.play();
	document.getElementById("ct1.1").style.fontWeight = "600";
	document.getElementById("ct1.2").style.opacity = "0";
	punkteC = punkteC +2;
	
	vidC.onended=function(){
		document.getElementById("Ctext1").style.display = "none";
		document.getElementById("Ctext2").style.display = "block";	
	};
}

function C2(){
	document.getElementById("ct1.2").style.fontWeight = "600";
	document.getElementById("ct1.1").style.opacity = "0";
	vidC.play();
	
	
	punkteB = punkteB +2; 
		vidC.onended=function(){
		document.getElementById("Ctext1").style.display = "none";
		document.getElementById("Ctext2").style.display = "block";	
	};
}



//______COP2



function C3(){
	
	document.getElementById("ct2.1").style.fontWeight = "600";
	document.getElementById("ct2.2").style.opacity = "0";
	punkteB = punkteB +2;
	vidC.src = "./images/03_COPOC_Video.mp4";
	vidC.play();
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre1").style.display = "block"; 	
	};
}

function C4(){
	document.getElementById("ct2.2").style.fontWeight = "600";
	document.getElementById("ct2.1").style.opacity = "0";
	vidC.src = "./images/03_COPOC_Video.mp4";
	vidC.play();
	punkteC = punkteC +2; 
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre1").style.display = "block"; 	
	};
	
	
}


function pfeil2(){
	
	//document.getElementById("pfli2").style.display = "block";
	//document.getElementById("pfre1").style.display = "none";
	document.getElementById("pfre1").style.display = "none"; 
	logo.src ="./images/poclogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;
	logo.style.marginRight = "-100px";
	
	bpoc.style.width = "69%";
	cop.style.width = "30%";
videocop.style.height = "60vh";
videopoc.style.height = "70vh";
	logo.style.right = "69%";
	document.getElementById("Ctext2").style.display = "none";
	document.getElementById("Ctext1").style.display = "none";
	setTimeout(function(){ document.getElementById("Btext2").style.display = "block"; }, 1000);
	bpoc.style.opacity = "1";
	cop.style.opacity = "0.3";
	
}




//______________ BPOC 2
function B3(){
	vidB.src = "./images/04_COPOC_Video.mp4";
	vidB.play();
	document.getElementById("bt2.1").style.fontWeight = "600";
	document.getElementById("bt2.2").style.opacity = "0";
	punkteB = punkteB +2; 
	
	vidB.onended=function(){
		document.getElementById("Btext2").style.display = "none";
		document.getElementById("Btext3").style.display = "block";	
	};
}

function B4(){
	document.getElementById("bt2.2").style.fontWeight = "600";
	document.getElementById("bt2.1").style.opacity = "0";
	vidB.src = "./images/04_COPOC_Video.mp4";
	vidB.play();
	punkteC = punkteC +2;
	
	vidB.onended=function(){
		document.getElementById("Btext2").style.display = "none";
		document.getElementById("Btext3").style.display = "block";	
	};
	
}

//______________ BPOC 3
function B5(){
	document.getElementById("bt3.1").style.fontWeight = "600";
	document.getElementById("bt3.2").style.opacity = "0";
	vidB.src = "./images/05_COPOC_Video.mp4";
	vidB.play();
	punkteC = punkteC +2;
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli2").style.display = "block"; 	
	};
	
	
}

function B6(){
	document.getElementById("bt3.2").style.fontWeight = "600";
	document.getElementById("bt3.1").style.opacity = "0";
	vidB.src = "./images/05_COPOC_Video.mp4";
	vidB.play();
	punkteB = punkteB +2; 
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli2").style.display = "block"; 	
	};
	
}




function pfeil3(){
	//document.getElementById("pfli2").style.display = "none"; 
	//document.getElementById("pfre2").style.display = "block";
	document.getElementById("pfli2").style.display = "none"; 
	logo.src ="./images/coplogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;
	logo.style.marginRight = "0px";
	
	bpoc.style.width = "30%";
	videopoc.style.height = "60vh";
videocop.style.height = "70vh";
	cop.style.width = "69%";
	logo.style.right = "30%";
	document.getElementById("Btext2").style.display = "none";
	document.getElementById("Btext3").style.display = "none";
	setTimeout(function(){ document.getElementById("Ctext3").style.display = "block"; }, 1000);
	bpoc.style.opacity = "0.3";
	cop.style.opacity = "1";
	
}




//______COP 3 

function C5(){
	document.getElementById("ct3.1").style.fontWeight = "600";
	document.getElementById("ct3.2").style.opacity = "0";
	vidC.src = "./images/06_COPOC_Video.mp4";
	vidC.play();
	punkteB = punkteB +2; 	
	
		vidC.onended=function(){
		document.getElementById("Ctext3").style.display = "none";
		document.getElementById("Ctext4").style.display = "block";	
	};
}



function C6(){
	document.getElementById("ct3.2").style.fontWeight = "600";
	document.getElementById("ct3.1").style.opacity = "0";
	vidC.src = "./images/06_COPOC_Video.mp4";
	vidC.play();
	punkteB = punkteB +2; 
	
	
		vidC.onended=function(){
		document.getElementById("Ctext3").style.display = "none";
		document.getElementById("Ctext4").style.display = "block";	
	};
}



//______COP 4


function C7(){
	
	document.getElementById("ct4.1").style.fontWeight = "600";
	document.getElementById("ct4.2").style.opacity = "0";
	punkteB = punkteB +2;
	vidC.src = "./images/07_COPOC_Video.mp4";
	vidC.play();
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre2").style.display = "block"; 	
	};
}

function C8(){
	document.getElementById("ct4.2").style.fontWeight = "600";
	document.getElementById("ct4.1").style.opacity = "0";
	vidC.src = "./images/07_COPOC_Video.mp4";
	vidC.play();
	punkteC = punkteC +2; 
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre2").style.display = "block"; 	
	};

}



function pfeil4(){
	
	//document.getElementById("pfli2").style.display = "block";
	//document.getElementById("pfre1").style.display = "none";
	document.getElementById("pfre2").style.display = "none"; 
	logo.src ="./images/poclogo.mp4";
	logo.style.display = "block";
	logo.loop = false;	
	logo.style.marginRight = "-100px";
	
	bpoc.style.width = "69%";
	cop.style.width = "30%";
videocop.style.height = "60vh";
videopoc.style.height = "70vh";
	logo.style.right = "69%";
	document.getElementById("Ctext3").style.display = "none";
	document.getElementById("Ctext4").style.display = "none";
	setTimeout(function(){ document.getElementById("Btext4").style.display = "block"; }, 1000);
	bpoc.style.opacity = "1";
	cop.style.opacity = "0.3";
	
}







//______________ BPOC 4
function B7(){
	document.getElementById("bt4.1").style.fontWeight = "600";
	document.getElementById("bt4.2").style.opacity = "0";
	document.getElementById("bt4.3").style.opacity = "0";
	//document.getElementById("nohover").style.opacity = "0";
	vidB.src = "./images/08_COPOC_Video.mp4";
	vidB.play();
	punkteC = punkteC +1.5;
	punkteB = punkteB +1.5;
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli3").style.display = "block"; 	
	};	
}

function B8(){
	document.getElementById("bt4.2").style.fontWeight = "600";
	document.getElementById("bt4.1").style.opacity = "0";
	document.getElementById("bt4.3").style.opacity = "0";
	//document.getElementById("nohover").style.opacity = "0";
	vidB.src = "./images/08_COPOC_Video.mp4";
	vidB.play();punkteC = punkteC +3;
	
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli3").style.display = "block"; 	
	};	
}



function B9(){
	document.getElementById("bt4.3").style.fontWeight = "600";
	document.getElementById("bt4.2").style.opacity = "0";
	document.getElementById("bt4.1").style.opacity = "0";
	//document.getElementById("nohover").style.opacity = "0";
	vidB.src = "./images/08_COPOC_Video.mp4";
	vidB.play();
	punkteB = punkteB +3;
	
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli3").style.display = "block"; 	
	};	
}



function pfeil5(){
	//document.getElementById("pfli2").style.display = "none"; 
	//document.getElementById("pfre2").style.display = "block";
	document.getElementById("pfli3").style.display = "none"; 
	logo.src ="./images/coplogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;	
	logo.style.marginRight = "0px";
	
	bpoc.style.width = "30%";
	videopoc.style.height = "60vh";
videocop.style.height = "70vh";
	cop.style.width = "69%";
	logo.style.right = "30%";
	document.getElementById("Btext4").style.display = "none";
	setTimeout(function(){ document.getElementById("Ctext5").style.display = "block"; }, 1000);
	bpoc.style.opacity = "0.3";
	cop.style.opacity = "1";
	
}






//________COP 5

function C9(){
	
	document.getElementById("ct5.1").style.fontWeight = "600";
	document.getElementById("ct5.2").style.opacity = "0";
	punkteC = punkteC +2;
	vidC.src = "./images/09_COPOC_Video.mp4";
	vidC.play();
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre3").style.display = "block"; 	
	};
}

function C10(){
	document.getElementById("ct5.2").style.fontWeight = "600";
	document.getElementById("ct5.1").style.opacity = "0";
	vidC.src = "./images/09_COPOC_Video.mp4";
	vidC.play();
	punkteB = punkteB +2; 
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre3").style.display = "block"; 	
	};

}



function pfeil6(){
	
	//document.getElementById("pfli2").style.display = "block";
	//document.getElementById("pfre1").style.display = "none";
	document.getElementById("pfre3").style.display = "none"; 
	logo.src ="./images/poclogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;
	logo.style.marginRight = "-100px";
	
	
	bpoc.style.width = "69%";
	cop.style.width = "30%";
videocop.style.height = "60vh";
videopoc.style.height = "70vh";
	logo.style.right = "69%";
	document.getElementById("Ctext5").style.display = "none";
	setTimeout(function(){ document.getElementById("Btext5").style.display = "block"; }, 1000);
	bpoc.style.opacity = "1";
	cop.style.opacity = "0.3";
	
	
}






//______________ BPOC 5
function B10(){
	document.getElementById("bt5.1").style.fontWeight = "600";
	document.getElementById("bt5.2").style.opacity = "0";
	document.getElementById("bt5.3").style.opacity = "0";
	//document.getElementById("nohover2").style.opacity = "0";
	vidB.src = "./images/10_COPOC_Video.mp4";
	vidB.play();
	punkteC = punkteC +1.5;
	punkteB = punkteB +1.5;
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli4").style.display = "block"; 	
	};	
}

function B11(){
	document.getElementById("bt5.2").style.fontWeight = "600";
	document.getElementById("bt5.1").style.opacity = "0";
	document.getElementById("bt5.3").style.opacity = "0";
	//document.getElementById("nohover2").style.opacity = "0";
	vidB.src = "./images/10_COPOC_Video.mp4";
	vidB.play();
	punkteB = punkteB +3;
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli4").style.display = "block"; 	
	};	
}



function B12(){
	document.getElementById("bt5.3").style.fontWeight = "600";
	document.getElementById("bt5.2").style.opacity = "0";
	document.getElementById("bt5.1").style.opacity = "0";
	//document.getElementById("nohover2").style.opacity = "0";
	vidB.src = "./images/10_COPOC_Video.mp4";
	vidB.play();
	punkteC = punkteC +3;
	
	
	vidB.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfli4").style.display = "block"; 	
	};	
}



function pfeil7(){
	//document.getElementById("pfli2").style.display = "none"; 
	//document.getElementById("pfre2").style.display = "block";
	document.getElementById("pfli4").style.display = "none"; 
	logo.src ="./images/coplogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;
	logo.style.marginRight = "0px";
	
	bpoc.style.width = "30%";
	videopoc.style.height = "60vh";
videocop.style.height = "70vh";
	cop.style.width = "69%";
	logo.style.right = "30%";
	document.getElementById("Btext5").style.display = "none";
	setTimeout(function(){ document.getElementById("Ctext6").style.display = "block"; }, 1000);
	bpoc.style.opacity = "0.3";
	cop.style.opacity = "1";
	

	
	
}




//________COP 6

function C11(){
	
	document.getElementById("ct6.1").style.fontWeight = "600";
	document.getElementById("ct6.2").style.opacity = "0";
	punkteC = punkteC +2;
	vidC.src = "./images/11_COPOC_Video.mp4";
	vidC.play();
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre4").style.display = "block"; 	
	};
}

function C12(){
	document.getElementById("ct6.2").style.fontWeight = "600";
	document.getElementById("ct6.1").style.opacity = "0";
	vidC.src = "./images/11_COPOC_Video.mp4";
	vidC.play();
	punkteB = punkteB +2; 
	
	vidC.onended=function(){
	logo.style.display = "none"; 
	document.getElementById("pfre4").style.display = "block"; 	
	};

}



function pfeil8(){
	
	//document.getElementById("pfli2").style.display = "block";
	//document.getElementById("pfre1").style.display = "none";
	document.getElementById("pfre4").style.display = "none"; 
	logo.src ="./images/poclogo.mp4";
	logo.style.display = "block"; 
	logo.loop = false;	
	logo.style.marginRight = "-100px";
	
	bpoc.style.width = "69%";
	cop.style.width = "30%";
videocop.style.height = "60vh";
videopoc.style.height = "70vh";
	logo.style.right = "69%";
	document.getElementById("Ctext6").style.display = "none";
	setTimeout(function(){ document.getElementById("Btext6").style.display = "block"; }, 1000);
	bpoc.style.opacity = "1";
	cop.style.opacity = "0.3";
	
	setTimeout(function(){vidB.src = "./images/12_COPOC_Video.mp4";
	vidB.play(); }, 1200);
	
	vidB.onended=function(){
		window.location="Danke.html"
	}
	/*vidB.onended=function(){if (punkteC < 6){
		window.location="AuswertungBPoC.html"
	}
	
	
		if (punkteB < 6){
		window.location="AuswertungCop.html"
	}
	
	
		if (punkteC == 6){
		window.location="AuswertungNeutral.html"
	}
	
	
	};*/
	
	
	
	
}




