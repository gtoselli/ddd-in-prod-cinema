export class SeatsEntity {
    constructor(private seats: {seatId: string, isBooked: boolean, isReserved: boolean}[]) {}

    static create(num: number) {
        const seats = Array.from({length: num}, (_, i) => ({seatId: i.toString(), isBooked: false, isReserved: false}))
        return new SeatsEntity(seats)
    }
}