// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IHomePage } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IHomePage.IStateProps = {
    home: {
        version: 1,
    },
    image: {
        url: "",
    },
    embarkData: {
        data: []
    },
    nimbusData: {
        data: []
    },
    subspaceData: {
        data: []
    },
    active: 0
};

type IMapPayload = IHomePage.Actions.IMapPayload;

export const HomeReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.Home.SetReducer:
            return {
                ...state,
                ...action.payload,
            };

        case ActionConsts.Home.ResetReducer:
            return INITIAL_STATE;

        case "STATUS":
            return { 
                ...state,
                active: 0
            };

        case "EMBARK":
            return { 
                ...state,
                active: 1
            };

        case "SUBSPACE":
            return {
                ...state,
                active: 2
            };
            
        case "NIMBUS":
            return {
                ...state,
                active: 3
            };

        default:
            return state;
    }
};