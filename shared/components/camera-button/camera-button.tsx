import React from "react";
import { icons } from "../../constants/icons";
import {SButton} from "../../../platform-specific/button";
import {GLOBAL_STYLES} from "../../constants/global-styles";

interface ICameraButtonProps {
    onPress: () => void;
}

const CameraButton = (props: ICameraButtonProps) => (
    <SButton 
        buttonStyle="rounded"
        width={GLOBAL_STYLES.CAMERA_SIZE}
        height={GLOBAL_STYLES.CAMERA_SIZE}
        borderRadius={25}
        backgroundColor={GLOBAL_STYLES.CAMERA_BG_COLOR}
        icon={icons.camera} 
        iconSize={GLOBAL_STYLES.CAMERA_ICON_SIZE}
        onPress = { () => props.onPress() }
    />
);

export {CameraButton};