var ctr = 0
var counter = document.getElementById('counter');
var plus = document.getElementById('+');
var minus = document.getElementById('-');
var like = document.getElementById('<3');
var likeList = document.getElementsByClassName('likes')[0];
var pause = document.getElementById('pause');
var commentForm = document.getElementById('comment-form');
var submit = document.getElementById('submit');

  (function counting() { //starts timer immediately
    plus.addEventListener('click', function() { //increments up on + click
      ctr++
    })
    minus.addEventListener('click', function() { //increments down on - click
      ctr--
    })
      setInterval(function(){
        counter.innerHTML = ctr++ //increments each second
      }, 1000)
  })()

  likesObj = {} //object for storing likes
    like.addEventListener('click', function() {
      likesObj[ctr] ? likesObj[ctr]++ : likesObj[ctr]= 1 //starts at one or increments if exists
      if (!document.getElementById(`${ctr}`)) {
      likeList.innerHTML += `<li id=${ctr}>${ctr} has been liked times ${likesObj[ctr]}</li>`
    } else {
      document.getElementById(ctr).innerHTML = `${ctr} has been liked times ${likesObj[ctr]}`
    }
  })
