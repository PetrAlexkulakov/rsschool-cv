import { playingPlace } from "./createAll";
import {cardShift} from './game';

export function drag(event, ourNumbers){
    
    let targetCard= event.target

    if(!targetCard.classList.contains('card') || targetCard.classList.contains('card_empty')) return false;

    let shiftX = event.clientX - targetCard.getBoundingClientRect().left;
    let shiftY = event.clientY - targetCard.getBoundingClientRect().top;

    targetCard.style.position = 'absolute';
    targetCard.style.zIndex = 1000;
    playingPlace.append(targetCard);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        targetCard.style.left = pageX - shiftX + 'px';
        targetCard.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event,ourNumbers) {
        moveAt(event.pageX, event.pageY);

        targetCard.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        targetCard.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.card_empty');

        if(droppableBelow) cardShift(targetCard, ourNumbers)
    }

    document.addEventListener('mousemove', onMouseMove(event,ourNumbers));

    targetCard.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        targetCard.onmouseup = null;
  };
}