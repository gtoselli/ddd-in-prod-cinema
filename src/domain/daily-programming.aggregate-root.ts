import { MovieEntity } from "./movie.entity";
import { RoomEntity } from "./room.entity";
import { ScheduleInfoValueObject } from "./schedule-info.value-object";

export class DailyProgrammingAggregate {
    constructor(private room: RoomEntity, private movie: MovieEntity, private scheduleInfo: ScheduleInfoValueObject) {}

    static createFactory(room: RoomEntity, movie: MovieEntity, scheduleInfo: ScheduleInfoValueObject) {
        //TODO create invariants
        return new DailyProgrammingAggregate(room, movie, scheduleInfo)
    }

    public deleteCmd() {}

    public reserveSeatCmd() {}

    public bookSeatCmd() {}

}