import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react";
import {toJS} from "mobx";
@inject('rootStore')
@observer
export default class PlaceDetailsScreen extends React.Component {
    static navigationOptions ={
        header:null
    };
    render() {
        return (
        <View style={{flex:1}}>
            {this.renderHeader()}
            {this.renderContent()}
        </View>
        );
    }

    onPressGoBack=()=>{
      this.props.navigation.goBack()
    };

    renderHeader = () => {
        return (
            <View style={{flex: 0.1, flexDirection: "row",backgroundColor:"blue", alignItems: "center"}}>
                <TouchableOpacity onPress={this.onPressGoBack}>
                    <Image source={require('../assets/logout.png')} style={{height:23,width:23,tintColor:"black"}}/>
                </TouchableOpacity>
                <Text>Details</Text>
            </View>

        )
    }

    renderContent=()=>{
        return(
            <ScrollView style={{borderWidth: 1,marginVertical: 20,marginHorizontal: 20,borderRadius:4,flex:0.9}}>
                <Text style={{fontSize:22,marginVertical:10,textAlign: "center"}}>
                    {this.props.rootStore.dashboardStore.selectedPlace.title}
                </Text>
                <Image source={{uri:this.props.rootStore.dashboardStore.selectedPlace.img}} style={{height:200 ,width:"100%"}}/>
                <Text>{this.props.rootStore.dashboardStore.selectedPlace.description}
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
