
let slideTimer = setInterval('Slide();', 3000);
let slideCount = 0;
let pos = 0;
let distance = -900;
function Slide() {
    slideCount++;
    pos += distance;
    if(slideCount >= 3) {
        slideCount = 0;
        pos = 0;
    }
    $('#slide').animate(
        {
            left: pos
        }, 320, 'swing');
} // Slide()

function SlideTo(val) {
    clearInterval(slideTimer); // clears timer
    slideCount = val;
    pos = slideCount * distance;
    $('#slide').animate(
        {
            left: pos
        }, 320, 'swing');
    slideTimer = setInterval('Slide();', 3000);
}