class Ship {

    constructor(length, isVertical = false) {
        this.hits = []
        this.length = length
        this.isVertical = isVertical
    }

    hit(hit) {
        this.hits.push(hit)
    }

    isSunk() {
        return this.hits.length === this.length 
    }
}

export default Ship