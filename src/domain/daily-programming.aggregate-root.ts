import { MovieEntity } from './movie.entity';
import { RoomId } from './room-id.vo';
import { RoomEntity } from './room.entity';
import { MovieId } from './movie-id.vo';

export class DailyProgrammingAggregate {
    constructor(private room: RoomEntity, private movie: MovieEntity) {}

    static factory(
        roomId: RoomId,
        roomName: string,
        roomSeatsNum: number,
        movieId: MovieId,
        movieTitle: string,
        movieDateTime: Date,
    ) {
        //TODO create invariants
        const room = RoomEntity.factory(roomId, roomName, roomSeatsNum);
        const movie = MovieEntity.factory(movieId, movieTitle, movieDateTime);
        return new DailyProgrammingAggregate(room, movie);
    }

    public deleteCmd() {}

    public reserveSeatCmd() {}

    public bookSeatCmd() {}
}
