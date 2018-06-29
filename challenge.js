var ctr = 0
var counter = document.getElementById('counter');
var plus = document.getElementById('+');
var minus = document.getElementById('-');
var like = document.getElementById('<3');
var likeList = document.getElementsByClassName('likes')[0];
var pause = document.getElementById('pause');
var commentForm = document.getElementById('comment-form');
var submit = document.getElementById('submit');
var commentList = document.getElementsByClassName('comments')[0];
var go = true;

  function timer() { //starts timer immediately
    plus.addEventListener('click', function() { //increments up on + click
      ctr++
    })
    minus.addEventListener('click', function() { //increments down on - click
      ctr--
    })
      setInterval(function(){
        if (go) { //pauses the counter when pause is clicked
          counter.innerHTML = ctr++; //increments each second
        console.log(go) }

      }, 1000)
  };
  timer();

  likesObj = {} //object for storing likes
    like.addEventListener('click', function() {
      likesObj[ctr] ? likesObj[ctr]++ : likesObj[ctr]= 1 //starts at one or increments if exists
      if (!document.getElementById(`${ctr}`)) {
      likeList.innerHTML += `<li id=${ctr}>${ctr} has been liked times ${likesObj[ctr]}</li>`
    } else {
      document.getElementById(ctr).innerHTML = `${ctr} has been liked times ${likesObj[ctr]}`
    }
  })

  pause.addEventListener('click', function() { //pauses buttons
    if (pause.innerHTML === "pause") {
      pause.innerHTML = "resume";
      go = false;
      plus.disabled = true;
      minus.disabled = true;
      like.disabled = true;
    } else {
      pause.innerHTML = "pause";
      go = true;
      plus.disabled = false;
      minus.disabled = false;
      like.disabled = false;
    }

  })

  submit.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log(commentForm.value)
    commentList.innerHTML += `<li>${commentForm.children[0].value}</li>`
  });
