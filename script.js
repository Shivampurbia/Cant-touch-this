const evilButton = document.getElementById('evil-button');
const Offset = 100
evilButton.addEventListener('click',()=>{
    alert("cheating ?? ");
    window.close()
})

document.addEventListener('mousemove',(e)=>{
    const x = e.pageX;
    const y = e.pageY;

    const buttonBox = evilButton.getBoundingClientRect()
    const horizD =  distanceFromCenter(buttonBox.x,x,buttonBox.width)
    const vertiD = distanceFromCenter(buttonBox.y,y,buttonBox.height)

    const horiOffset = buttonBox.width/2 + Offset
    const vertiOffset = buttonBox.height/2 + Offset

    if(Math.abs(horizD)<=horiOffset && Math.abs(vertiD)<= vertiOffset){
        setButtonPosition(
            buttonBox.x + horiOffset /horizD *10,
            buttonBox.y + vertiOffset /vertiD *10)
    }
})
function setButtonPosition(left,top){
    
    const windowBox = document.body.getBoundingClientRect() 
    const buttonBox = evilButton.getBoundingClientRect()
    if (distanceFromCenter(left,windowBox.left,buttonBox.width)<0){
        left = windowBox.right - buttonBox.width  - Offset
    }
    if (distanceFromCenter(left,windowBox.right,buttonBox.width)>0){
        left = windowBox.left + Offset
    }
    if (distanceFromCenter(top,windowBox.top,buttonBox.height)<0){
        top= windowBox.bottom -  buttonBox.height - Offset
    }
    if (distanceFromCenter(top,windowBox.bottom,buttonBox.height)>0){
        top= windowBox.top + Offset
    }
    
    evilButton.style.left = `${left}px`;
    evilButton.style.top = `${top}px`;
    evilButton.innerHTML = "Can't touch this"
    
}

function distanceFromCenter(boxPosition,mousePosition,boxSize){
    return boxPosition - mousePosition + boxSize/2
}