import React from "react";
import "../src/components/styles.css";
import { ThemeProvider } from 'theme-ui';
import { theme } from '../src/theme';

import Layout from "../src/components/layout";

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider> 

    )
}