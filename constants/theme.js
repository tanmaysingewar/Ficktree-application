import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#194868", // Dark Blue
    secondary: "#FF615F",   // peach
    background : '#F6F6F6',

    // colors
    black: "#000000",
    light_black : "#1b1b1b",
    white: "#FFFFFF",
    lightGray: "#7a8fa6",
    green_light : '#25f8bd',
    greenish : "#21d8d9",
    blueish : "#2fbbf0",
    gray : '#7a8fa6',
    browne : '#4e4e4e',
    highlighter : '#2FBBF0',
    cardColor : '#1C1212',
    add_background : '#EBE8E8',
    red : '#FF5757',
    cream : '#F5E9DC',
    borderColor : '#DBDADA'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
 
const titleFontFamily =  'Righteous'
const titleFontSize =  30 
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 20 },
    title : {fontFamily : titleFontFamily, fontSize: titleFontSize, lineHeight: 50},
    special_text : {fontFamily :  'brush-script' , fontSize : 35, lineHeight : 20, }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;