import React from "react";
import "../src/components/styles.css";

export default function App({Component, pageProps}) {
    return <Component {...pageProps} />
}