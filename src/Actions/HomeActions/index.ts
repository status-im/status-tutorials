// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
import { PlanetaryService } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

var parseString = require('xml2js').parseString;

const CORS_PROXY = "https://cors-fix.status.im/";

const embarkBlog = "https://framework.embarklabs.io/atom.xml";

let embarkData = '';
let parsedData:any = [];

export const FetchEmbark = () => {
    fetch(`${CORS_PROXY}`+ `${embarkBlog}`)
    .then(response => response.text())
    .then(data => {
        embarkData = data
        parseString(embarkData, function (err:any, result:any) {
            const entries = result.feed.entry;
            entries.forEach(entry => {
                const category = entry.category[0]['$']['term']
                if (category === 'tutorials') {
                    parsedData.push(entry)
                }
            })
        });
        console.log(parsedData)
    });
}

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    // GetApod: (payload: IHomePage.Actions.IGetApodPayload) => async (
    //     dispatch: Dispatch
    // ) => {
    //     const result = await PlanetaryService.GetPlanetImage({
    //         params: payload.data,
    //     });

    //     dispatch({
    //         payload: {
    //             image: result,
    //         },
    //         type: ActionConsts.Home.SetReducer,
    //     });
    // },

    GetEmbarkData: (payload: IHomePage.Actions.EmbarkData) => async (
        dispatch: Dispatch
    ) => {
        await FetchEmbark();
        dispatch({
            payload: {
                embarkData: embarkData,
            },
            type: ActionConsts.Home.SetReducer,
        });
    },

};
