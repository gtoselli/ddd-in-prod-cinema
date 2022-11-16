import { ScheduleInfoValueObject } from "./schedule-info.vo";

export class MovieEntity {
    constructor(private movieId: string, private title: string, private scheduleInfo: ScheduleInfoValueObject) {}

    static factory(movieId: string, title: string, dateTime: Date) {
        const scheduleInfo = ScheduleInfoValueObject.factory(dateTime)
        
        return new MovieEntity(movieId, title, scheduleInfo)
    }
}