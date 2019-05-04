import {StyleSheet, Dimensions,} from "react-native";

const window = Dimensions.get('window');

export const deviceHeight = window.height;
export const deviceWidth = window.width;

export const loginScreenStyles = StyleSheet.create({
    outerView: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loginInnerView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    imageOuterView: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    logoStyle: {
        height: deviceWidth/9.2225,
        width: deviceWidth/1.7
    },
    formOuterView: {
        flex: 0.7,
        width: "80%"
    },
    textInputStyle: {
        paddingLeft: 10,
        height: 40,
        borderColor: '#c3c3c3',
        borderWidth: 1,
        borderRadius: 6
    },
    textInputStyleActive: {
        paddingLeft: 10,
        height: 40,
        borderColor: 'rgb(144,150,158)',
        borderWidth: 1,
        borderRadius: 6,
    },
    loginButtonStyle: {
        backgroundColor: "blue",
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    textInputOuterStyleActive:{
        borderColor: "#bbb",
        borderWidth: 2,
        borderRadius: 8,
        margin: 15
    },
    loginTextStyle:{
        color: 'white',
        alignItems: "center",
        justifyContent: "center"
    }
});


