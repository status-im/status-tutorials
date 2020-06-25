// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

import fetch from 'isomorphic-unfetch'

var parseString = require('xml2js').parseString;

const CORS_PROXY = "https://cors-fix.status.im/";

const embarkBlog = "https://blog.embarklabs.io/atom.xml";

const statusBlog = "https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:tutorial-status&limit=all&include=authors";

const nimbusBlog = "https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:tutorial-nimbus&limit=all&include=authors";

const subspaceBlog = "https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:tutorial-subspace&limit=all&include=authors";

const keycardBlog = "https://news.keycard.tech//ghost/api/v2/content/posts/?key=d7ad0ac3484bdf01fadf32b59c&filter=tag:tutorial-keycard&limit=all&include=authors";

let statusData: any = '';
let parsedStatusData:any = [];

let embarkData: any = '';
let parsedEmbarkData:any = [];

let nimbusData: any = '';
let parsedNimbusData:any = [];

let subspaceData: any = '';
let parsedSubspaceData:any = [];

let keycardData: any = '';
let parsedKeycardData:any = [];

interface StatusBlog {
    title: string;
    published_at: string;
    primary_author: any;
    excerpt: string;
    feature_image: string;
    url: string;
}

interface NimbusBlog {
    title: string;
    published_at: string;
    primary_author: any;
    excerpt: string;
    feature_image: string;
    url: string;
}

interface SubspaceBlog {
    title: string;
    published_at: string;
    primary_author: any;
    excerpt: string;
    feature_image: string;
    url: string;
}

interface KeycardBlog {
    title: string;
    published_at: string;
    primary_author: any;
    excerpt: string;
    feature_image: string;
    url: string;
}

export const FetchEmbark = async () => {
    await fetch(`${embarkBlog}`)
    .then(response => response.text())
    .then(data => {
        embarkData = data
        parseString(embarkData, function (err:any, result:any) {
            const entries: Array<any> = result.feed.entry;
            entries.forEach(entry => {
                const category = entry.category[0]['$']['term']
                if (category === 'tutorials') {
                    const postData: any = {}
                    postData.title = entry.title[0];
                    postData.published = entry.published[0];
                    postData.author = entry.author[0].name[0];
                    postData.url = entry.id[0];
                    postData.summary = entry.summary[0];
                    parsedEmbarkData.push(postData)
                }
            })
        });
    })
}

export const FetchStatus = async () => {
    const quickStart: any = {
        title: 'Status-React Quickstart Guide',
        author: 'robin_percy',
        excerpt: 'Build Status-react on your machine.',
        url: 'https://status.im/technical/build_status/status_react_quickstart.html',
    }
    const buildStatusGo: any = {
        title: 'Build Status-Go',
        author: '',
        excerpt: 'Status-go is an underlying part of Status depending on go-ethereum which is forked and modified by us.',
        url: 'https://status.im/technical/build_status/status_go.html',
    }
    parsedStatusData.push(quickStart);
    parsedStatusData.push(buildStatusGo);
    await fetch(`${CORS_PROXY}`+ `${statusBlog}`)
    .then(response => response.json())
    .then(data => {

        statusData = data.posts
        statusData.forEach((entry: StatusBlog) => {
            const postData: any = {}
            postData.title = entry.title;
            postData.published_at = entry.published_at;
            postData.excerpt = entry.excerpt;
            postData.author = entry.primary_author.name;
            postData.feature_image = entry.feature_image;
            postData.url = entry.url;
            parsedStatusData.push(postData);
        })
    })
}

export const FetchNimbus = async () => {
    await fetch(`${CORS_PROXY}`+ `${nimbusBlog}`)
    .then(response => response.json())
    .then(data => {
        nimbusData = data.posts
        nimbusData.forEach((entry: NimbusBlog) => {
            const postData: any = {}
            postData.title = entry.title;
            postData.published_at = entry.published_at;
            postData.excerpt = entry.excerpt;
            postData.author = entry.primary_author.name;
            postData.feature_image = entry.feature_image;
            postData.url = entry.url;
            parsedNimbusData.push(postData);
        })
    })
}

export const FetchSubspace = async () => {
    await fetch(`${CORS_PROXY}`+ `${subspaceBlog}`)
    .then(response => response.json())
    .then(data => {
        subspaceData = data.posts
        subspaceData.forEach((entry: SubspaceBlog) => {
            const postData: any = {}
            postData.title = entry.title;
            postData.published_at = entry.published_at;
            postData.excerpt = entry.excerpt;
            postData.author = entry.primary_author.name;
            postData.feature_image = entry.feature_image;
            postData.url = entry.url;
            parsedSubspaceData.push(postData);
        })
    })
}

export const FetchKeycard = async () => {
    await fetch(`${CORS_PROXY}`+ `${keycardBlog}`)
    .then(response => response.json())
    .then(data => {
        keycardData = data.posts
        keycardData.forEach((entry: KeycardBlog) => {
            const postData: any = {}
            postData.title = entry.title;
            postData.published_at = entry.published_at;
            postData.excerpt = entry.excerpt;
            postData.author = entry.primary_author.name;
            postData.feature_image = entry.feature_image;
            postData.url = entry.url;
            parsedKeycardData.push(postData);
        })
    })
}

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    Search: (text: String) => ({
        type: 'SEARCH',
        payload: text,
    }),

    GetEmbarkData: (payload: IHomePage.Actions.EmbarkData) => async (
        dispatch: Dispatch
    ) => {
        await FetchEmbark();
        dispatch({
            payload: {
                embarkData: parsedEmbarkData,
            },
            type: ActionConsts.Home.SetReducer,
        });
        parsedEmbarkData = []
    },

    GetStatusData: (payload: IHomePage.Actions.NimbusData) => async (
        dispatch: Dispatch
    ) => {
        await FetchStatus();
        dispatch({
            payload: {
                statusData: parsedStatusData,
            },
            type: ActionConsts.Home.SetReducer,
        });
        parsedStatusData = []
    },

    GetNimbusData: (payload: IHomePage.Actions.NimbusData) => async (
        dispatch: Dispatch
    ) => {
        await FetchNimbus();
        dispatch({
            payload: {
                nimbusData: parsedNimbusData,
            },
            type: ActionConsts.Home.SetReducer,
        });
        parsedNimbusData = []
    },

    GetSubspaceData: (payload: IHomePage.Actions.SubspaceData) => async (
        dispatch: Dispatch
    ) => {
        await FetchSubspace();

        dispatch({
            payload: {
                subspaceData: parsedSubspaceData,
            },
            type: ActionConsts.Home.SetReducer,
        });

        parsedSubspaceData = []
    },

    GetKeycardData: (payload: IHomePage.Actions.KeycardData) => async (
        dispatch: Dispatch
    ) => {
        await FetchKeycard();

        dispatch({
            payload: {
                keycardData: parsedKeycardData,
            },
            type: ActionConsts.Home.SetReducer,
        });

        parsedKeycardData = []
    },

    Active: (activeIndex: any) => async (
        dispatch: Dispatch
    ) => {
        await dispatch({
            payload: {
                active: activeIndex,
            },
            type: ActionConsts.Home.SetReducer,
        });
    }

};
