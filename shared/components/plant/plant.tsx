import React from "react";
import { IPlant } from "../../model/plant";
import { SCenter } from "../../../platform-specific/center";
import { SImage } from "../../../platform-specific/image";
import { getScreenWidthPercent } from "../../../platform-specific/dimensions";
import { GLOBAL_STYLES } from "../../constants/global-styles";

interface IPlantProps {
    plant: IPlant;
    index: number;
}

const Plant = (props: IPlantProps) => {
    return (
        <SCenter 
            marginLeft={GLOBAL_STYLES.PLANT_MARGIN}
            marginRight={GLOBAL_STYLES.PLANT_MARGIN}
        >
            <SImage 
                source={props.plant.img}
                borderRadius={10}   
                width={getScreenWidthPercent(20)}
                height="74%"
                resizeMode="cover"
            />
        </SCenter>
    );    
};

export {Plant};
