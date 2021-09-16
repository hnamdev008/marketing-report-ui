import { NgModule } from '@angular/core';
import { ApiModule } from './report/api.module';

@NgModule({
    imports: [ApiModule],
    exports: [ApiModule],
    declarations: [],
    providers: [],
})
export class EndpointsModule {}
