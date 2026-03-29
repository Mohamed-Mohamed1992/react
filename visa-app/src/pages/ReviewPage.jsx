import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("visaForm")) || {};

    return (
        <div>
            <h2>Review Your Application</h2>
            <p>
                <strong>Name:</strong> {data.name}
            </p>
            <p>
                <strong>Passport:</strong> {data.passport}
            </p>
            <p>
                <strong>Country:</strong> {data.country}
            </p>
            <button onClick={() => navigate("/submit")}>Submit</button>
        </div>
    );
}