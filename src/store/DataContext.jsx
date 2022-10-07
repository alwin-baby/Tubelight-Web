import { createContext, useReducer } from "react";

//creates the context and initial values are set
const initialState = {
    homeStatus: false,
};
const DataContext = createContext(initialState);

export const ACTIONS = { //defining actions and exporting them
    DISPLAY_TOAST: "display-toast",
    UNDISPLAY_TOAST: "undisplay-toast"
};

const toastReducer = (toastStatus, action) => { //functions for displaying and undisplaying toast
    switch (action.type) {
        case "display-toast":
            return (toastStatus = true);
        case "undisplay-toast":
            return (toastStatus = false);
        default:
            return (toastStatus = false);
    }
};

export const DataContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [toastStatus, dispatchToastStatus] = useReducer(toastReducer, false);

    const context = {
        tasks: tasks,
        dispatch: dispatch,
        toastStatus: toastStatus,
        dispatchToastStatus: dispatchToastStatus,
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;