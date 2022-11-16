import { SeatsEntity } from "./seats.vo";

export class RoomEntity {
    constructor(private name: string, private roomId: string, private seats: SeatsEntity) {}

    static factory(roomId: string, name: string, seatsNum: number) {

        return new RoomEntity(name, roomId, SeatsEntity.create(seatsNum))
    }
}