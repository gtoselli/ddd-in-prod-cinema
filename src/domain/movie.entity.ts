import { ScheduleInfoValueObject } from './schedule-info.vo';
import { MovieId } from './movie-id.vo';

export class MovieEntity {
    constructor(private movieId: MovieId, private title: string, private scheduleInfo: ScheduleInfoValueObject) {}

    static factory(movieId: MovieId, title: string, dateTime: Date) {
        const scheduleInfo = ScheduleInfoValueObject.factory(dateTime);

        return new MovieEntity(movieId, title, scheduleInfo);
    }
}
