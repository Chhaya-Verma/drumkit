document.querySelectorAll('.sound').forEach(sound => {
  sound.addEventListener('click', () => {

    const id = sound.id;
    switch (id) {
      case '1':
        playSound('1');
        break;

      case '2':
        playSound('2');
        break;

      case '3':
        playSound('3');
        break;

      case '4':
        playSound('4');
        break;

      case '5':
        playSound('5');
        break;

      case '6':
        playSound('6');
        break;

      case '7':
        playSound('7');
        break;

      case '8':
        playSound('8');
        break;

      case '9':
        playSound('9');
        break;

      default:
        console.log('audio not matched');
    }


    document.addEventListener('keydown', (e) => {
      const keyMap = {
        'a': '1',
        's': '2',
        'd': '3',
        'f': '4',
        'g': '5',
        'h': '6',
        'j': '7',
        'k': '8',
        'l': '9'
      };

      const id = keyMap[e.key.toLowerCase()]; 
      if (id) {
        playSound(id); 
      }
    });




    function playSound(id) {
     document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0; 
      });

     
      const audio = document.querySelector(`audio[data-key="${id}"]`);
      if (audio) {
        audio.play();
      }
    }

  });

});