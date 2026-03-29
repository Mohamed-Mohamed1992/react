import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "../features/visa/visaSlice";
import type { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const form = useSelector((state: RootState) => state.visa);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    dispatch(resetForm());
    navigate("/success");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text=xl font-bold mb-4">Review Your Application</h2>
      <p>
        <strong>Full Name:</strong> {form.fullName}
      </p>
      <p>
        <strong>Nationality:</strong> {form.nationality}
      </p>
      <p>
        <strong>Passport Number:</strong> {form.passportNumber}
      </p>
      <p>
        <strong>Purpose:</strong> {form.purpose}
      </p>
      <button onClick={handleConfirm} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Confirm and Submit
      </button>
    </div>
  );
}
