import React from 'react';
import './App6.css'; 


function App6 (){
  const num_arr = [];
  let new_arr = [];
  
  for(let i=0;i<=31;i++){
    num_arr.push(i);
  }
  
  new_arr = num_arr.map((item)=>{
    let isPrime= true;
    for(let j=2; j<item ;j++){
        if(item %j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime === true && item>1){
        return {
            key : "isPrime",
            item : item,
        }
    }
    else if(item %2 === 0){
        return {
            key : "isEven",
            item : item,
        }
    }
    else {
        return {
            key: "isOdd",
            item : item,
        }
    }
})

console.log(new_arr);
  return (
    <ul>
        {
            new_arr.map((item)=>
                <li className={item.key} key={item.item}>{item.item}</li>
            )
        }
    </ul>
  )
  
}

export default App6;