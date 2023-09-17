import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
    },
    devTools: process.env.REACT_APP_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
