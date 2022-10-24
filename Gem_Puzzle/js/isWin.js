import { movesCount, timer,endGame, buttonStop,endGameWrapper,buttonSaveResult,inputSaveResult, buttonResult, resultsDisplay } from "./createAll";
import { countOfMoves,sec,min,timerStart } from "./moves_n_timer";

export let gameStop = false


buttonStop.addEventListener('click',function(){
    gameStop = !gameStop
    if(!gameStop) timerStart()
})

export function isWin(ourNumbers){

    let done = true;
    
    ourNumbers.forEach((number,index)=>{
        if(index!=0 && number - ourNumbers[index-1] !== 1) done = false
    })

    if(done){

        gameStop=true
        endGame.style.display = 'block';
        endGame.innerHTML = `Hurrah! You have solved the puzzle for ${min}:${sec}  and ${countOfMoves} moves!`
        endGame.append(endGameWrapper)
    }
}

buttonSaveResult.addEventListener('click',function(){
    `Name:${inputSaveResult.value} Time:${min}:${sec} Moves:${countOfMoves}`
    localStorage.setItem('records', localStorage.getItem('records') != null ? localStorage.getItem('records')+`Name:${inputSaveResult.value} Time:${min}:${sec} Moves:${countOfMoves} \n`  : `Name:${inputSaveResult.value} Time:${min}:${sec} Moves:${countOfMoves} \n`)
})

resultsDisplay.addEventListener('click',function(){
    resultsDisplay.style.display= 'none'
})

buttonResult.addEventListener('click',function(event){
    event.stopPropagation()
    resultsDisplay.style.display='block';

    if(localStorage.getItem('records')!=null) {
        resultsDisplay.textContent= 'Results:\n' + localStorage.getItem('records')
    }
})

inputSaveResult.addEventListener('click',function(event){
    event.stopPropagation()
})