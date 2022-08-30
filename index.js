var submitBtn = document.getElementById('searchButton');
const form = document.querySelector('form');
var search = document.getElementById('search')


var mainContent = document.getElementsByClassName('mainContent')
// Details about the pokemon
var pokeImage = document.getElementById('pokemonImage');
var pokeImage2 = document.getElementById('pokemonImage2');
var pokeName = document.getElementById('pokeName');
var pokeTypeOne = document.getElementById('pokeTypeOne');
var pokeTypeTwo = document.getElementById('pokeTypeTwo');
var pokeWeight  = document.getElementById('weight');




var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

submitBtn.addEventListener("click", function obtainPokemon(){
    console.log('button clicked')
    text = search.value
    // resets text box back to clear after submission
    search.value = text.innerHTML = "";

    // obtains data from the pokemon API
    fetch(`${pokemonAPI}${text}`).
    then((response) => response.json()).then((data) => {
            console.log(data)

            // Extracts data from json file into js variabels
            var pokemonName = data.name;
            var pokemonId = data.id
            var pokemonImage = data.sprites.front_default
            var pokeImage2 = data.sprites.back_default
            var pokemonTypeone = data.types[0].type.name
            var hp = data.stats[0].base_stat;
            var atk = data.stats[1].base_stat;
            var def = data.stats[2].base_stat
            var spd = data.stats[5].base_stat
            var weightOfPokemon = data.weight


            var tmOne = data.moves[0].move.name
            var tmTwo = data.moves[1].move.name
            var tmThree = data.moves[2].move.name
            var tmFour = data.moves[3].move.name
            var tmFive = data.moves[4].move.name
            var tmSix = data.moves[5].move.name
            var tmSeven = data.moves[6].move.name
            var tmEight = data.moves[7].move.name
            var tmNine = data.moves[8].move.name

            var moveOne = document.querySelector('.MoveOne') .innerHTML = tmOne
            var moveTwo = document.querySelector('.MoveTwo') .innerHTML = tmTwo
            var moveThree = document.querySelector('.MoveThree') .innerHTML = tmThree;
            var moveFour = document.querySelector('.MoveFour') .innerHTML = tmFour
            var moveFive = document.querySelector('.MoveFive') .innerHTML = tmFive
            var moveSix = document.querySelector('.MoveSix') .innerHTML = tmSix
            var moveSeven = document.querySelector('.MoveSeven') .innerHTML = tmSeven
            var moveEight = document.querySelector('.MoveEight') .innerHTML = tmEight


console.log(tmNine)
            var pokemonTypetwo = data.types[1].type.name
            
    
    // Attaches the data from the JSON file into the front end aspect of the application

        var NameOfPokemon = document.querySelector('.pokeName') .innerHTML = pokemonName.toUpperCase() 
        var imageOfPokemon = document.querySelector('#pokemonImage').src = pokemonImage
        var imageOfPokemon2 = document.querySelector('#pokemonImage2').src = pokeImage2
        var pokemonFirstType = document.querySelector('.pokeTypeOne').innerHTML = pokemonTypeone.toUpperCase() 
        var pokemonSecondType = document.querySelector('.pokeTypeTwo').innerHTML = pokemonTypetwo;
        var healthPoints = document.querySelector('.HP').innerHTML = "HP: " + hp
        var attackPoints = document.querySelector('.ATK').innerHTML = "ATK: " + atk
        var defencePoints = document.querySelector('.DEF').innerHTML = "DEF: " +def
        var speedPoints = document.querySelector('.SPD').innerHTML = "SPD " + spd

        var pokemonWeight = document.querySelector('.weight').innerHTML = weightOfPokemon + " KG"

        






    })
})
