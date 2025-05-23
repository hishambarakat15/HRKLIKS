import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://services.hrklix.com/';

  private readonly _httpClient = inject(HttpClient);

  createTenant(payload: any): Observable<string> {
    return this._httpClient
      .post(`${this.baseUrl}Tenant/CreateTenant`, payload, {
        responseType: 'text',
      })
      .pipe(
        map((response: string) => {
          const match = response.match(
            /Tenant .*? registered successfully.*? on port \d+/
          );
          return match ? match[0] : 'Unknown response format';
        })
      );
  }

  contactUsTenant(payload: any): Observable<string> {
    return this._httpClient.post(`${this.baseUrl}tenant/ContactUs`, payload, {
      responseType: 'text',
    });
  }

  createSubscription(payload: any): Observable<string> {
    return this._httpClient.post(`${this.baseUrl}tenant/Subscribe`, payload, {
      responseType: 'text',
    });
  }
}