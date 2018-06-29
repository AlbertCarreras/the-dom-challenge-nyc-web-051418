//objects from html
let counter = document.getElementById('counter');
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let like = document.getElementById('<3');
let likeList = document.getElementsByClassName('likes')[0];
let pause = document.getElementById('pause');
document.getElementById("comment-form")[0].id = 'comment-input'; //add id to input field on form
let commentForm = document.getElementById('comment-input'); //object with just added id
let submit = document.getElementById('submit');
let commentList = document.getElementsByClassName('comments')[0];

let ctr = 0 // object as counter
let go = true; // object to store timer activation status
function timer() { //starts timer immediately
  plus.addEventListener('click', () => ctr++ ); //increments up on + click
  minus.addEventListener('click', () => ctr-- );//increments down on - click
  setInterval( () => {
    if (go) { //pauses the counter when pause btn is clicked ang go turns false
      counter.innerHTML = ctr++; //increments each second
    }}, 1000);
};
timer();

let likesObj = {} //object for storing likes
like.addEventListener('click', () => {
  likesObj[ctr] ? likesObj[ctr]++ : likesObj[ctr] = 1; //starts at one or increments if exists
  if (!document.getElementById(`${ctr}`)) {
    likeList.innerHTML += `<li id=${ctr}>${ctr} has been liked times ${likesObj[ctr]}</li>`;
  } else {
    document.getElementById(ctr).innerHTML = `${ctr} has been liked times ${likesObj[ctr]}`;
  }
})

pause.addEventListener('click', () => { //pauses buttons
  if (pause.innerHTML === "pause") {
    go = false;
    pause.innerHTML = "resume";
    plus.disabled = true;
    minus.disabled = true;
    like.disabled = true;
  } else {
    go = true;
    pause.innerHTML = "pause";
    plus.disabled = false;
    minus.disabled = false;
    like.disabled = false;
  }
})

submit.addEventListener('click', (e) => {
  e.preventDefault();
  commentList.innerHTML += `<li>${commentForm.value}</li>`;
});
