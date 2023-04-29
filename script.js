let advice_id = document.getElementById("advice_id");
let advice = document.getElementById("advice");
let btn = document.querySelector("#btn");

let getNewAdvice= function(){fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((data) => {
      console.log(data.slip.advice);
      advice.innerHTML = data.slip.advice;
      advice_id.innerHTML = data.slip.id;
    });
}
getNewAdvice();

btn.onclick = getNewAdvice;
