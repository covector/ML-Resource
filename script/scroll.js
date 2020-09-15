var prevScrollPos = window.pageYOffset;
var threshold = 300;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos|currentScrollPos==0) {
        document.getElementById("topBar").style.top = "-80px";
    }else{
        document.getElementById("topBar").style.top = "0px";
    }
    if (currentScrollPos < threshold){
        document.getElementById("welcomePrimary").style.top = "390px";
        document.getElementById("welcomeSecondary").style.top = "360px";
        document.getElementById("welcomePrimary").style.color = "rgb(255,255,255,1)";
        document.getElementById("welcomeSecondary").style.color = "rgb(255,255,255,1)";
        document.getElementById("welcomePrimary").style.textShadow = "0 0 20px rgb(102, 102, 102,1)";
        document.getElementById("welcomeSecondary").style.textShadow = "0 0 20px rgb(102, 102, 102,1)";
    }else{
        document.getElementById("welcomePrimary").style.top = "490px";
        document.getElementById("welcomeSecondary").style.top = "460px";
        document.getElementById("welcomePrimary").style.color = "rgb(255,255,255,0)";
        document.getElementById("welcomeSecondary").style.color = "rgb(255,255,255,0)";
        document.getElementById("welcomePrimary").style.textShadow = "0 0 20px rgb(102, 102, 102,0)";
        document.getElementById("welcomeSecondary").style.textShadow = "0 0 20px rgb(102, 102, 102,0)";
    }
    prevScrollPos = window.pageYOffset;
}
function setUpBar(){
    setTimeout(()=>{window.onscroll();},100);
}