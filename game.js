function computerPlay() {
    // returns random string from 'rock', 'paper', or 'scissors'
    
    //set up available options
    const options = ['Rock', 'Paper', 'Scissors'];

    //get random index value from array
    const randomIndex = Math.floor(Math.random() * options.length);

    //return random strig from array
    const selection = options[randomIndex];
    return selection;

}

