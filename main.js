const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn  = document.querySelector('.btn');
let play = false;
let newWords = " ";
let randWords = " ";

let sWords = ['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql','mangodb','cloudcomputing','devops','arya','abhishek','varad','piyush','veda','law','bcom','computer','science','engineer'];
const createNewWords = () =>{
    let ranNum = Math.floor(Math.random() * sWords.length);
    // console.log(ranNum)
    let newTempSword = sWords[ranNum];
    // console.log(newTempSword.split(""))
    return newTempSword;
}

const scramble = (arr) =>{
  for(let i = arr.length-1;i>0;i--){
    let temp = arr[i];
    // console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
    arr[i] = arr[j];
    arr[j] = temp;

    
  }
  return arr;
}

btn.addEventListener('click', function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randWords = scramble(newWords.split("")).join();
    // console.log(randWords.join(""));
    msg.innerHTML = `Guess the word:${randWords}`;
  }else{
   
    let TempWord = guess.value;
    if(TempWord === newWords){
      // console.log('correct');
      play =  false;
      msg.innerHTML = `Awsome It is  Correct . it is ${newWords} `;
      btn.innerHTML = "Start Again";
      guess.classList.toggle('hidden');
      guess.value = "";

    }else{
      console.log('incorrect');
      msg.innerHTML = `Oh No It is  Incorrect . Plz Try Again ${randWords} `;
    }
  
    
  }

})