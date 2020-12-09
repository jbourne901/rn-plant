import React from "react";
import { Preload } from "../../../platform-specific/preload";
import { SText } from "../../../platform-specific/text";
import {Tabs} from "../tabs";
import { INavOption } from "../../types/nav-option";
import { SNavigationContainer } from "../../../platform-specific/navigation-container";
import { SStackNav } from "../../../platform-specific/stack-nav";

const PlantDetails = () => {
   return (<SText text="plant details" />);
};
 
const navOptions: INavOption[] = [
    {name: "Home", component: Tabs },
    {name: "PlantDetails", component: PlantDetails },
];

const Main = () => {
    return (
    <Preload>
        <SNavigationContainer>
            <SStackNav 
                showHeader={false}
                initialRoute={"Home"}
                navOptions = {navOptions}
            />            
        </SNavigationContainer>
    </Preload>        
    );
};

export {Main};