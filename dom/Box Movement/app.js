let box = document.querySelector('#box');
let positionX = 0;
let positionY = 0;

window.addEventListener('keydown',function(e){
    switch (e.code){
        case 'ArrowUp':
            positionY = positionY - 50;
            break;
        case 'ArrowDown':
            positionY = positionY + 50;
            break;
        case 'ArrowLeft':
            positionX = positionX - 50;
            break;
        case 'ArrowRight':
            positionX = positionX + 50;
            break;
    }
    if (positionX < 0){
        positionX = 0;
    }
    if (positionX > 650){
        positionX = 650;
    }
    if (positionY < 0){
        positionY = 0;
    }
    if (positionY > 650){
        positionY = 650;
    }
    box.style.top = `${positionY}px`;
    box.style.left = `${positionX}px`;
})