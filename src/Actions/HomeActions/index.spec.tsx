// #region Global Imports
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
// #endregion Global Imports

// #region Local Imports
import { HomeActions } from "@Actions";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Home action tests", () => {
    test("Map test", async () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: {
                    version: 2,
                },
                type: ActionConsts.Home.SetReducer,
            },
        ];

        store.dispatch(
            HomeActions.Map({
                version: 2,
            })
        );

        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Reset test", async () => {
        const store = mockStore({
            home: {
                version: 1,
            },
        });

        const expectedActions = [
            {
                type: ActionConsts.Home.ResetReducer,
            },
        ];

        store.dispatch(HomeActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
