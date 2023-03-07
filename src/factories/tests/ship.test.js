import Ship from "../ships";

describe('Ship', () => {
    let ship

    beforeEach(() => {
        ship = new Ship(4)
    });

    test('Create ship', () => {
        expect(ship).toEqual({
            length: 4,
            hits: []
        });
    });
})