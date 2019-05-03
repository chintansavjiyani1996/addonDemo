import {AuthStore} from "./AuthStore";
import {DashboardStore} from "./DashboardStore";

export class RootStore{
    constructor()
    {
        this.authStore=new AuthStore(this);
        this.dashboardStore= new DashboardStore(this);
    }

}