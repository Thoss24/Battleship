import Gameboard from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new Gameboard()
    }

    attack(location, board) {
        board.receiveAttack(location)
    }
}

export default Player