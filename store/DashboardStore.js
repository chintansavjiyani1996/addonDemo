import {observable, action} from "mobx";
import Api, {dashboard} from "../Api/Api";

export class DashboardStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api=new Api();
    }

    @observable visitingPlaceList = [];
    @observable selectedPlace = {};

    @action
    getDashBoardData() {
    this.api.dashboard.dashboardAPi().then((response)=>{
        this.visitingPlaceList=response.data;
    }).catch((error)=>{
        console.log(error)
    })
    }

    @action
    setSelectVisitingPlace(item) {
        this.selectedPlace = item
    }

}