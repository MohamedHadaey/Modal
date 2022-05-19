var imgs =Array.from(document.querySelectorAll(".img-fluid"));
var lightboxContainer = document.getElementById("lightbox-container");
var closeIcon = document.getElementById("close");
var prevIcon = document.getElementById("prev");
var nextIcon = document.getElementById("next");
var lightboxItem = document.getElementById("lightbox-item");
var currentIndex=0;

for (var i=0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click",function(e){
        lightboxContainer.style.display="flex";
        var imageSrc = e.target.src;
        lightboxItem.style.backgroundImage=`url(${imageSrc})`
        currentIndex=imgs.indexOf(e.target)
    })
}

closeIcon.addEventListener("click",closeSlider)
function closeSlider(){
    lightboxContainer.style.display="none"; 
}

nextIcon.addEventListener("click",getNextSlide)
function getNextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var imageSrc = imgs[currentIndex].src;
    lightboxItem.style.backgroundImage=`url(${imageSrc})`
}

prevIcon.addEventListener("click",getPrevSlide)
function getPrevSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var imageSrc = imgs[currentIndex].src;
    lightboxItem.style.backgroundImage=`url(${imageSrc})`
}

document.addEventListener("keydown",function(e){
    if(e.key=="Escape"){
        closeSlider()
    }
    else if(e.key=="ArrowRight"){
        getNextSlide()
    }
    else if(e.key=="ArrowLeft"){
        getPrevSlide()
    }

})

lightboxContainer.addEventListener("click",function(e){
    if(e.target!=lightboxItem&&e.target!=nextIcon&&e.target!=prevIcon){

        closeSlider()
    }

})


