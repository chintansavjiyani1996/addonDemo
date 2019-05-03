import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class PlaceDetailsScreen extends React.Component {
    render() {
        return (
        <View style={{flex:1}}>
            {this.renderHeader()}
            {this.renderContent()}
        </View>
        );
    }

    renderHeader = () => {
        return (
            <View style={{flex: 0.1, flexDirection: "row",backgroundColor:"blue", alignItems: "center"}}>
                <TouchableOpacity onPress={this.onPressGoback}>
                    <Image source={require('../assets/logout.png')} style={{height:23,width:23,tintColor:"black"}}/>
                </TouchableOpacity>
                <Text>Details</Text>
            </View>

        )
    }

    renderContent=()=>{
        return(
            <View style={{borderWidth: 1,marginVertical: 20,marginHorizontal: 20,borderRadius:4}}>
                <Text style={{fontSize:22,marginVertical:10,textAlign: "center"}}>
                    {"Vastrapur lack"}
                </Text>
                <Image source={{uri:item.img}} style={{height:200 ,width:"100%"}}/>
                <Text>{item.description}
                </Text>
            </View>
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
