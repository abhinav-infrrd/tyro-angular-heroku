import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthService);
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    })
    return next.handle(modifiedRequest);
  }
}
