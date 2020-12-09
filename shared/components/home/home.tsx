import React, {useState} from "react";
import {SView} from "../../../platform-specific/view";
import {SCenter} from "../../../platform-specific/center";
import {SRow} from "../../../platform-specific/row";
import {SBody} from "../../../platform-specific/body";
import { GLOBAL_STYLES } from "../../constants/global-styles";
import { SButton } from "../../../platform-specific/button";
import { SText } from "../../../platform-specific/text";
import {icons} from "../../constants/icons";
import { SHorizontalList } from "../../../platform-specific/horizontal-list";
import {IPlant, testPlants} from "../../model/plant";
import {Plant} from "../plant";

const Home = () => {
    const [plants, setPlants] = useState<IPlant[]>(testPlants);
    const handleNewPlant = () => {
        console.log("HandleNewPlant")
    };

    return (
        <SBody>
            <SView
                height="30%"
                backgroundColor="white"
            >
                <SView
                    flex={1}
                    flexDirection="column"
                    borderBottomRadius={50}
                    backgroundColor={GLOBAL_STYLES.HOME_TOP_BG_COLOR}
                    justifyContent="flex-start"
                >
                    <SRow
                        marginTop={GLOBAL_STYLES.HOME_TOP_OFFSET}
                        marginLeft = {GLOBAL_STYLES.HOME_EDGE_OFFSET} 
                        marginRight = {GLOBAL_STYLES.HOME_EDGE_OFFSET} 
                        justifyContent = "space-between"                        
                        alignItems = "flex-start"                        
                    >
                        <SText 
                            text="New Plants" 
                            color={GLOBAL_STYLES.REVERSE_TEXT_COLOR}
                            font = {GLOBAL_STYLES.SUBHEADER_FONT}
                        />
                        <SButton 
                            buttonStyle="plain"
                            icon = {icons.focus}
                            iconSize={20}
                            onPress = {() => handleNewPlant()}
                            backgroundColor="transparent" 
                        />
                    </SRow>
                    <SCenter>
                        <SHorizontalList<IPlant>
                            width="80%"
                            list = {plants}
                            keyExtractor = {(item: IPlant, index: number) => ""+item.id}
                            renderItem = {(item: IPlant, index: number) => <Plant plant={item} index={index} />}
                        />
                    </SCenter>
                </SView>                                
            </SView>
            <SView
                height="50%"
                backgroundColor="lightgray"
            >
                <SText text="Center" />
            </SView>
            <SView
                height="20%"
                backgroundColor="lightgray"
            >
                <SText text="Footer" />
            </SView>
        </SBody>
    );
}

export {Home};

