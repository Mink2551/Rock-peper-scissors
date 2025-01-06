const callRock = document.getElementById("rock")
const callPaper = document.getElementById("paper")
const callScissor = document.getElementById("scissor")
const display = document.getElementById("display")
const callStart = document.getElementById("start")
const RPS = ["✊","✋","✌️"]

display.value = "press start..."

callPaper.disabled = true
callRock.disabled = true
callScissor.disabled = true

const game_1 = () => {
    display.value="Ready?"
    callStart.disabled = true
    setTimeout(() => {
        display.value="3"
    }, 1500);
    setTimeout(() => {
        display.value="2"
    }, 2500);
    setTimeout(() => {
        display.value="1"
    }, 3500);
    setTimeout(() => {
        for (let i = 0; i <= 10; i++) {
            setTimeout(() => {
                display.value = RPS[Math.floor(Math.random() * 3)];
            }, i * 100); 
        }
    }, 4300); 
    setTimeout(() => {
        display.value="?"
    }, 5500); 
    setTimeout(() => {
        display.value="? W"
    }, 6000);     
    setTimeout(() => {
        display.value="? Wa"
    }, 6250);   
    setTimeout(() => {
        display.value="? Wai"
    }, 6500);   
    setTimeout(() => {
        display.value="? Wait"
    }, 6750);   
    setTimeout(() => {
        display.value="? Waiti"
    }, 7000);  
    setTimeout(() => {
        display.value="? Waitin"
    }, 7250);   
    setTimeout(() => {
        display.value="? Waiting"
    }, 7500);
    setTimeout(() => {
        display.value="? Waiting."
    }, 7750);  
    setTimeout(() => {
        display.value="? Waiting.."
        callPaper.disabled = false
        callRock.disabled = false
        callScissor.disabled = false
    }, 8000);  
    
}

const checkcall = (e) => {
    callPaper.disabled = true
    callRock.disabled = true
    callScissor.disabled = true
    if (e == 1) {
        game_2(RPS[0])
    } else if (e == 2) {
        game_2(RPS[1])
    } else if (e == 3) {
        game_2(RPS[2])
    }
}

const changeRPS = (e) => {
    if (e == RPS[0]) {
        return 1
    } else if (e == RPS[1]) {
        return 2
    } else {
        return 3
    }
}

const checkWin = (e,a) => {
    const Event = changeRPS(e)
    const Ai = changeRPS(a)

    if (Event == Ai) {
        return "Draw.."
    } else if (
        (Event == 1 && Ai == 2) ||
        (Event == 2 && Ai == 3) ||
        (Event == 3 && Ai == 1) 
    ) {
        return "AI Won!!"
    } else {
        return "You Won!!"
    }
}

const game_2 = (e) => {
    let ai_choice = RPS[Math.floor(Math.random() * 3)]
    display.value="You Choice ...?"
    setTimeout(() => {
        display.value = "P : " + e
    }, 1000);  
    setTimeout(() => {
        display.value = "P : " + e + " VS "
    }, 2000); 
    setTimeout(() => {
        display.value = "P : " + e + " VS " + ai_choice + " : AI"
    }, 3000);  

    setTimeout(() => {
        let win = checkWin(e, ai_choice) 
        display.value = win
    }, 5000);
    setTimeout(() => {
        location.reload()
    }, 6000);
}