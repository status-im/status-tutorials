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
const embarkOldBlog = "https://framework.embarklabs.io/atom.xml";

const nimbusBlog = "https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:nim&limit=all&include=authors";

const subspaceBlog = "https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:subspace&limit=all&include=authors";

let embarkData: any = '';
let parsedEmbarkData:any = [];

let nimbusData: any = '';
let parsedNimbusData:any = [];

let subspaceData: any = '';
let parsedSubspaceData:any = [];

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

export const FetchOldEmbark = async () => {
    await fetch(`${CORS_PROXY}`+ `${embarkOldBlog}`)
    .then(response => response.text())
    .then(data => {
        embarkData = data
        parseString(embarkData, function (err:any, result:any) {
            const entries: Array<any> = result.feed.entry;
            entries.forEach(entry => {
                const category = entry.category[0]['$']['term']
                const title = entry.title[0];
                const checkDuplicate = title == "How to upgrade to Embark 4" || title == "Introduction to Web3 - What Are Your Options?" || 
                    title.includes("Nim vs Crystal")
                if (category === 'tutorials' && !checkDuplicate) {
                    const postData: any = {}
                    postData.title = entry.title[0];
                    postData.published = entry.published[0];
                    postData.url = entry.id[0];
                    postData.summary = entry.summary[0]._;
                    parsedEmbarkData.push(postData)
                }
            })
        });
    });
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

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
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
