import {API_COMMON_URL} from "../commonfunction";
import {Network} from "../Network";

export class userApi {
    loginApi(formData) {
        return Network.post(API_COMMON_URL + "/mahesh_test/objects.php", formData)
    }
}

export class dashboard {
    dashboardAPi() {
        return Network.get(API_COMMON_URL + "/mahesh_test/objects.php?function=dashboard")
    }

}


export default class Api {
    constructor() {
        this.userApi = new userApi();
        this.dashboard=new dashboard();
    }
}