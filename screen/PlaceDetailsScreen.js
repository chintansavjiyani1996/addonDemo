import React from 'react';
import {Image, StyleSheet,StatusBar, Text, TouchableOpacity, View,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react";
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
            {this.renderMapButton()}
        </View>
        );
    }
    onPressMap=()=>{
      this.props.navigation.navigate("mapScreen")
    };


    renderMapButton=()=>{
      return(
          <TouchableOpacity onPress={this.onPressMap} style={{flex:0.1,backgroundColor:"blue",alignItems:"center",justifyContent: "center"}}>
              <Text style={{fontSize:20,color: "white"}}>Open In Map</Text>
          </TouchableOpacity>
      )
    };

    onPressGoBack=()=>{
      this.props.navigation.goBack()
    };

    renderHeader = () => {
        return (
            <View style={{flex: 0.1,paddingVertical:8, marginTop: StatusBar.currentHeight,flexDirection: "row",backgroundColor:"blue", alignItems: "center"}}>
                <TouchableOpacity onPress={this.onPressGoBack}>
                    <Image source={require('../assets/backArrow.png')} style={{height:23,marginHorizontal: 10,width:23,tintColor:"white",alignSelf: "center"}}/>
                </TouchableOpacity>
                <Text style={{color:"white",marginHorizontal: 10,fontSize: 22}}>Details</Text>
            </View>

        )
    };

    renderContent=()=>{
        return(
            <ScrollView style={{borderWidth: 1,marginVertical: 20,marginHorizontal: 20,borderRadius:4,flex:0.8}}>
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
