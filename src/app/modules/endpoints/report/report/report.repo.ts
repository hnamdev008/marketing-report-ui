import { HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '@models/report.model';
import { ApiClient } from '@modules/endpoints/report/api-client';

@Injectable()
export class ReportRepoRepo {
    constructor(private client: ApiClient) {}

    get(reportId: number): Promise<Report[]> {
        return this.client
            .getPromise(`reports/${reportId}`)
            .then(this.toModels.bind(this));
    }

    private toModels(models: Report[]): Report[] {
        for (let i = 0; i < models.length; i++) {
            models[i] = this.toModel(models[i]);
        }

        return models;
    }

    private toModel(model: Report): Report {
        return new Report(model);
    }
}
