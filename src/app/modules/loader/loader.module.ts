import { APP_INITIALIZER, NgModule } from '@angular/core';
import {LoaderService} from '@modules/loader/loader.service';
import {EndpointsModule} from '@modules/endpoints/endpoints.module';

// tslint:disable-next-line:typedef
export function init_app(appLoadService: LoaderService) {
    return () => appLoadService.initializeApp();
}

@NgModule({
    imports: [
        EndpointsModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        LoaderService,
        {
            provide: APP_INITIALIZER,
            useFactory: init_app,
            deps: [LoaderService],
            multi: true,
        },
    ],
})
export class LoaderModule {}
