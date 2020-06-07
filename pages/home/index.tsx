// #region Global Imports
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Top,
    TopText,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
    Apod,
    ApodButton,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions, FetchEmbark } from "@Actions";
import { Heading, LocaleButton } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const [embarkData, getEmbarkData] = useState<string>('');

    // const CORS_PROXY = "https://cors-fix.status.im/";

    // const embarkBlog = "https://framework.embarklabs.io/atom.xml";

    // const getEmarkData = () => {
    //     fetch(`${CORS_PROXY}`+ `${embarkBlog}`)
    //     .then(response => response.text())
    //     .then(data => {
    //         getEmbarkData(data);
    //     });
    // }

    // useEffect(() => {
    //     getEmarkData()
    // }, [])

    console.log(home)

    return (
        <Container>
            <div>
                hi
            </div>
        </Container>
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
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
