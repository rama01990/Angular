import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";

export class InterceptiorService implements HttpInterceptor{
    APIKey='caff1b99472c4d24a0c85842211407'
    intercept(req: HttpRequest<any>,next : HttpHandler){
        const resNew= req.clone({params: req.params.append('key',this.APIKey)})
        return next.handle(resNew)
    }
}