import React from 'react';
import {Image, StyleSheet, StatusBar, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
export default class PlaceDetailsScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderMapButton()}
            </View>
        );
    }

    onPressMap = () => {
        this.props.navigation.navigate("mapScreen")
    };


    renderMapButton = () => {
        return (
            <TouchableOpacity onPress={this.onPressMap} style={{
                flex: 0.1,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{fontSize: 20, color: "white"}}>Open In Map</Text>
            </TouchableOpacity>
        )
    };

    onPressGoBack = () => {
        this.props.navigation.goBack()
    };

    renderHeader = () => {
        return (
            <View style={styles.headerOuterViewStyle}>
                <TouchableOpacity onPress={this.onPressGoBack}>
                    <Image source={require('../assets/backArrow.png')} style={styles.backOuterViewStyle}/>
                </TouchableOpacity>
                <Text style={styles.headerTextStyle}>Details</Text>
            </View>

        )
    };

    renderContent = () => {
        return (
            <ScrollView style={{ flex: 0.8}}>
                <View style={styles.contentOuterViewStyle}>
                    <Text style={styles.titleTextStyle}>
                        {this.props.rootStore.dashboardStore.selectedPlace.title}
                    </Text>
                    <Image source={{uri: this.props.rootStore.dashboardStore.selectedPlace.img}}
                           style={styles.contentImageStyle}/>
                    <Text>{this.props.rootStore.dashboardStore.selectedPlace.description}
                    </Text>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerOuterViewStyle: {
        flex: 0.1,
        paddingVertical: 8,
        marginTop: StatusBar.currentHeight,
        flexDirection: "row",
        backgroundColor: "blue",
        alignItems: "center"
    },
    backOuterViewStyle: {
        height: 23,
        marginHorizontal: 10,
        width: 23,
        tintColor: "white",
        alignSelf: "center"
    },
    headerTextStyle: {
        color: "white",
        marginHorizontal: 10,
        fontSize: 22
    },
    contentOuterViewStyle: {
        borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 4,
    },
    titleTextStyle: {
        fontSize: 22,
        marginVertical: 10,
        textAlign: "center"
    },
    contentImageStyle: {
        height: 200,
        width: "100%"
    }
});
