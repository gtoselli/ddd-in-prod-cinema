import { MovieEntity } from "./movie.entity";
import { RoomEntity } from "./room.entity";

export class DailyProgrammingAggregate {
    constructor(private room: RoomEntity, private movie: MovieEntity) {}

    static factory(roomId: string, roomName: string, roomSeatsNum: number, movieId: string, movieTitle: string, movieDateTime: Date) {
        //TODO create invariants

        const room = RoomEntity.factory(roomId, roomName, roomSeatsNum)
        const movie = MovieEntity.factory(movieId, movieTitle, movieDateTime)
        return new DailyProgrammingAggregate(room, movie)
    }

    public deleteCmd() {}

    public reserveSeatCmd() {}

    public bookSeatCmd() {}

}