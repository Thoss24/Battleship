class Ship {

    constructor(length) {
        this.hits = []
        this.length = length
    }

    hit(hit) {
        this.hits.push(hit)
    }

    isSunk() {
        return this.hits.length === this.length 
    }
}

export default Ship