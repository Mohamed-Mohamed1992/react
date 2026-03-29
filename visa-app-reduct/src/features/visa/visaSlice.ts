import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface VisaFormData {
    fullName: string;
    nationality: string;
    passportNumber: string;
    purpose: string;
}

const initialState: VisaFormData = {
    fullName: "",
    nationality: "",
    passportNumber: "",
    purpose: "",
};

const visaSlice = createSlice({
    name: "visa",
    initialState,
    reducers: {
        updateVisaForm: (state, action: PayloadAction<Partial<VisaFormData>>) => {
            return { ...state, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { updateVisaForm, resetForm } = visaSlice.actions;
export default visaSlice.reducer;