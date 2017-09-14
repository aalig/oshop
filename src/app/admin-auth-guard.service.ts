import { Observable } from 'rxjs/Rx';
import { UserService } from './user.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }
}
