import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

//const SERVER = "http://localhost:3000/api/cookie";
const SERVER = "/api/cookie";

export interface CookieText {
    cookie: string;
}

@Injectable()
export class CookieService {
    constructor(private http: HttpClient) { }

    async getCookies(n:number): Promise<CookieText[]> {
        let params = new HttpParams().set('count', n.toString());
        const result = await this.http.get<any>(SERVER, {params: params})
            .toPromise();
        
        if(n == 1) {
            return [result as CookieText];
        }
        else {
            return result as CookieText[];
        }
    }
}