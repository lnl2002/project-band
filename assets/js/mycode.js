function closeProgram(){
    document.getElementById("modal").style.display="none";
}

function openProgram(){
    document.getElementById("modal").style.display="flex";
}

const modalContainer = document.querySelector('.js-modal-container');
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})

function menuButton(){
    var header= document.getElementById("header");
    
    if(header.clientHeight==45){
        header.style.height="auto";
    } else {
        header.style.height="45";
    }
}