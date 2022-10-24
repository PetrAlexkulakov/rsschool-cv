import {increaseCount} from './moves_n_timer';
import { buttonSound,buttonStop, playingPlace } from './createAll';
import {animationCard} from './card-animation';
import {replaceCard} from './init';
import {isWin} from './isWin';

let canAudio=true
buttonSound.addEventListener('click',function(){
    canAudio= !canAudio
})


export async function cardShift(target, ourNumbers){
    if(!target.classList.contains('card')) {
        return false;
    }
    
    let number = +target.innerHTML

    let audioStone= new Audio()
    audioStone.src='audio/stone.mp3'

    if(ourNumbers.indexOf(number) != ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number)+1]==ourNumbers.length  &&
    (((ourNumbers.indexOf(number)+1) % (ourNumbers.length**(1/2))) != 0)){

        let promise= new Promise(function(resolve,reject){
            animationCard(target,'right')
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)+1]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
                
                resolve('done')
            },500)
        })
        let result= await promise

        playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        isWin(ourNumbers);
        increaseCount()
        

    }
    else if(ourNumbers.indexOf(number) != 0 &&
    ourNumbers[ourNumbers.indexOf(number)-1]==ourNumbers.length &&
    (ourNumbers.indexOf(number) % (ourNumbers.length**(1/2))) != 0){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)-1]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)+1] = ourNumbers.length
                resolve('done')
            },500)
            animationCard(target,'left')
        })
        let result= await promise

        playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        isWin(ourNumbers);
        increaseCount()
        

    }
    else if(ourNumbers.indexOf(number)+ourNumbers.length**(1/2) <= ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number) + ourNumbers.length**(1/2)]==ourNumbers.length){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
                resolve('done')
            },500)
            animationCard(target,'bottom')
        })
        let result= await promise

        playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        isWin(ourNumbers);
        increaseCount()
        

    }
    else if(ourNumbers.indexOf(number)-ourNumbers.length**(1/2) >= 0 &&
    ourNumbers[ourNumbers.indexOf(number) - ourNumbers.length**(1/2)]==ourNumbers.length){
        
        let promise= new Promise(function(resolve,reject){
            if(canAudio) audioStone.autoplay = true;
            setTimeout(()=>{
                ourNumbers[ourNumbers.indexOf(number)-ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
                ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)] = ourNumbers.length
                resolve('done')
            },500)
            animationCard(target,'top')
        })
        let result= await promise

        playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        isWin(ourNumbers);
        increaseCount()
        
    }
}
