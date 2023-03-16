import Gameboard from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new Gameboard()
    }

    attack(location, board) {
        board.receiveHit(location) // Accessing the receiveHit mock function inside player.test.js
    }

    randomNumber(num) {
        return Math.floor(Math.random() * num)
    }

    ai(location, board) {
        for(let i = 0; i < board.length; i++) {
            if(i === location) return 
        }
    }
}

export default Player