const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#d1d4d3",
            light: "#ededed",
          },
          secondary: {
            main: "#000000",
            light: "#c4e1c8",
          },
          error: {
            main: "#d79995",
          },
          warning: {
            main: "#dee36f",
          },
          info: {
            main: "#daebcd",
          },
          success: {
            main: "##67ba29",
          },
        }
      : {
          primary: {
            main: "#18232b",
            light: "#121b21",
          },
          secondary: {
            main: "#46a433",
            light: "#136206",
          },
          error: {
            main: "#8a3d3b",
          },
          warning: {
            main: "#dae44b",
          },
          info: {
            main: "#85ec48",
          },
          success: {
            main: "#008900",
          },
        }),
  },
});

export default getDesignTokens;
