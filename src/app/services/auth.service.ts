import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { SocketService } from './socket.service';
// import { ChecktokenService } from './checktoken.service';
// import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Injectable()

export class OwnAuthService {

  subscription: Subscription;

  private isLoggedInSubject: BehaviorSubject<boolean>;
  private isLoggedInObservable: Observable<boolean>;


  private currentUserSubject = new BehaviorSubject<any>(new Object());
  private currentUserObservable = this.currentUserSubject.pipe(distinctUntilChanged());

  constructor(private router: Router, private apiService: ApiService,
  ) {

    const source = interval(10000);
    this.subscription = source.subscribe(val => this.init());

    // this.isLoggedInSubject = new BehaviorSubject<boolean>(!!this.jwtSvc.getAccessToken());
    // this.isLoggedInObservable = this.isLoggedInSubject.pipe(distinctUntilChanged());
  }

  init() {
    // if (this.jwtSvc.getAccessToken()) {
    //   this.checktoken.expireToken();
    // }
    // this.jwtSvc.getAccessToken() ? this.checktoken.expireToken() : this.logout();
  }

  // populate() {
  //   if (this.jwtSvc.getAccessToken()) {
  //     this.socketService.socketInit();
  //     this.checktoken.checkToken();
  //   }
  // }

  // setAuth(access_token): void {
  //   this.isLoggedInSubject.next(true);
  //   this.jwtSvc.saveAccessToken(access_token);
  //   this.populate();
  // }

  setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
  }

  getcurrentUser(): Observable<any> {
    return this.currentUserObservable;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInObservable;
  }

  // purgeAuth(): void {
  //   this.jwtSvc.destroyAccessToken();
  //   this.currentUserSubject.next(new Object());
  //   this.isLoggedInSubject.next(false);
  //   this.socketService.logout();
  //   this.checktoken.unSubscribeToKeepAliveToken();
  //   this.router.navigate(['/login']);
  // }

  logout() {
    // this.purgeAuth();
  }

  postapiurl(apiname, payload?: any | null, headers?: any | null, active: boolean = false) {
    return this.apiService.post(apiname, payload, headers, active)
  }

  getapiurl(apiname, headers?: any | null, params?: any | null, active: boolean = false) {
    return this.apiService.get(apiname, headers, params, active);
  }

  getnewapiurl(apiname, headers?: any | null, params?: any | null, active: boolean = false) {
    return this.apiService.get(apiname, headers, params, active, true);
  }

}
