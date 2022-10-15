import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#E91E63",
        dark: "#C2185B",
        light: "#F8BBD0",
      },
      secondary: {
        main: "#ffc107",
        light: "#ffecb3",
        dark: "#ffa000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
