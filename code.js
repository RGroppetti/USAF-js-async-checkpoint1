/* I have no idea how to do most of this and I can't figure it out with 
the time left, I dont know how to make a command line application, nor
how to process a file properly. As far a fetch goes I need to work on 
getting only the info needed.

all i could do was simulate if i could parse the info from a file
i know i would use .split("$\n") and put that into an array to iterate
through
after this point though i don't know how to just pull from "types"
*/

var input = "charizard ditto squirtle"
var pokemonNames = input.split(" ")
pokemonNames.push(input)


for(var i = 0; i < 1; i++){
    fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemonNames[i])
    //this is where i dont know what to do
     .then(response => response.json())
     .then(json => console.log(json))
     }

    