import { Link } from "react-router-dom";

export default function SuccessPage() {
    return (
        <div className="text-center p-8">
            <h2 className="text-2xl font-bold">Application Submitted</h2>
            <p className="mt-2">Thank you! We will process your application soon.</p>
            <Link to="/" className=" block mt-4 text-blue-500 underline">
            Return Home
            </Link>
        </div>
    );
}