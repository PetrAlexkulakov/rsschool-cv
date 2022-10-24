import { playingPlace } from "./createAll";

export async function animationCard(card, destination){
    let newCard = card.cloneNode(true)
    let coord= card.getBoundingClientRect();
    let coordLeft= coord.left + window.pageXOffset
    let coordTop= coord.top + window.pageYOffset
   // card.style.display='none';

    document.body.append(newCard)
    newCard.style.position = 'absolute';
    newCard.style.left=coordLeft+'px'
    newCard.style.top=coordTop +'px'
    newCard.style.width= coord.width+'px'
    newCard.style.height=coord.height/1.5+'px'

    switch(destination){
        case('left'):
        newCard.className= 'card card_right'
        let k1=2
        let timer1= setInterval(()=>{
        newCard.style.left= coordLeft-(3.5*coord.width)/k1+'px'
        k1-=1
        },250)
        setTimeout(()=> clearInterval(timer1),600)
        break;
        case('right'):
        newCard.className= 'card card_right'
        let k2=2
        let timer2= setInterval(()=>{
        newCard.style.left= coordLeft+(3.5*coord.width)/k2+'px'
        k2-=1
        },250)
        setTimeout(()=> clearInterval(timer2),600)
        break;
        case('top'):
        newCard.className= 'card card_right'
        let k3=2
        let timer3= setInterval(()=>{
        newCard.style.top= coordTop-(coord.top)/k3+'px'
        k3-=1
        },250)
        setTimeout(()=> clearInterval(timer3),600)
        break;
        case('bottom'):
        newCard.className= 'card card_right'
        let k4=2
        let timer4= setInterval(()=>{
        newCard.style.top= coordTop+(1.7*coord.top)/k4+'px'
        k4-=1
        },250)
        setTimeout(()=> clearInterval(timer4),600)
        break;
    }
    setTimeout(()=>{
        newCard.remove()
      //  card.style.display='block';
        resolve('done')
    },500)
}