class Gameboard {

    constructor(board) {
        this.board = board || []

        if (!this.board.length) this.setBoard()
    }

    setBoard() {
        for (let i = 0; i < 100; i++) {
            this.board.push({containsShip: false, isHit: false});
        }
    }

    receiveAttack(location) {
        this.board[location].isHit = true 
    }

    checkHit(location) {
        return this.board[location].containsShip
    }

    placeShip(location, ship, axis) {
        const shipLocation = []

        for (let i = 0; i < ship.length; i++) {
            if (axis === "x") {
                shipLocation.push(location + i)
            } else shipLocation.push(location + i * 10)
        } 
        return shipLocation
    }
    
        
}

export default Gameboard