const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//Need a function that grabs a random number out of characters, use math.random?
function randomPassGen1() {
    let randomPass = ""
    let pass1_el = document.getElementById("pass1_button")
    for (let i = 0; i < 15; i += 1) {
        let randomChar = Math.floor(Math.random() * characters.length);
        randomPass += characters[randomChar];
        pass1_el.innerText = randomPass
    }

}

function randomPassGen2() {
    let randomPass = ""
    let pass2_el = document.getElementById("pass2_button")
    for (let i = 0; i < 15; i += 1) {
        let randomChar = Math.floor(Math.random() * characters.length);
        randomPass += characters[randomChar];
        pass2_el.innerText = randomPass
    }

}



//Need listener on click on GenPass button, then push to .inner text of pass1&2 buttons


//need listen on click on both pass1&2 to click to copy to clipboard for each pass.
