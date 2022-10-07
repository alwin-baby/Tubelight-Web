import { createContext, useReducer } from "react";

//creates the context and initial values are set
const initialState = {
    homePageStatus: false,
};
const DataContext = createContext(initialState);

export const ACTIONS = { //defining actions and exporting them
    DISPLAY_HOME_PAGE: "display-home-page",
};

const homePageReducer = (homePageStatus, action) => { //functions for displaying and undisplaying toast
    switch (action.type) {
        case "display-home-page":
            return (homePageStatus = true);
        default:
            return (homePageStatus = false);
    }
};

export const DataContextProvider = (props) => {
    const [homePageStatus, dispatchHomePageStatus] = useReducer(homePageReducer, false);

    const context = {
        homePageStatus: homePageStatus,
        dispatchHomePageStatus: dispatchHomePageStatus
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;