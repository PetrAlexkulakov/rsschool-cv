import { buttonSave } from "./createAll";
import {sec,min,countOfMoves} from './moves_n_timer'; 


export function saveGame(ourNumbers){
    localStorage.setItem('save', ourNumbers)
    localStorage.setItem('sec', sec)
    localStorage.setItem('min', min)
    localStorage.setItem('countOfMoves', countOfMoves)
}