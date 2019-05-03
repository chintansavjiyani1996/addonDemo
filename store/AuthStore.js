import {observable, action, toJS} from "mobx";
import Api from "../Api/Api";

export class AuthStore {

    @observable loginFormData = {
        function:'login',
        email: "mitesh@addonwebsolutions.com",
        password: "12345"
    };

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api=new Api();
    }

    @action
    onChangeLoginFormData(name, value) {
        this.loginFormData[name] = value;
    }

    @action
    onLogin(callback) {
        this.api.userApi.loginApi(toJS(this.loginFormData)).then((response)=>{
            callback()
        }).catch((error)=>{
            console.log(error)
        });
    }

}