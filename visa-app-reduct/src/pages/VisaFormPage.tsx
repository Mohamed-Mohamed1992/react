import { useDispatch, useSelector } from "react-redux";
import { updateVisaForm } from "../features/visa/visaSlice";
import type { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

export default function VisaFormPage() {
    const form = useSelector((state: RootState) => state.visa);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    )  => {
        dispatch(updateVisaForm({ [e.target.name]: e.target.value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/review");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
            <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 border rounded"
            />
            <input
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                className="w-full p-2 border rounded"
            />
            <input
                name="passportNumber"
                value={form.passportNumber}
                onChange={handleChange}
                placeholder="Passport Number"
                className="w-full p-2 border rounded"   
            />      
            <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                className="w-full p-2 border rounded"   
            >
                <option value="">Select Purpose</option>
                <option value="Tourism">Tourism</option>
                <option value="Business">Business</option>
                <option value="Study">Study</option>
            </select>
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next
            </button>
        </form>
    );
}