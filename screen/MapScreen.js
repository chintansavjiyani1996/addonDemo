import React, {Component} from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Permissions, Location} from 'expo';
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 22.2587;
const LONGITUDE = 71.1924;
const LATITUDE_DELTA = 5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "AIzaSyD8Gx6dA5LON_awExhJ0FBALfvD8k94P60";


@inject('rootStore')
@observer
class MapScreen extends Component {
    static navigationOptions = {
        header: null
    };

    renderHeader = () => {
        return (
            <View style={styles.headerOuterViewStyle}>
                <TouchableOpacity onPress={this.onPressGoBack}>
                    <Image source={require('../assets/backArrow.png')} style={styles.backArrowStyle}/>
                </TouchableOpacity>
                <Text style={styles.headerTextStyle}>Map</Text>
            </View>

        )
    };

    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
            location: null,
            region: null,
            errorMessage: null,
        };

        this.mapView = null;
    }

    async componentDidMount() {
        await this.getLocationAsync();
    }

    getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        let place=[];
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        const placeLocation= {
            latitude: parseFloat(this.props.rootStore.dashboardStore.selectedPlace.lat) ,
            longitude: parseFloat(this.props.rootStore.dashboardStore.selectedPlace.long)
        };
        place.push(region);
        place.push(placeLocation);
        console.log(place)
        this.setState({coordinates:place})
    };

    onPressGoBack = () => {
        this.props.navigation.goBack()
    };


    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <MapView
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    style={{flex: 0.9}}
                    ref={c => this.mapView = c}
                >
                    {this.state.coordinates.map((coordinate, index) =>
                        <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}/>
                    )}
                    {(this.state.coordinates.length >= 2) && (
                        <MapViewDirections
                            origin={this.state.coordinates[0]}
                            waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
                            destination={this.state.coordinates[1]}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            optimizeWaypoints={true}
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => {
                                console.log('Distance: ${result.distance} km')
                                console.log('Duration: ${result.duration} min.')

                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (width / 20),
                                        bottom: (height / 20),
                                        left: (width / 20),
                                        top: (height / 20),
                                    }
                                });
                            }}
                            onError={(errorMessage) => {
                                // console.log('GOT AN ERROR');
                            }}
                        />
                    )}
                </MapView>
            </View>

        );
    }
}

export default MapScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerOuterViewStyle: {
        flex: 0.1,
        marginTop: StatusBar.currentHeight,
        flexDirection: "row",
        backgroundColor: "blue",
        alignItems: "center"
    },
    backArrowStyle:{
        height: 23,
        alignSelf: "center",
        marginHorizontal: 10,
        width: 23,
        tintColor: "white"
    },
    headerTextStyle:{
        color: "white",
        marginHorizontal: 10,
        fontSize: 22
    }
});
