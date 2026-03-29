import { useDispatch, useSelector } from "react-redux";
import { updatePassportForm } from "../features/visa/passportSlice";
import type { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

export default function PassportFormPage() {
  const form = useSelector((state: RootState) => state.passport);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    dispatch(updatePassportForm({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold">Passport Details</h2>

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
      <input
        type="date"
        name="issueDate"
        value={form.issueDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="date"
        name="expiryDate"
        value={form.expiryDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="issuingAuthority"
        value={form.issuingAuthority}
        onChange={handleChange}
        placeholder="Issuing Authority"
        className="w-full p-2 border rounded"
        required
      />

      <input
        name="placeOfIssue"
        value={form.placeOfIssue}
        onChange={handleChange}
        placeholder="Place of Issue"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </form>
  );
}
