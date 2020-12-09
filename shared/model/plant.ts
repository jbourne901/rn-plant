import {IIcon} from "../../platform-specific/types";
import {images} from "../constants/images";

export interface IPlant {
    id: number;
    name: string;
    img: IIcon;
    favorite: boolean;
};

const testPlants: IPlant[] = [
    {id: 1, name: "Plant 1", img: images.plant1, favorite: false},
    {id: 2, name: "Plant 2", img: images.plant2, favorite: true},
    {id: 3, name: "Plant 3", img: images.plant3, favorite: false},
    {id: 4, name: "Plant 4", img: images.plant4, favorite: false},
];

export {testPlants};
