const chatbox = document.getElementById('chat_box');
const chatButton = document.getElementById('chat_button');
const participantbox = document.getElementById('participant_box');
const participantButton = document.getElementById('participant_button');
const expandButton = document.querySelector('#expand');
const videoGrid = document.getElementById('video-grid');
// console.log(videoGrid.children);
// console.log([... videoGrid.children]);


chatButton.addEventListener('click', function (e) {
    const display = chatbox.style.display === 'none' ? 'block' : 'none';
    chatbox.style.display = display;
    participantbox.style.display = 'none';
});


participantButton.addEventListener('click', function (e) {
    const display = participantbox.style.display === 'block' ? 'none' : 'block';
    participantbox.style.display = display;
    chatbox.style.display = 'none';
    console.log(display);
});


[... videoGrid.children].forEach( el => {
      el.addEventListener('click', function (e) {
        // console.log(e.target);
          
          if (el.id === e.target.id) {
              console.log(el.id);
              const name = el.id;

              if (el.id) {
                  
              }
          } 
    })


});