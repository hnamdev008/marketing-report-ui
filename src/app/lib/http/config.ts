import { HttpHeaders } from '@angular/common/http';

export interface Config {
    headers?: HttpHeaders;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
}
