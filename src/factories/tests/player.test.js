import Gameboard from "../gameBoard";
import Ship from "../ship";
import Player from "../player";

describe("Player methods tests", () => {
    let gameBoard
    let ship
    let player

    beforeEach(() => {
        gameBoard = new Gameboard()
        ship = new Ship(4)
        player = new Player("Thomas")
    });

    test("Attack location", () => {
        expect(player.attack(1, gameBoard)).toBe([])
    });
})