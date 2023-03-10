class game {
    constructor(title,price,releaseDate) {
        this.title = title;
        this.price = price;
        this.releaseDate = releaseDate;
    }
}
function TESTING() {
    console.log("THIS IS A TEST")
}
let gameLot = [];

let newGame = new game("Harry Potter", 200, 1992)
gameLot.push(newGame);
newGame = new game( "Changes", 300, 1500);
gameLot.push(newGame);
console.log("ALOLOO");