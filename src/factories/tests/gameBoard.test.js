import Gameboard from "../gameBoard";
import Ship from "../ship";

describe('Gameboard', () => {
    let gameBoard
    let ship

    beforeEach(() => {
        gameBoard = new Gameboard()
        ship = new Ship(4)
    });

    test('Initialize board', () => {
        const boardArr = []

        for (let i = 0; i < 100; i++) {
            boardArr.push({containsShip: false, isHit: false});
        };

        expect(gameBoard.board).toEqual(boardArr); 
    });

    test("Receive hit", () => {
        gameBoard.receiveAttack(20)
        expect(gameBoard.board[20].isHit).toBe(true)
    });

    test("Check miss", () => {
        expect(gameBoard.checkHit(25)).toBe(false)
    });

    test("Check hit", () => {
        gameBoard.board[25].containsShip = true
        expect(gameBoard.checkHit(25)).toBe(true)
    });

    test("Place ship method", () => {
        expect(gameBoard.placeShip(ship, 0)).toEqual(gameBoard.board)
    });

    test("All ships are not sunk", () => {
        gameBoard.placeShip(ship, 0)
        expect(gameBoard.allShipsSunk()).toBe(false)
    });

    test("All ships are sunk", () => {
        gameBoard.placeShip(ship.sunk = true, 0)
        expect(gameBoard.allShipsSunk()).toBe(true)
    });
    
    

})