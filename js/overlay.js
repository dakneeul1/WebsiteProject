function openNav1() {
    document.getElementById("loc1").style.width = "100%";
}

function openNav2() {
    document.getElementById("loc2").style.width = "100%";
}

function openNav3() {
    document.getElementById("loc3").style.width = "100%";
}

function openNav4() {
    document.getElementById("loc4").style.width = "100%";
}




function closeNav1() {
    document.getElementById("loc1").style.width = "0%";
}

function closeNav2() {
    document.getElementById("loc2").style.width = "0%";
}

function closeNav3() {
    document.getElementById("loc3").style.width = "0%";
}

function closeNav4() {
    document.getElementById("loc4").style.width = "0%";
}


var london = new Array("imgs/locations/london/london2.jpg", "imgs/locations/london/london3.jpeg", "imgs/locations/london/london1.jpeg");

var colchester = new Array("imgs/locations/colchester/colchester1.jpeg", "imgs/locations/colchester/colchester2.jpg", "imgs/locations/colchester/colchester3.jpg");

var ipswich = new Array("imgs/locations/ipswich/ipswich1.jpg", "imgs/locations/ipswich/ipswich2.jpg", "imgs/locations/ipswich/ipswich3.jpg");

var leicester = new Array("imgs/locations/leicester/leicester1.jpeg", "imgs/locations/leicester/leicester2.jpg", "imgs/locations/leicester/leicester3.jpg");
var i = 0;
var j = 0;

/*London Image Slider*/
function nextLondon() {
    i++;
    if(i==london.length){ i=0};
    document.getElementById("gallery4").src = london[i];
}

function backLondon(){
    if(i == 0) {
        i = 3;
    }
    i--;
    document.getElementById("gallery4").src = london[i];
}

/*Colchester Image Slider*/
function nextColchester() {
    j++;
    if(j==colchester.length){ j=0};
    document.getElementById("gallery2").src = colchester[j];
}

function backColchester(){
    if(j == 0) {
        j = 3;
    }
    j--;
    document.getElementById("gallery2").src = colchester[j];
}
/*LeicesterImage Slider*/
function nextLeicester() {
    i++;
    if(i==leicester.length){ i=0};
    document.getElementById("gallery3").src = leicester[i];
}

function backLeicester(){
    if(i == 0) {
        i = 3;
    }
    i--;
    document.getElementById("gallery3").src = leicester[i];
}
/*Ipswich Image Slider*/

function nextIpswich() {
    i++;
    if(i==ipswich.length){ i=0};
    document.getElementById("gallery1").src = ipswich[i];
}

function backIpswich(){
    if(i == 0) {
        i = 3;
    }
    i--;
    document.getElementById("gallery1").src = ipswich[i];
}