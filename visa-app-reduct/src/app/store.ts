import { configureStore } from "@reduxjs/toolkit";
import visaReducer from "../features/visa/visaSlice";
import passportReducer from "../features/visa/passportSlice";


export const store = configureStore({
    reducer: {
        visa: visaReducer,
        passport: passportReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;