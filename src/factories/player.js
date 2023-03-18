
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
        let move = this.randomNumber(100)
        while(this.shots.includes(move)) {
            move = this.randomNumber(100)
        }
        this.shots.push(move)
        return move
    }

    randomBoardHit(board, loc) {

    }
}

export default Player