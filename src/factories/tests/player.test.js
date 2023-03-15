import Gameboard from "../gameBoard";
import Ship from "../ship";
import Player from "../player";

describe("Player methods tests", () => {
    let gameBoard
    let ship
    let player

    beforeEach(() => {
        ship = new Ship(4)
        player = new Player("Thomas")

        // mock opponent board
        gameBoard = {
            enemyBoard: [],
            receiveHit: jest.fn((location) => { 
                gameBoard.enemyBoard[location] = "miss" // Mock function to emulate board hit/ missing  a ship
            }),
            returnOpponentBoard: jest.fn(() => {
                return gameBoard.enemyBoard
            })
        };

        const opponentBoard = []
        for (let i = 0; i < 100; i++) {
            opponentBoard.push("Empty")
        }
        gameBoard.enemyBoard = opponentBoard
    });

    test("Attack location", () => {
        player.attack(1, gameBoard)
        expect(gameBoard.receiveHit.mock.calls.length).toBe(1)
    });
})