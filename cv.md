1. Petr Kulakov
2. petr.alex.kulakov@gmail.com
3. My goals are to have an interesting job in a large company and have an ability to do my hobbis. I'd like to work in team, because I like to communicate and do it well. Every day I try to know something new and I like to study.
4. Now I learn JavaScript. I have small knowledge of Python and Pascal.
5. 
 ``` 
 function solution(input, markers) {
  input=input.replace(/\n/g, '\n ').split('\n').map(Element=> Element.split(''))

   input.forEach(element => {
    element.forEach((simbol, index) =>{
        if (markers.indexOf(simbol)!=-1) {
          element.splice(index, element.length-index)
        }
    })
    
  });

  return input.map(element=>{return element.join('').trim()}).join('\n')
  
};
```
6.NaN
7.NaN

8. I have Intermediate knowledge of English language.
