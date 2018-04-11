import { RouterModule } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './dashboard.resolver';

const routers = [
    {
        path: '',
        component: DashboardComponent,
        resolve: {
            todos: DashboardResolver
        }
    },
    {
        path: 'demo1',
        component: Demo1Component
    },
    {
        path: 'demo2',
        component: Demo2Component
    }
];

export const appRouters = RouterModule.forRoot(routers);
