const bgimageE1 = document.querySelector("bg-imahe")


window.addEventlistencer("scroll", ()=>{
    updateImage();
})

function updateImage(){
  bgimageE1.style.opacity = 1 - window.pageYOffset / 900;
  bgimageE1.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";

}




