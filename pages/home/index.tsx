// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Header, Footer, Navbar } from "@Components";
import Status from "../../src/Components/Blogs/Status"
import Embark from "../../src/Components/Blogs/Embark"
import Subspace from "../../src/Components/Blogs/Subspace"
import Nimbus from "../../src/Components/Blogs/Nimbus"

// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const switchComponent = (active: Number) => {
    switch (active) {
        case 0:
            return <Status/>
        case 1:
            return <Embark/>
        case 2:
            return <Subspace/>
        case 3:
            return <Nimbus/>
    }
}

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const home = useSelector((state: IStore) => state.home);

    let active = home.active;

    return (
        <>
            <Navbar/>
            <Header/>
            {switchComponent(active)}
            <Footer/>
        </>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetEmbarkData({
            data: { },
        })
    );
    await ctx.store.dispatch(
        HomeActions.GetStatusData({
            data: { },
        })
    );
    await ctx.store.dispatch(
        HomeActions.GetNimbusData({
            data: { },
        })
    );
    await ctx.store.dispatch(
        HomeActions.GetSubspaceData({
            data: { },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
