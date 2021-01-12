const PRIMARY_DARK = "#FC5D01";
const PRIMARY_LIGHT = "#FC9403";

export const styleSchema = {
  color: {
    background: "#f6f6f6",
    black: "#000000",
    primaryGradient: `linear-gradient(90deg, ${PRIMARY_LIGHT}) 0%, ${PRIMARY_DARK} 100%)`,
    primaryDark: PRIMARY_DARK,
    primaryLight: PRIMARY_LIGHT,
    primaryMedium: "#FC7803",
    secondaryDark: "#7D7D7D",
    secondaryLight: "#f6f6f6",
    white: "#FFFFFF",
  },
  shadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  shadowLight:
    "0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.0)",
  text: {},
};
