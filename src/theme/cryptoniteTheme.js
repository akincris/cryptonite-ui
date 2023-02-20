const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#7dc172",
          },
          secondary: {
            main: "#f1faea",
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
            main: "#3a9228",
          },
          secondary: {
            main: "#46a433",
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
