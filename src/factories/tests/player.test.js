import Ship from "../ship";
import Player from "../player";
import Gameboard from "../gameBoard";

describe("Player methods tests", () => {
    let enemyGameBoard
    let myBoard
    let ship
    let player

    beforeEach(() => {
        ship = new Ship(4)
        player = new Player("Thomas")
        myBoard = new Gameboard()

        // mock opponent board
        enemyGameBoard = {
            enemyBoard: [],
            receiveHit: jest.fn((location) => { 
                enemyGameBoard.enemyBoard[location] = "miss" // Mock function to emulate board hit/ missing a ship
            }),
            returnOpponentBoard: jest.fn(() => {
                return enemyGameBoard.enemyBoard
            })
        };

        const opponentBoard = []
        for (let i = 0; i < 100; i++) {
            opponentBoard.push("Empty")
        }
        enemyGameBoard.enemyBoard = opponentBoard
    });

    test("Attack location", () => {
        player.attack(1, enemyGameBoard)
        expect(enemyGameBoard.receiveHit.mock.calls.length).toBe(1)
    });

    test("Player name", () => {
        expect(player.name).toBe("Thomas")
    });

    test("random number", () => {
        expect(player.randomNumber(1)).toBe(0)
    });

    test("ai", () => {
        expect(player.ai(25, myBoard)).toBe([])
    })

  
})