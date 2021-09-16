import {ReportInterface} from './interfaces/report.interface';

export class Report implements ReportInterface {
    constructor(report?: ReportInterface) {
        Object.assign(this, report);
    }
}
