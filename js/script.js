document.addEventListener("scroll", nav)
function nav() {
    if (document.documentElement.scrollTop >= 50) {
        document.getElementsByTagName('nav')[0].style.backgroundColor = "#000"
    }
    else {
        document.getElementsByTagName('nav')[0].style.backgroundColor = " rgba(0, 0, 0, .3)"
    }
}

let display = false;

function clickheight(d) {
    
    if (display == false) {
        document.getElementsByTagName('ul')[d].style.maxHeight ="100%";
        document.getElementsByTagName('i')[d].style.rotate="180deg";
        display = true;
    }
    else {
        document.getElementsByTagName('ul')[d].style.maxHeight ="0";
        document.getElementsByTagName('i')[d].style.rotate="0deg";
        display=false;
    }

}


let burgerDisplay=false;
function burger(event){
    event.preventDefault;
    let burgerLines=document.getElementsByClassName("lines");
    if(burgerDisplay==false){
        for(var i=0;i<3;i++){
            if(i==0){
                burgerLines[i].style.animationName="lines1o";

            }
            else if(i==1){
                burgerLines[i].style.animationName="lines2o";
            }
            else if(i==2){
                burgerLines[i].style.animationName="lines3o";
            }
        }
        document.getElementsByTagName('nav')[0].style.height="calc(100vh)";
       
        burgerDisplay=true;
    }
    else if(burgerDisplay==true){
        for(var i=0;i<3;i++){
            if(i==0){
                burgerLines[i].style.animationName="lines1c";

            }
            else if(i==1){
                burgerLines[i].style.animationName="lines2c";
            }
            else if(i==2){
                burgerLines[i].style.animationName="lines3c";
            }
        }
        document.getElementsByTagName('nav')[0].style.height="81px";
        burgerDisplay=false;
    }

}




let newsItem=document.getElementsByClassName("news-item");
let newsCards=document.getElementsByClassName('news-cards');
function news(d){
    for(var i=0;i<3;i++){
        if(newsItem[i].className != "news-item"){
            newsItem[i].className="news-item";
        }

        if(i > 0){
            document.getElementsByClassName('new-img')[i - 1].style.filter="grayscale(1) brightness(0.65)"
        }
    }
    if(d > 0){
        document.getElementsByClassName('new-img')[d - 1].style.filter="none"
    }

    newsItem[d].className+=" active2";

    if(d==0){
        for(var i=0;i<9;i++){
            newsCards[i].style.display='block'
        }
    }
    else if(d==1){
        for(var i=0;i<6;i++){
            newsCards[i].style.display="none"
        }
        for(var i=6;i<10;i++){
            newsCards[i].style.display="block"
        }
    }
    else if(d==2){
     
        for(var i=0;i<6;i++){
            newsCards[i].style.display="block"
        }

        for(var i=6;i<10;i++){
            newsCards[i].style.display="none"
        }
    }
}

var btnBanner1=document.getElementsByClassName('btn-banner1')

var btnBanner2=document.getElementsByClassName('btn-banner2')

window.addEventListener('resize',function(){
    if(window.innerWidth<=899.99){
        for(var l=0 ; l<3 ; l++){
            btnBanner1[l].style.transition="0s";
            btnBanner2[l].style.transition="0s";
            console.log( btnBanner1[l].style.transition)
        }
        
        setTimeout(function(){
            for(var j=0;j<3;j++){
                btnBanner1[j].style.transition=".3s";
                btnBanner2[j].style.transition=".3s";
                console.log( btnBanner1[j].style.transition)
            }
        },1000)

    }
  
})


function topMenu(){
    document.documentElement.scrollTop=0;
}


var footeropenbtn=document.getElementsByClassName('footer-open-btn')[0];

footeropenbtn.addEventListener('click',function(){
    document.getElementsByClassName('region')[0].style.display="block";
})


var footerclosebtn=document.getElementsByClassName('footer-close-btn')[0];

footerclosebtn.addEventListener('click',function(){
    document.getElementsByClassName('region')[0].style.display="none";
})

var i=document.createElement("i");
var dis=true
function flag(d){
   
    if(dis==true){
        document.getElementsByClassName('li-btn')[0].removeChild( document.getElementsByClassName('li-btn')[0].children[1])
        dis=false;
    }
       
    

    d.appendChild(i)
    footeropenbtn.getElementsByTagName('img')[0].src=d.getElementsByTagName('img')[0].src;
    d.getElementsByTagName("i")[0].className="ri-check-line"

  
}

