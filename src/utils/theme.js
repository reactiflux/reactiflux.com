export const isMobile = (props) => props.theme.isMobile;
export const mobilePadding = (props) => props.theme.mobilePadding;
const selectColours = (props) => props.theme.colours;

export const background = (props) => selectColours(props).background;
export const blue = (props) => selectColours(props).blue;
export const darkPink = (props) => selectColours(props).darkPink;
export const foreground = (props) => selectColours(props).foreground;
export const green = (props) => selectColours(props).green;
export const pink = (props) => selectColours(props).pink;
export const yellow = (props) => selectColours(props).yellow;

export const boxShadow = "0 0 4px 2px rgba(0, 0, 0, 0.1)";

export function getTheme({ isMobile }) {
  return {
    isMobile,
    mobilePadding: isMobile && "42px",

    colours: {
      blue: "#05d7ff",
      green: "#44b892",
      pink: "#dc1d64",
      yellow: "#e6a735",

      darkPink: "#b3124d",

      background: "white",
      foreground: "#51234f",
    },
  };
}
