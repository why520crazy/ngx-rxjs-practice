import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { FetchTodo } from './todo.state';

@Injectable()
export class DashboardResolver implements Resolve<any> {
    constructor(
        private store: Store
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.store.dispatch(new FetchTodo());
    }
}
