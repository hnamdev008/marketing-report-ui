import { NgModule } from '@angular/core';
import { ApiClient, apiClientFactory } from './api-client';
import { HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';
import { MonHttpClientModule } from '@lib/http/http.module';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { ReportRepoRepo } from '@modules/endpoints/report/report/report.repo';

@NgModule({
    imports: [MonHttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        ReportRepoRepo,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
        {
            provide: ApiClient,
            useFactory: apiClientFactory,
            deps: [HttpHandler],
        }
    ],
})
export class ApiModule {}
