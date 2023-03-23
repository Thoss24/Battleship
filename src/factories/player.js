
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

            let newMove = getMove(lastHit) // newMove === getMOve function which returns random location on board

            if (this.shots.includes(newMove) || newMove > 99 || newMove < 0) { // if newMove is larger or less than length of board re-initialize newMOve to equal getMove to produce a new board hit location
                newMove = getMove(lastHit)
            }

        }
    }
}

export default Player