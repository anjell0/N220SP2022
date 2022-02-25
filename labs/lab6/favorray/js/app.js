//Angelo Allen
//February 24, 2022
//N220-20816

let dvFaves = document.getElementById("faves")      //Line 5 creates the div element "faves"

let games = [ "Legend of Zelda: Minish Cap",        //Lines 7-11 create an array of video
              "Pokemon: Legends Arceus",            //game titles named "games"
              "Elder Scrolls V: Skyrim",            
              "A Dance of Fire and Ice",            
              "Persona 5" ];

for(i = 0; i < games.length; i++) {                 //Lines 13-22 create a loop that will
                                                    //print the current number value of "i"
let newEl = document.createElement("div")           //along with the current item in the 
                                                    //array "games" and a string following
newEl.innerHTML = i + 1 + ". " + games[i] +         //that says "is one of my favorite games!"
            " is one of my favorite games!"         //as many times as there are items in the
newEl.style.fontSize = "30px"                       //array

document.body.appendChild(newEl)
}