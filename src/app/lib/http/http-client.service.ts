import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from './params';
import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class MonHttpClientService extends HttpClient {
    private urlPrefix: string | undefined;
    config: Config | undefined;

    constructor(handler: HttpHandler) {
        super(handler);
        this.setUrlPrefix();
        this.setConfig();
    }

    public setConfig(config?: Config): void {
        config = config || {
            headers: new HttpHeaders(),
        };
        this.config = config;
    }

    public setUrlPrefix(url: string = ''): void {
        this.urlPrefix = url;
    }

    public putObservable(
        url: string,
        body: any,
        options: Params = {}
    ): Observable<any> {
        if (options && options.headers) {
            options.headers = this.setHeaders(options.headers);
        }
        return super.put(this.urlPrefix + url, body, {
            ...this.config,
            ...options,
        } as any);
    }

    public putPromise(
        url: string,
        body: any,
        options: Params = {}
    ): Promise<any> {
        return this.putObservable(url, body, options)
            .toPromise()
            .catch((err) => {
                return Promise.reject(err || 'Server error');
            });
    }

    public patchObservable(
        url: string,
        body: any,
        options: Params = {}
    ): Observable<any> {
        if (options && options.headers) {
            options.headers = this.setHeaders(options.headers);
        }
        return super.patch(this.urlPrefix + url, body, {
            ...this.config,
            ...options,
        } as any);
    }

    public patchPromise(
        url: string,
        body: any,
        options: Params = {}
    ): Promise<any> {
        return this.patchObservable(url, body, options)
            .toPromise()
            .catch((err) => {
                return Promise.reject(err.error || 'Server error');
            });
    }

    public getObservable(url: string, options: Params = {}): Observable<any> {
        if (options && options.headers) {
            options.headers = this.setHeaders(options.headers);
        }
        return super.get(this.urlPrefix + url, {
            ...this.config,
            ...options,
        } as any);
    }

    public getPromise(url: string, options: Params = {}): Promise<any> {
        return this.getObservable(url, options)
            .toPromise()
            .catch((err) => {
                return Promise.reject(err || 'Server error');
            });
    }

    public postObservable(
        url: string,
        body: any,
        options: Params = {}
    ): Observable<any> {
        if (options && options.headers) {
            options.headers = this.setHeaders(options.headers);
        }
        return super.post(this.urlPrefix + url, body, {
            ...this.config,
            ...options,
        } as any);
    }

    public postPromise(
        url: string,
        body: any,
        options: Params = {}
    ): Promise<any> {
        return this.postObservable(url, body, options)
            .toPromise()
            .catch((err) => {
                return Promise.reject(err || 'Server error');
            });
    }

    public deleteObservable(
        url: string,
        options: Params = {}
    ): Observable<any> {
        if (options && options.headers) {
            options.headers = this.setHeaders(options.headers);
        }
        return super.delete(this.urlPrefix + url, {
            ...this.config,
            ...options,
        } as any);
    }

    public deletePromise(url: string, options: Params = {}): Promise<any> {
        return this.deleteObservable(url, options)
            .toPromise()
            .catch((err) => {
                return Promise.reject(err.error || 'Server error');
            });
    }

    protected setHeader(name: string, value: string): void {
        // @ts-ignore
        this.config.headers = this.config.headers.set(name, value);
    }

    protected setHeaders(optHeaders: HttpHeaders): HttpHeaders {
        // @ts-ignore
        let headers: HttpHeaders = this.config.headers;
        Object.keys(optHeaders).forEach((key: string) => {
            if (headers.has(key)) {
                headers = headers.delete(key);
            }
            // prettier-ignore
            const optHeaderValue = (optHeaders as unknown as Record<string, string>)[key];
            if (optHeaderValue != null) {
                headers = headers.append(key, optHeaderValue);
            }
        });
        return headers;
    }
}
