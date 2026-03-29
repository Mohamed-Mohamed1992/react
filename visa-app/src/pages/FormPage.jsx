import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
    const [formData, SetFormData] = useState({
        name: "",
        passport: "",
        country: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value});
    };
    const handleNext = () => {
        localStorage.setItem("visaForm", JSON.stringify(formData));
        navigate("/review");
    };

    return (
        <div>
            <h2>Visa Application Form</h2>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <br />
            <input 
            name="passport"
            placeholder="Passport Number"
            onChange={handleChange}
            />
            <br />
            <input 
            name="country"
            placeholder="Destination Country"
            onChange={handleChange}
            />
            <br />
            <button onClick={handleNext}>Next</button>
        </div>
    );
}