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
    // console.log(el.className.split(" ")[1]);
    const elementId = el.className.split(" ")[1];

    // console.log([...el.children]);
    [...el.children].forEach(i => {
        // console.log([... i.children]);

        [...i.children].forEach(element => {
            console.log(element);

            // [...element.children].forEach(item => {
            //     console.log(item[1]);
            // })
        })
    })
});