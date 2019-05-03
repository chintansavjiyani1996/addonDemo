import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList,AsyncStorag,Dimensions,StatusBar} from 'react-native';
import {demoData} from "../Demodata";


const deviceWidth = Dimensions.get('window').width

export default class DashboardScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderHeader()}
                {this.renderList()}
            </View>
        );
    }

    onPressItem=(item)=>{
      this.pops.naviation.navigate('placeDetails')
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={this.OnPressItem} style={{borderWidth: 1,marginVertical: 20,marginHorizontal: 20,borderRadius:4}}>
                <Text style={{fontSize:22,marginVertical:10,textAlign: "center"}}>
                    {item.title}
                </Text>
                <Image source={{uri:item.img}} style={{height:200 ,width:"100%"}}/>
                <Text>{item.description}
                </Text>
            </TouchableOpacity>
        )
    };

    _keyExtractor = (item, index) => index;

    renderList = () => {
        return (
            <View style={{flex: 0.9}}>
                <Text style={{fontSize: 26,textAlign: "center"}}>Visiting places</Text>
                <FlatList
                    data={demoData.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        )
    };

    onPressLogout = () => {
        AsyncStorage.clear();
        this.props.naviagtion.navigate("Auth")

    };

    renderHeader = () => {
        return (
            <View style={{flex: 0.1, flexDirection: "row",backgroundColor:"blue",marginTop:StatusBar.currentHeight , alignItems: "center",justifyContent: "space-between"}}>
                <Text style={{color:"white",fontSize:22,marginHorizontal: 20}}>Dashboard</Text>
                <TouchableOpacity onPress={this.onPressLogout}>
                    <Image source={require('../assets/logout.png')} style={{height:23,width:23,tintColor:"white",marginHorizontal: 20}}/>
                </TouchableOpacity>
            </View>

        )
    }

}