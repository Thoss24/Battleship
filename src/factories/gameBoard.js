import Ship from "./ship";

class Gameboard {

    constructor(board) {
        this.board = board || []
        this.lastShot = {
            hit:false,
            loc:false
        }

        if (!this.board.length) this.setBoard()
    }

    setBoard() {
        for (let i = 0; i < 100; i++) {
            this.board.push({containsShip: false, isHit: false});
        }
    }

    receiveAttack(location) {
        this.board[location].isHit = true 

        if (this.board[location].containsShip) { // ai to determine next move
            this.board.lastShot.hit = true
            this.board.lastShot.loc = location
        }

        this.allShipsSunk()
    }

    checkHit(location) {
        return this.board[location].containsShip
    }

    placeShip(ship, location) {
        // method/function to check if place on board is free

        if (ship.isVertical) {
            for (let i = 0; i < ship.length; i++) {
                this.board[location + i * 10].ship = ship
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[location + i].containsShip = true
                this.board[location + i].ship = ship
            }
        } 
        return this.board
    }

    allShipsSunk() {
        let checker = arr => arr.every(x => x === true)

        let allShips = []

        for (let i = 0; i < this.board.length; i++) {
            if(Object.hasOwn(this.board[i], "ship")) allShips.push(this.board[i])
        }

        let isSunk = allShips.map(x => x === "sunk")

        return checker(isSunk)
    }
           
}

export default Gameboard