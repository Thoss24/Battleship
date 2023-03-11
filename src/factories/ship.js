class Ship {

    constructor(length, isVertical = false, sunk = false) {
        this.hits = []
        this.length = length
        this.isVertical = isVertical
        this.sunk = sunk
    }

    hit(hit) {
        this.hits.push(hit)
    }

    isSunk() {
        if (this.hits === this.length) this.sunk = true
    }
}

export default Ship