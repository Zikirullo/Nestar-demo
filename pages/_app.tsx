import type { AppProps } from "next/app";
import { light } from "../scss/MaterialTheme/index";
import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../scss/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  //* Socket.io, Redux, Mui
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
