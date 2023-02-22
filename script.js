let body = document.querySelector('body')
let link = document.querySelector('a')
let circleButton = document.querySelector('.circle');
let aboutText = document.querySelector('.text');

let colors = ['#1400FF','#F15623', '#F7D6FA', '#BC2739', '#09AF00', '#027AEB', '#943FE8', '#00DAA2','#FF1493']

let randomColor = colors[Math.floor(Math.random() * colors.length)];

circleButton.style.backgroundColor = randomColor

circleButton.onclick= function () {
    circleButton.style.width = '2000px';
    circleButton.style.height = '2000px';
    circleButton.style.top = 'calc(50% - 1000px)';
    circleButton.style.left = 'calc(50% - 1000px)';
    circleButton.style.transitionDuration = '3s';
    //figure out tming and delay

    if (randomColor == '#F7D6FA') {
        aboutText.style.mixBlendMode = 'difference';
        // aboutText.style.transitionDelay = '60ms';
        // aboutText.style.transitionDuration = '1.2s';

        // aboutText.style.color = 'black';
        // link.style.color = 'black';
    }


    // mix-blend-mode: darken;

    
    // if (randomColor == '#00DAA2') {
    //     aboutText.style.mixBlendMode = 'difference';
    //     // aboutText.style.transitionDelay = '60ms';
    //     // aboutText.style.transitionDuration = '1.2s';
    //     // aboutText.style.color = 'black';
    //     // link.style.color = 'black';
    // }

}
