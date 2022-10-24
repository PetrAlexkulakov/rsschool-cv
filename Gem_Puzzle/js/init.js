import {placeCards} from './placeCards';
import {cardShift} from './game';
import {isWin, gameStop} from './isWin';
import {playingPlace,endGame,buttonSave, buttonShuffle, otherSize} from './createAll';
import {saveGame} from './save';
import {drag} from './drag_n_drop';
import {chooseSize} from './size';

let ourNumbers= localStorage.getItem('save') ? localStorage.getItem('save').split(',').map((Element)=> {return +Element}) : placeCards();

export function replaceCard(ourNumbers){

ourNumbers.forEach((number)=>{
    let numberElement = document.createElement('div')
    if(number != ourNumbers.length){
        numberElement.innerHTML = number
        numberElement.className = `card ${number}`
        numberElement.draggable= true
    }else{
        //numberElement.innerHTML = number
        numberElement.className = `card card_empty`
    }
    playingPlace.append(numberElement)
})
}

replaceCard(ourNumbers)

playingPlace.addEventListener('click',function (event){

    if(!gameStop){
        cardShift(event.target, ourNumbers);
    }

})
// playingPlace.addEventListener('mousedown',function(event){
//     event.preventDefault()
//     if(!gameStop){
//         drag(event, ourNumbers);
//         //playingPlace.replaceChildren();
//         //replaceCard(ourNumbers);
//         //isWin(ourNumbers);
//     }

// })
playingPlace.ondragstart = function() {
    return false;
  };

endGame.addEventListener('click',function(){
    location.reload()
})

buttonSave.addEventListener('click', function(){
    saveGame(ourNumbers);
})

buttonShuffle.addEventListener('click',function(){
    localStorage.removeItem ('save');
    localStorage.removeItem ('sec');
    localStorage.removeItem ('min');
    localStorage.removeItem ('countOfMoves');
    
    location.reload();
})

otherSize.addEventListener('click',function(event){
    event.preventDefault()
    ourNumbers = chooseSize(event.target)
    playingPlace.replaceChildren()
    replaceCard(ourNumbers)
})