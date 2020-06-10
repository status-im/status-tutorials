// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";

import "@Static/css/main.scss";
// #endregion Local Imports

import Head from 'next/head'

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Head>
                    <title>The Status Network Tutorials</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta property="og:title" content="The Status Network Tutorials" />
                    <meta property="og:image" content="https://github.com/status-im/ambassador.status.im/blob/develop/public/status-logo-symbol.jpg?raw=true" />
                    <meta property="og:description" content="The Status Network Tutorials" />
                    <meta name="twitter:title" content="The Status Network Tutorials" />
                    <meta name="twitter:description" content="The Status Network Tutorials" />
                    <meta name="twitter:image" content="https://github.com/status-im/ambassador.status.im/blob/develop/public/status-logo-symbol.jpg?raw=true" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@ethstatus" />     
                </Head>                
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
