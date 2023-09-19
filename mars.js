alert('Hello!');
alert('Starting your Mars adventure now!');
alert('Booting up...');
alert("All systems ready");
alert("Let's start!!!");

//user input
let username = prompt('Hello what is your name?');

alert ('Hello ' + username + ' Welcome to our first Mars adventure');
alert('Yesterday you were contacted by NASA. They need someone to go to Mars!');

//Excited block

let excitedInput = prompt('Are you excited? Type Y or N');
excitedInput = excitedInput.toUpperCase();
excitedInput = excitedInput.trim()
if (excitedInput.startsWith("Y")){
    alert('Alright lets go!')
} else {
    alert ('Well you better get excited!')
};
let packing = prompt('How many suitcases do you plan on bringing?')
if(packing > 2){
    alert('That seems like a little much to me... please pack lighter')
} else {
    alert('Perfect keeping the ship nice and light')
};

//Companion input

alert("You're allowed to bring one companion animal with you.")
let companionType = prompt('what kind of animal would you like to bring?')
let companionName = prompt("what is your companion's name?")
let firstLetter = companionName[0]
console.log(firstLetter);
firstLetter = firstLetter.toUpperCase()
let otherLetters = companionName.slice(1);
console.log(otherLetters);
otherLetters = otherLetters.toLowerCase()
console.log(otherLetters)
companionName = firstLetter + otherLetters
alert("Cool, so you're bringing " + companionName + " the " + companionType);

//Design of ship inputs

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Boring and grey
B  Sporty
C  Red just red....
`);
let interiorDesign = prompt('which one are you picking?')
interiorDesign = interiorDesign.toUpperCase()
let decor
if (interiorDesign === 'A'){
    decor = 'Boring and grey'
} else if (interiorDesign === 'B'){
    decor = "Sporty"
  }  else if (interiorDesign ==='C') 
    decor = 'Red just red'

//Diffrent planet outcomes (but not really)

let planet = prompt('Did you want to go to another planet? Y or N?')
planet = planet.toUpperCase();
planet = planet.trim()
if (planet.startsWith ("Y")){
    planet = prompt('which planet do you want to go to?')

} else { alert ("Good it's the best one anyways")}

planet = planet.toUpperCase();
planet = planet.trim()

if (planet.startsWith ('S')){
    alert ('that ship left last week!')
} else if (planet.startsWith("ME")){
    alert ("It's the wrong season for Mercury")
}else{alert ('Just trust me Mars is way more interesting')}

//final alert prior to count down aka info dump

alert(`${username} and ${companionName}, surfing the celestrial abyss, in a ${decor} spaceship.`)

//countdown timer

let temp = 0
while (temp <= 1200) {
    alert (`tempeture rising ${temp}`);
  temp += 100;
}


let timer = 5
while (timer > 0) {
    alert(`${timer}...`)
    timer -= 1
}
alert('*** LIFTOFF ***')