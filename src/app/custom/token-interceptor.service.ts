import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(public authService:AuthServiceService) { }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> 
  {//5555 de7k
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}