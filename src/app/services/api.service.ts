import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
const API_URL = environment.backendSvcURL;

@Injectable()

export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }


  get(url: string, headers?: HttpHeaders, params?: HttpParams, active?: boolean, other?: boolean): Observable<any> {
    if (!other) {
      return this.http.get(API_URL + url, { headers: headers, params }).pipe(map((resp: any) => this.handleErrors(resp, active)));
    } else {
      return this.http.get(url, { headers: headers, params }).pipe(map((resp: any) => this.handleErrors(resp, active)));
    }
  }

  post(url: string, body?: object, headers?: HttpHeaders, active?: boolean): Observable<any> {
    return this.http.post(API_URL + url, body, { headers: headers }).pipe(map((resp: any) => this.handleErrors(resp, active)));
  }

  bagmakers(url: string, body?: object, headers?: HttpHeaders, active?: boolean): Observable<any> {
    return this.http.post(url, body, { headers: headers }).pipe(map((resp: any) => this.handleErrors(resp, active)));
  }

  // get(url: string, headers?: HttpHeaders, params?: HttpParams, ): Observable<any> {
  //   return this.http.get(API_URL + url, { headers: headers, params }).map((resp: any) =>
  //     this.handleSuccess(resp, active)).catch(err => this.handleErrors(err));
  // }

  // post(url: string, body?: object, headers?: HttpHeaders, active?: boolean): Observable<any> {
  //   return this.http.post(API_URL + url, body, { headers: headers }).map((resp: any) =>
  //     this.handleSuccess(resp, active)).catch(err => this.handleErrors(err));
  // }

  // put(url: string, body?: object, headers?: HttpHeaders, params?: HttpParams,active?: boolean): Observable<any> {
  //   return this.http.put(API_URL + url, body, { headers: headers, params }).map((resp: any) => this.ErrorHandler(resp,active));
  // }

  // delete(url: string, body?: object, headers?: HttpHeaders, params?: HttpParams,active?: boolean ): Observable<any> {
  //   return this.http.delete(API_URL + url, body).map((resp: any) => this.ErrorHandler(resp,active));
  // }

  private handleSuccess(resp: any, active: boolean) {
    if (!resp.status && !resp && !active) {
      // this.ToastrService.error(resp.message, 'error');
    }
    return resp;
  }

  private handleErrors(resp: Response, active: boolean) {
    // switch (resp.status) {
    //   case 400:
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     break;
    //   case 401:
    //     // Token Expired OR Unauthorized Access
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     // this.router.navigate(['/lock']);
    //     break;
    //   case 403:
    //     // Forbidden
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     break;
    //   case 404:
    //     // Resource Not Found
    //     console.log(resp['message']);
    //    if(resp['error']){
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //    }
    //    else{
    //     this.ToastrService.error(resp['message'], 'Error');
    //    }

    //     break;
    //   case 422:
    //     // Resource Not Found
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     break;
    //   case 429:
    //     // Too Many Requests
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     break;
    //   case 440:
    //     // this.router.navigate(['/logout']);
    //     break;
    //   case 500:
    //     // Internal Server Error
    //     this.ToastrService.error(resp['error'].message, 'Error');
    //     break;
    //   default:
    //     if (!resp && !resp.status && !active) {
    //       this.ToastrService.error(resp['message'], 'error');
    //     }
    //     break;
    // }

    return resp
  }

}
