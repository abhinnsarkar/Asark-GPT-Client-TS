// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // // // Simulating an API call with a delay
// // // const simulateSignInAPI = (credentials: { name: string }) => {
// // //     return new Promise<{ data: { name: string } }>((resolve) => {
// // //         setTimeout(() => {
// // //             resolve({ data: { name: credentials.name } }); // Simulated API response
// // //         }, 1000);
// // //     });
// // // };

// // // export const signInAsync = createAsyncThunk(
// // //     "auth/signInAsync",
// // //     async (credentials: { name: string }) => {
// // //         // Simulate API call
// // //         const response = await simulateSignInAPI(credentials);
// // //         return response.data.name; // Extract the name from the API response
// // //     }
// // // );

// // interface AuthState {
// //     user: {
// //         name: string;
// //         email: string;
// //     } | null;
// //     isAuthenticated: boolean;
// //     token: string | null; // Define the 'token' property here
// //     // ... other properties related to authentication
// // }

// // // interface AuthState {
// // //     user: string | null;
// // //     isAuthenticated: boolean;
// // // }

// // const initialState: AuthState = {
// //     user: null,
// //     isAuthenticated: false,
// //     token: null,
// // };

// // const authSlice = createSlice({
// //     name: "auth",
// //     initialState,
// //     reducers: {
// //         register: (state, action) => {
// //             console.log("action is: ", action);
// //             state.isAuthenticated = true;
// //             state.user = action.payload.user;
// //             state.token = action.payload.token;
// //         },
// //         // other actions
// //     },
// // });

// // export const { register } = authSlice.actions;
// // export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// interface AuthState {
//     user: {
//         name: string;
//         email: string;
//     } | null;
//     isAuthenticated: boolean;
//     token: string | null;
// }

// const initialState: AuthState = {
//     user: null,
//     isAuthenticated: !!localStorage.getItem("token"), // Initialize from local storage
//     token: localStorage.getItem("token") || null, // Initialize from local storage
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         register: (state, action) => {
//             console.log("action is: ", action);
//             state.isAuthenticated = true;
//             state.user = action.payload.user;
//             state.token = action.payload.token;

//             // Save to local storage
//             localStorage.setItem("token", action.payload.token);
//             localStorage.setItem("user", JSON.stringify(action.payload.user));
//         },
//         // other actions
//     },
// });

// export const { register } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: {
        name: string;
        email: string;
    } | null;
    isAuthenticated: boolean;
    token: string | null;
}

const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
    user: initialUser,
    isAuthenticated: !!localStorage.getItem("token"), // Initialize from local storage
    token: localStorage.getItem("token") || null, // Initialize from local storage
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            console.log("action is: ", action);
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

            // Save to local storage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        login: (state, action) => {
            console.log("action is: ", action);
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

            // Save to local storage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
    },
});

export const { register, login } = authSlice.actions;
export default authSlice.reducer;
