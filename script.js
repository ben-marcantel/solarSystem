

const output = document.getElementById("planets");
const output2 = document.getElementById("planets2");
const output3 = document.getElementById("planets3");
const output4 = document.getElementById("words");


const   planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
   


planets.forEach(function send(planets) {
    output.innerHTML += planets.toString() + "  ";
});
    


   planets.forEach(function send (planets){
        output2.innerHTML  +=  planets.toString().charAt(0).toUpperCase() + planets.toString().slice(1) + " ";
   });


function sortItems(letterCombo){
    return planets.filter(function(search){
        return search.indexOf(letterCombo)> -1;
    })
}
output3.innerHTML += sortItems('e');



const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


output4.innerHTML = words.reduce(function(a,b){a + words});