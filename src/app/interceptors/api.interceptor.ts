import { environment } from '../../environments/environment';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestURL = req.url;

    if (requestURL.indexOf('hereApi') !== -1) {
      requestURL = requestURL.replace('hereApi', environment.hereApi);
      const transformedReq = req.clone({
        url: requestURL,
        params: req.params.set(
          'apiKey',
          environment.hereApiKey
        )
      });
      return next.handle(transformedReq);
    }
    else if (requestURL.indexOf('weatherApi') !== -1) {
      requestURL = requestURL.replace('weatherApi', environment.weatherApi);
      const transformedReq = req.clone({
        url: requestURL,
        params: req.params.set(
          'appid',
          environment.weatherApiKey
        )
      });
      return next.handle(transformedReq);
    }

  }
}
