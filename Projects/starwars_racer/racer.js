$(document).ready(function(){

var flag = document.getElementById('flag')
var flagPos = getXPos(flag)

  $(document).on("keypress",function(event){
    if (event.keyCode == 113) {
      $('#player1_strip').prepend('<td class="space1"></td>');
      var player1 = document.getElementsByClassName("active1")[0]
      var player1XPos = getXPos(player1)
      if (player1XPos > flagPos) {
        alert('Player 1 wins!')
      }
    }

    else if (event.keyCode == 112) {
      $('#player2_strip').prepend('<td class="space2"></td>');
      var player2 = document.getElementsByClassName("active2")[0]
      var player2XPos = getXPos(player2)
      if (player2XPos > flagPos) {
        alert('Player 2 wins!')
      }
    }
  })
});

  function getXPos(elem) {
  var left=0
  while(elem) {
    left = left + parseInt(elem.offsetLeft)
    elem = elem.offsetParent
  }
  return left
}

