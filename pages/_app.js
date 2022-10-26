// import Layout from "../components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import React from "react";
import Layout from "../components/layout";
import styles from "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
