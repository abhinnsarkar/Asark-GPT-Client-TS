import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
