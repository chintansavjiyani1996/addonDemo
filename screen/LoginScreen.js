import React from "react";
import {
    View,
    Text,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    AsyncStorage,
    KeyboardAvoidingView,
    StatusBar,
    TextInput, SafeAreaView, ActivityIndicator
} from "react-native";
import {inject, observer} from "mobx-react";
import {loginScreenStyles} from "../styles/LoginScreenStyle";


const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const password = /^\S/;

@inject('rootStore')

@observer
class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        isLoading: false,

    };

    constructor(props) {
        super(props);
    }

    onPressLogin = () => {
        let {authStore} = this.props.rootStore;
        Keyboard.dismiss();
        if (!emailReg.test(authStore.loginFormData.email)) {
            Alert.alert("", "Enter Valid email");
        } else if (authStore.loginFormData.password === null || !password.test(authStore.loginFormData.password)) {
            Alert.alert("", "Enter Valid Password");
            } else {
            this.props.rootStore.authStore.onLogin((async (response) => {
                if (response) {
                    this.props.navigation.navigate("chatList");
                }
            }));
        }
    };

    renderContent = () => {
        let {authStore} = this.props.rootStore;
        return (
            <SafeAreaView style={[{flex: 1, backgroundColor: '#00DC95'},StatusBar.currentHeight ]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={loginScreenStyles.outerView}>
                        <View style={loginScreenStyles.loginInnerView}>
                            <View style={loginScreenStyles.imageOuterView}>
                                <Image
                                    source={require('../assets/logo.png')}
                                    style={[loginScreenStyles.logoStyle, {
                                        height: 100,
                                        width: 100,
                                    }]}/>
                            </View>
                            <View style={loginScreenStyles.formOuterView}>
                                <View
                                    style={loginScreenStyles.textInputOuterStyleActive}>
                                    <TextInput
                                        autoFocus={true}
                                        style={loginScreenStyles.textInputStyleActive}
                                        ref={(input) => {
                                            this.email = input;
                                        }}
                                        onChangeText={(text) => {
                                            authStore.onChangeLoginFormData("email", text);
                                        }}
                                        underlineColorAndroid="transparent"
                                        placeholder="Email"
                                        placeholderTextColor="#c3c3c3"
                                        autoCapitalize="none"
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this.password.focus()}
                                        value={this.props.rootStore.authStore.loginFormData.email}
                                    />
                                </View>

                                <View style={
                                    loginScreenStyles.textInputOuterStyleActive}>
                                    <TextInput style={loginScreenStyles.textInputStyle}
                                               ref={(input) => {
                                                   this.password = input;
                                               }}
                                               secureTextEntry={true}
                                               onChangeText={(text) => {
                                                   authStore.onChangeLoginFormData("password", text);
                                               }}
                                               underlineColorAndroid="transparent"
                                               placeholder="password"
                                               placeholderTextColor="#c3c3c3"
                                               autoCapitalize="none"
                                               value={authStore.loginFormData.password}
                                               returnKeyType={"go"}
                                               onSubmitEditing={() => this.onPressLogin()}
                                    />
                                </View>
                                <View style={loginScreenStyles.forgetPassWordStyle}>
                                </View>

                                <TouchableOpacity
                                    style={loginScreenStyles.loginButtonStyle}
                                    onPress={this.onPressLogin}
                                >
                                    {
                                        this.state.isLoading ? <ActivityIndicator
                                            size={'small'}
                                            color={"white"}
                                        /> : <Text
                                            allowFontScaling={false}
                                            style={loginScreenStyles.loginTextStyle}> Login </Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    };


    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                {this.renderContent()}
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScreen;