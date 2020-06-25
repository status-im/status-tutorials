// #region Global Imports
import { WithTranslation } from "next-i18next";
// #endregion Global Imports

declare namespace IHomePage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
        statusData: {
            data: Array<any>;
        };
        embarkData: {
            data: Array<any>;
        };
        nimbusData: {
            data: Array<any>;
        };
        subspaceData: {
            data: Array<any>;
        };
        keycardData: {
            data: Array<any>;
        };
        active: Number;
        searchKeyword: string;
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}

        export interface StatusData {
            data: {};
        }

        export interface EmbarkData {
            data: {};
        }

        export interface NimbusData {
            data: {};
        }

        export interface SubspaceData {
            data: {};
        }

        export interface KeycardData {
            data: {};
        }
    }
}

export { IHomePage };
