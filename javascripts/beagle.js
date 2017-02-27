function Beagle() { //beagle constructor
  //apply position to hard-coded matrix
  this.direction = '0';
  this.posY = 9;
  this.posX = 13;

  var ghostHtml = '<div class="ghost"></div>';
  $('.ghost-position').append(ghostHtml);
  var beagleHtml = '<img src="images/beagle.png" class="pac-man">'; //create HTML template
  $('.current-position').append(beagleHtml); //add pac-man to corresponding div on rendered board
}

Beagle.prototype.pacAppend = () => {
  beagleHtml = '<img src="images/beagle.png" class="pac-man">';
  currentPosition = $('.current-position');
  currentPosition.append(beagleHtml);
};

Beagle.prototype.move = (string) => {
    var beagleHtml;
    var beaglePosition = newGame.mapFind('pac-man');
    let posY = beaglePosition[0];
    let posX = beaglePosition[1];

      switch(string) {
        case 'left':
        if (  newGame.map[posY][posX-1] === 'wall') {
          return;
        } else if(newGame.map[posY][posX-1] === 'dot'){
        ion.sound.play('water-drop');
        newGame.dotCount -= 1;
        newGame.score += 10;
        newGame.updateScore();
        $('.pac-man').remove(); //remove beagle from current div
        newGame.map[posY][posX] = 'path'; //assign former position to interior-block
        posX -= 1; //decrement current position
        newGame.map[posY][posX] = 'pac-man'; //assign class to new position
        beagleHtml = '<img src="images/beagle.png" class="pac-man">';
        currentPosition = $('.current-position');
        currentPosition.append(beagleHtml);
        newGame.direction = '90';
        $('.pac-man').css({'transform' : 'rotate(90deg)'});
        }
        else if(newGame.map[posY][posX-1] === 'path') {
          $('.pac-man').remove(); //remove beagle from current div
          newGame.map[posY][posX] = 'path'; //assign former position to interior-block
          posX -= 1; //decrement current position
          newGame.map[posY][posX] = 'pac-man';
          beagleHtml = '<img src="images/beagle.png" class="pac-man">';
          currentPosition = $('.current-position');
          currentPosition.append(beagleHtml);
          newGame.direction = '90';
          $('.pac-man').css({'transform' : 'rotate(90deg)'});
        }
        break;

        case 'right':
        if (  newGame.map[posY][posX+1] === 'wall') {
          return;
        } else if(newGame.map[posY][posX+1] === 'dot'){
        ion.sound.play('water-drop');
        newGame.dotCount -= 1;
        newGame.score += 10;
        newGame.updateScore();
        $('.pac-man').remove(); //remove beagle from current div
        newGame.map[posY][posX] = 'path'; //assign former position to interior-block
        posX += 1; //decrement current position
        newGame.map[posY][posX] = 'pac-man';
        beagleHtml = '<img src="images/beagle.png" class="pac-man">';
        currentPosition = $('.current-position');
        currentPosition.append(beagleHtml);
        newGame.direction = '270';
        $('.pac-man').css({'transform' : 'rotate(270deg)'});
        }
        else if(newGame.map[posY][posX+1] === 'path') {
          $('.pac-man').remove(); //remove beagle from current div
          newGame.map[posY][posX] = 'path'; //assign former position to interior-block
          posX+= 1; //decrement current position
          newGame.map[posY][posX] = 'pac-man';
          beagleHtml = '<img src="images/beagle.png" class="pac-man">';
          currentPosition = $('.current-position');
          currentPosition.append(beagleHtml);}
          newGame.direction = '270';
          $('.pac-man').css({'transform' : 'rotate(270deg)'});
        break;

        case 'up':
        if (  newGame.map[posY - 1][posX] === 'wall') {
          return;
        } else if(newGame.map[posY - 1][posX] === 'dot'){
        ion.sound.play('water-drop');
        newGame.dotCount -= 1;
        newGame.score += 10;
        newGame.updateScore();
        $('.pac-man').remove(); //remove beagle from current div
        newGame.map[posY][posX] = 'path'; //assign former position to interior-block
        posY -= 1; //decrement current position
        newGame.map[posY][posX] = 'pac-man';
        beagleHtml = '<img src="images/beagle.png" class="pac-man">';
        currentPosition = $('.current-position');
        currentPosition.append(beagleHtml);
        newGame.direction = '180';
        $('.pac-man').css({'transform' : 'rotate(180deg)'});
        }
        else if(newGame.map[posY - 1][posX] === 'path') {
          $('.pac-man').remove(); //remove beagle from current div
          newGame.map[posY][posX] = 'path'; //assign former position to interior-block
          posY-= 1; //decrement current position
          newGame.map[posY][posX] = 'pac-man';
          beagleHtml = '<img src="images/beagle.png" class="pac-man">';
          currentPosition = $('.current-position');
          currentPosition.append(beagleHtml);
          newGame.direction = '180';
          $('.pac-man').css({'transform' : 'rotate(180deg)'});
        }
        break;

        case 'down':
        if (  newGame.map[posY + 1][posX] === 'wall') {
          return;
        } else if(newGame.map[posY + 1][posX] === 'dot'){
        ion.sound.play('water-drop');
        newGame.dotCount -= 1;
        newGame.score += 10;
        newGame.updateScore();
        $('.pac-man').remove(); //remove beagle from current div
        newGame.map[posY][posX] = 'path'; //assign former position to interior-block
        posY += 1; //decrement current position
        newGame.map[posY][posX] = 'pac-man';
        beagleHtml = '<img src="images/beagle.png" class="pac-man">';
        currentPosition = $('.current-position');
        currentPosition.append(beagleHtml);
        newGame.direction = '0';
        }
        else if(newGame.map[posY + 1][posX] === 'path') {
          $('.pac-man').remove(); //remove beagle from current div
          newGame.map[posY][posX] = 'path'; //assign former position to interior-block
          posY += 1; //decrement current position
          newGame.map[posY][posX] = 'pac-man';
          beagleHtml = '<img src="images/beagle.png" class="pac-man">';
          currentPosition = $('.current-position');
          currentPosition.append(beagleHtml);
          newGame.direction = '0';
        break;
      }
      }
    };