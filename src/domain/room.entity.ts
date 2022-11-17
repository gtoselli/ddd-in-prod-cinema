import { RoomId } from "./room-id.vo";
import { SeatsEntity } from "./seats.vo";

export class RoomEntity {
    constructor(private roomId: RoomId, private name: string, private seats: SeatsEntity) { }

    static factory(roomId: RoomId, name: string, seatsNum: number) {
        return new RoomEntity(roomId, name, SeatsEntity.create(seatsNum))
    }
}