import Typography from "typography";
import CodePlugin from "typography-plugin-code";

const options = {
  headerFontFamily: ["Work Sans", "sans-serif"],
  bodyFontFamily: ["Work Sans", "sans-serif"],
  baseFontSize: "19px",
  baseLineHeight: 1.5,
  scale: 1,
  plugins: [new CodePlugin()],
  overrideStyles: () => ({
    table: {
      width: "calc(100vw - 2.25rem)",
      tableLayout: "fixed",
      wordWrap: "break-word"
    },
    "@media (min-width:768px)": {
      table: {
        width: "100%"
      }
    },
    "th:first-child, td:first-child": {
      width: "30%"
    }
  })
};

const typography = new Typography(options);

export default typography;
