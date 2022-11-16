export class ScheduleInfoValueObject {
    constructor(private dateTime: Date) {}

    static factory(dateTime: Date) {
        return new ScheduleInfoValueObject(dateTime)
    }
}