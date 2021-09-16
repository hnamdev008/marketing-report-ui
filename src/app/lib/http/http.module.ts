import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MonHttpClientService } from './http-client.service';


@NgModule({
    imports: [HttpClientModule],
    declarations: [],
    exports: [],
    providers: [MonHttpClientService],
})
export class MonHttpClientModule {}
