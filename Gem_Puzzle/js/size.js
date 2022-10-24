import { placeCards } from "./placeCards"
import { playingPlace, nowSize } from "./createAll"

export function chooseSize(size_feild){
    let sizee= size_feild.innerHTML.split('x')

    switch(sizee[0]*sizee[1]){
        case 9:
            playingPlace.style.gridTemplateColumns = 'repeat(3,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(3,1fr)'
            nowSize.textContent = 'Frame size: 3x3'
            break;
        case 16:
            playingPlace.style.gridTemplateColumns = 'repeat(4,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(4,1fr)'
            nowSize.textContent = 'Frame size: 4x4'
            break;
        case 25:
            playingPlace.style.gridTemplateColumns = 'repeat(5,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(5,1fr)'
            nowSize.textContent = 'Frame size: 5x5'
            break;
        case 36:
            playingPlace.style.gridTemplateColumns = 'repeat(6,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(6,1fr)'
            nowSize.textContent = 'Frame size: 6x6'
            break;
        case 49:
            playingPlace.style.gridTemplateColumns = 'repeat(7,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(7,1fr)'
            nowSize.textContent = 'Frame size: 7x7'
            break;
        case 64:
            playingPlace.style.gridTemplateColumns = 'repeat(8,1fr)'
            playingPlace.style.gridTemplateRows = 'repeat(8,1fr)'
            nowSize.textContent = 'Frame size: 8x8'
            break;

            
    }
    return placeCards(sizee[0]*sizee[1])
}