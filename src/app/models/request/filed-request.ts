import { Field } from '../filed';
import { Schedule } from '../schedule';
import { Weather } from '../weather';
import { Sensors } from '../sensors';

export class FiledRequest {
    statusCode: number;
    field: Field;
    schedule: Schedule;
    weather: Weather;
    sensors: Sensors;
}
