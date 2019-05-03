import {AuthStore} from "./AuthStore";

export class RootStore{
    constructor()
    {
        this.authStore=new AuthStore(this);
    }

}