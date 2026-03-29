import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PassportFormData {
    fullName: string;
    nationality: string;
    passportNumber: string;
    issueDate: string;
    expiryDate: string;
    issuingAuthority: string;
    placeOfIssue: string;
}

const initialState: PassportFormData = {
    fullName: "",
    nationality: "",
    passportNumber: "",
    issueDate: "",
    expiryDate: "",
    issuingAuthority: "",
    placeOfIssue: "",
};

const passportSlice = createSlice({
    name: "passport",
    initialState,
    reducers: {
        updatePassportForm: (state, action: PayloadAction<Partial<PassportFormData>>) => {
            return { ...state, ...action.payload };
        },
        resetForm: () => initialState,
    },
});

export const { updatePassportForm, resetForm } = passportSlice.actions;
export default passportSlice.reducer;