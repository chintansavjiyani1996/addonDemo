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
    forgetPassWordStyle: {
        paddingLeft: 15,
        paddingBottom: 10,
        flexDirection:"row"
    },
    loginButtonStyle: {
        backgroundColor: "#00DC95",
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
    textInputOuterStyleDeActive:{
        margin: 15
    },
    loginTextStyle:{
        color: 'white',
        alignItems: "center",
        justifyContent: "center"
    }
});

export const IMAGE_HEIGHT = deviceWidth/9.2225;
export const IMAGE_WIDTH = deviceWidth/1.7;

export const IMAGE_HEIGHT_SMALL =  deviceWidth/13.833375;
export const IMAGE_WIDTH_SMALL = deviceWidth/2.55;
