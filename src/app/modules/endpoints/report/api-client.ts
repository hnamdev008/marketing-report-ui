import { HttpHandler, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { MonHttpClientService } from '@lib/http/http-client.service';
import { Config } from '@lib/http/config';

@Injectable()
export abstract class ApiClient extends MonHttpClientService {
    abstract setHeader(name: string, value: string): HttpHeaders;
    abstract setConfig(config?: Config): HttpHeaders;
    abstract setUrlPrefix(url: string): HttpHeaders;
}

export function apiClientFactory(handler: HttpHandler): MonHttpClientService {
    return new MonHttpClientService(handler);
}
