function placeCards(amount=16){
    let NumbersAll = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
    
    let Numbers16 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let Numbers=NumbersAll.slice(0,amount)

    do{
        Numbers = _shuffle(Numbers)
    }while( _try(Numbers)==false)
    
    return Numbers
}

function _shuffle(Numbers){
    var currentIndex = Numbers.length, temporaryValue, randomIndex

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    temporaryValue = Numbers[currentIndex];
    Numbers[currentIndex] = Numbers[randomIndex]
    Numbers[randomIndex] = temporaryValue
  }

  return Numbers;
}

function _try(Numbers){
    let N=0
    let e= Numbers.indexOf(Numbers.length) 
    let k=Numbers.length**(1/2)

    do{
        k--
    }while(e<k*Numbers.length**(1/2))
    
    e=k+1

    Numbers.forEach((number,index)=>{
        let count=0

        for(let i=index+1; i<Numbers.length;i++){
            if(Numbers[i] < number) count++
        }
        N+=count
    })

    N+=e

    if(N%2==0) return true
    return false
}

export {placeCards};

