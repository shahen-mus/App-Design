window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    

    //sound here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
            IDX = index;
        });
    });


    //function that creates bubbles
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };


    //functions for keyboard buttons
    let keys = [];
    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
        switch(e.keyCode) {
            case 65: { 
                sounds[0].currentTime = 0;
                sounds[0].play();
                createBubble(0);
                break;
            }
            case 83: { 
                sounds[1].currentTime = 0;
                sounds[1].play();
                createBubble(1);
                break;
            }
            case 68: { 
                sounds[2].currentTime = 0;
                sounds[2].play();
                createBubble(2);
                break;
            }
            case 70: { 
                sounds[3].currentTime = 0;
                sounds[3].play();
                createBubble(3);
                break;
            }
            case 71: { 
                sounds[4].currentTime = 0;
                sounds[4].play();
                createBubble(4);
                break;
            }
            case 72: { 
                sounds[5].currentTime = 0;
                sounds[5].play();
                createBubble(5);
                break;
            }
        } 
    });


    //function that has random background-color
    setInterval(function(){
        let x = Math.round( Math.random() * 255 );
        let y = Math.round( Math.random() * 255 );
        let z = Math.round( Math.random() * 255 );
        let bg = "background:rgb("+x+", "+y+", "+z+");";
        let element = document.getElementById("random-background");
        element.style = bg;
    }, 1000);


});