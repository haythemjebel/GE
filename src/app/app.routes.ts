import { EventComponent } from './pages/event/event.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GestionUserComponent } from './pages/gestion-user/gestion-user.component';
import {HomeComponent} from "./pages/home/home.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: GestionUserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
  
];