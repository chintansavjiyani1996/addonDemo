import {observable} from "mobx";

export class AuthStore {


    @observable loginFormData={
        email:"",
        password:""
    }

}