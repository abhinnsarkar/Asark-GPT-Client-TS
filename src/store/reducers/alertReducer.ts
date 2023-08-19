import { createSlice } from "@reduxjs/toolkit";

export interface AlertState {
    alert: {
        visible: boolean;
        content: string;
        severity: string;
    };
}

const initialState: AlertState = {
    alert: {
        visible: false,
        content: "",
        severity: "",
    },
};

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        openAlert: (state, action) => {
            console.log(action);
            return {
                ...state,
                alert: {
                    visible: true,
                    content: action.payload.content,
                    severity: action.payload.severity,
                },
            };
        },
        closeAlert: (state) => {
            // console.log(action);
            return {
                ...state,
                ...initialState,
            };
        },
    },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
