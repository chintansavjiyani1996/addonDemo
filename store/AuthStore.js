import {observable, action, toJS} from "mobx";
import Api from "../Api/Api";
import {AsyncStorage} from "react-native";

export class AuthStore {

    @observable loginFormData = {
        function:'login',
        email: "",
        password: ""
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
       let data= new FormData();
        data.append("mail_id",this.loginFormData.email.toLowerCase());
        data.append("password",this.loginFormData.password);
        data.append("function",this.loginFormData.function);
        this.api.userApi.loginApi(data).then((response)=>{
            AsyncStorage.setItem("userToken","token");
            callback(true)
        }).catch((error)=>{
            console.log(error)
        });
    }

}