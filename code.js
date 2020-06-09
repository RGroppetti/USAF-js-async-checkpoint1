
var getType = input =>{
    var fs = require ("fs")
    let pokemonList = fs.readFileSync(input).toString().split('\n')

    pokemonList.forEach(pokemon => function(pokemon){
    fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemon)    
         .then(response => response.json())
         .then(function (inputPokemon){
             let returnPokemon = inputPokemon + ': '
             for(let i = 0; i<inputPokemon[types].length; i++){
                 if(inputPokemon[types].length <=1){
                     returnPokemon += inputPokemon['types'][i]['type']['name']
                 }
                 else if(inputPokemon[types].length > 1 && inputPokemon[types].length - 1 === i){
                     returnPokemon += inputPokemon['types'][i]['type']['name']
                 }
                 else{
                     returnPokemon += inputPokemon['types'][i]['type']['name'] + ', '
                 }
             }
             console.log(returnPokemon)
         })
    })
}
