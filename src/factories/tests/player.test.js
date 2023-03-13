import Gameboard from "../gameBoard";
import Ship from "../ship";
import Player from "../player";

describe("Player methods tests", () => {
    let gameBoard
    let ship
    let player

    beforeEach(() => {
        // mock opponent board
        gameBoard = {
            enemyBoard: [],
            receiveAttack: jest.fn((location) => {
                
            })
        }
        ship = new Ship(4)
        player = new Player("Thomas")
    });

    test("Attack location", () => {
        player.attack(1, gameBoard)
        expect(gameBoard.receiveAttack(1)).toBe([])
    });
})