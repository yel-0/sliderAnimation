
const tracks = document.querySelector(".img-container")

window.onmousedown= (event) => {
tracks.dataset.mouseDownAt= event.clientX ;


}
window.onmouseup = () => {
    tracks.dataset.mouseDownAt = "0";
    tracks.dataset.prevPercentage = tracks.dataset.percentage ;
}


window.onmousemove = (event) => {
    if (tracks.dataset.mouseDownAt ==="0") return ;
    const mouseDelta = parseFloat(tracks.dataset.mouseDownAt) - event.clientX,
    maxDelta = window.innerHeight/2 ;
  

    const percentage = (mouseDelta / maxDelta) * -100;
       let nextPercentage = parseFloat(tracks.dataset.prevPercentage) + percentage ;
          tracks.dataset.percentage = nextPercentage ;
          
          nextPercentage=   Math.min(nextPercentage , 0),
          nextPercentage=  Math.max(nextPercentage , -100);  
          for(const image of tracks.getElementsByClassName("myImg")) {
image.animate({
     objectPosition :`${nextPercentage +100}% 50%`

},{duration:1200,fill:"forwards"})

          }
       
          tracks.animate({
            transform :`translate(${nextPercentage}% ,-50%)` 
          },{duration:1200,fill:"forwards"})

  
    
}
