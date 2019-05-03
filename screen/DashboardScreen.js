import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList,AsyncStorag,Dimensions,StatusBar} from 'react-native';
import {demoData} from "../Demodata";
import {inject} from "mobx-react";


const deviceWidth = Dimensions.get('window').width;


@inject('rootStore')
export default class DashboardScreen extends React.Component {
    static navigationOptions ={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderList()}
            </View>
        );
    }

    onPressItem=({item})=>{
        this.props.rootStore.dashboardStore.setSelectVisitingPlace(item);
      this.props.navigation.navigate('placeDetails');
    };

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={this.onPressItem} style={styles.renderItemOuterViewStyle}>
                <Text style={styles.renderTitleStyle}>
                    {item.title}
                </Text>
                <Image source={{uri:item.img}} style={styles.renderItemImageStyle}/>
                <Text>{item.description}
                </Text>
            </TouchableOpacity>
        )
    };

    _keyExtractor = (item, index) => index;

    renderList = () => {
        return (
            <View style={styles.listOuterViewStyle}>
                <Text style={styles.listTextStyle}>Visiting places</Text>
                <FlatList
                    data={this.props.rootStore.dashboardStore.visitingPlaceList}
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
            <View style={styles.headerOuterViewStyle}>
                <Text style={styles.headerTextStyle}>Dashboard</Text>
                <TouchableOpacity onPress={this.onPressLogout}>
                    <Image source={require('../assets/logout.png')} style={styles.headerImageStyle}/>
                </TouchableOpacity>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerOuterViewStyle:{
        flex: 0.1,
        flexDirection: "row",
        backgroundColor:"blue",
        marginTop:StatusBar.currentHeight ,
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTextStyle:{
        color:"white",
        fontSize:22,
        marginHorizontal: 20
    },
    headerImageStyle:{
        height:23,
        width:23,
        tintColor:"white",
        marginHorizontal: 20
    },
    listOuterViewStyle:{
        flex: 0.9
    },
    listTextStyle:{
        fontSize: 26,
        textAlign: "center"
    },
    renderItemOuterViewStyle:{
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius:4
    },
    renderTitleStyle:{
        fontSize:22,
        marginVertical:10,
        textAlign: "center"
    },
    renderItemImageStyle:{
        height:200 ,
        width:"100%"
    }
});