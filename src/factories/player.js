
class Player {
    constructor(name) {
        this.name = name
        this.shots = []
    }

    attack(location, board) {
        board.receiveHit(location) // Accessing the receiveHit mock function inside player.test.js
    }

    randomNumber(num) {
        return Math.floor(Math.random() * num)
    }

    randomMove() {
        let move = this.randomNumber(100) // move == random number less than 100 
        while(this.shots.includes(move)) { // while move exists inside shots array
            move = this.randomNumber(100) // move == another random number less than 100 
        }
        this.shots.push(move)  
        return move
    }

    randomBoardHit(lastHit) {
        if (lastHit.hit) { // if Gameboard.lastHit.hit === true execute getMove function
            const getMove = (lastHit) => {
                let randomNum = this.randomNumber(4) // random number less than 4
                let nextMove; // variable to assign value of next move
                // conditions to assign lastHit.loc (location of last attempted hit) depending on value of the randomNum variable
                if (randomNum === 0) nextMove = lastHit.loc + 1; 
                if (randomNum === 1) nextMove = lastHit.loc - 1;
                if (randomNum === 2) nextMove = lastHit.loc + 10;
                if (randomNum === 3) nextMove = lastHit.loc - 10;

                return nextMove
            }
        }
    }
}

export default Player