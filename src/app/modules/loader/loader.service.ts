import { Injectable } from '@angular/core';
import { ApiClient } from '@modules/endpoints/report/api-client';



@Injectable()
export class LoaderService {
    constructor(
        private apiClient: ApiClient,
    ) {}

    initializeApp(): Promise<any> {
        return new Promise<any>((resolve: any, reject: any) => {
            this.apiClient.setHeader(
                'Authorization',
                'Bearer something something'
            );
            // TODO Remember to move to settings
            this.apiClient.setUrlPrefix(
                'https://domain.tld/api/'
            );
        });
    }
}
