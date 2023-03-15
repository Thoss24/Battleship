import Gameboard from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new Gameboard()
    }

    attack(location, board) {
        board.receiveHit(location)
    }
}

export default Player