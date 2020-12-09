import React from "react";
import { INavOption } from "../../types/nav-option";
import {SBottomTabNav} from "../../../platform-specific/bottom-tab-nav";
import {View, Text} from "react-native";
import {GLOBAL_STYLES} from "../../constants/global-styles";
import {icons} from "../../constants/icons";
import {Home} from "../home";
import {CameraButton} from "../camera-button";

const Box = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Box</Text>
    </View>
);

const Search = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Search</Text>
    </View>
);

const Favorite = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Favorite</Text>
    </View>
);


const handleCameraButtonPress = () => {
    console.log(`camera pressed`)
};

const navOptions: INavOption[] = [
    {name: "Home", component: Home, icon: icons.flash},
    {name: "Box", component: Home, icon: icons.cube},
    {name: "Camera", component: Home, customElement: <CameraButton onPress = {() => handleCameraButtonPress()}/>},
    {name: "Search", component: Home, icon: icons.search},
    {name: "Favorite", component: Home, icon: icons.heart},
];

const Tabs = () => {
    return (
        <SBottomTabNav
            height={"10%"}
            iconSize={15}
            showLabels={false}
            navOptions={navOptions}
        />
    );
};

export {Tabs};


