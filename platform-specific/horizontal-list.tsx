import React from "react";
import {FlatList, ListRenderItemInfo, ViewStyle} from "react-native";
import {SText} from "./text";
import {ISHorizontalListProps} from "../shared/types/props";

function SHorizontalList<T> (props: ISHorizontalListProps<T>) {
    const extractKey = (item: T, index: number) => {
        if(props.keyExtractor) {
            return props.keyExtractor(item, index);
        }
        const key = (item as any).key;
        if(key) {
            return ""+key;
        }
        return ""+index;
    };
    const renderItem = (item: T, index: number) => {
        if(props.renderItem) {
            return props.renderItem(item, index);
        }
        const text = ""+(item as any).value;
        return (
            <SText text={text} />
        );
    };

    const style: ViewStyle = {
    }
    if(props.width) {
        style.width=props.width;
    }
    
    return (
        <FlatList<T>
            style={style}
            showsHorizontalScrollIndicator={props.showScrollbar}
            horizontal
            data = {props.list}
            keyExtractor = {(item: T, index: number) => extractKey(item, index)}
            renderItem = {(p: ListRenderItemInfo<T>) => renderItem(p.item, p.index)}
        />
    );
};
 
export {SHorizontalList};
